import { CreateTableCommand, CreateTableCommandInput } from '@aws-sdk/client-dynamodb';
import { PutCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDBClient from '../config/dynamodb';
import dynamoDBDocumentClient from '../config/dynamodb'; // For document-based operations

// Table creation parameters
const params: CreateTableCommandInput = {
  TableName: 'Schedules',
  KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

// Function to create the table
async function createTable() {
  try {
    const command = new CreateTableCommand(params);
    const result = await dynamoDBClient.send(command);
    console.log('Table created:', result.TableDescription?.TableName);
  } catch (error: any) {
    if (error.name === 'ResourceInUseException') {
      console.log('Table already exists. Skipping creation.');
    } else {
      console.error('Unable to create table:', error);
    }
  }
}

// Function to seed the table with initial data
async function seedData() {
  const schedules = [
    {
      id: '1',
      title: 'Morning Yoga',
      description: 'Relaxing yoga session',
      date: '2025-01-25',
      time: '07:00',
    },
    {
      id: '2',
      title: 'Evening Run',
      description: 'Evening jogging session',
      date: '2025-01-25',
      time: '18:00',
    },
  ];

  try {
    for (const schedule of schedules) {
      await dynamoDBDocumentClient.send(
        new PutCommand({
          TableName: 'Schedules',
          Item: schedule,
        })
      );
    }
    console.log('Seed data added!');
  } catch (error) {
    console.error('Unable to seed data:', error);
  }
}

// Main function to create the table and seed data
async function setupDynamoDB() {
  await createTable();
  await seedData();
}

setupDynamoDB();
