import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// Create the DynamoDB client
const dynamoDBClient = new DynamoDBClient({
  region: process.env.AWS_REGION || 'us-east-1',
  endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000', // Use local endpoint
  credentials: {
    accessKeyId: 'fakeMyKeyId', // Use dummy credentials for DynamoDB Local
    secretAccessKey: 'fakeSecretAccessKey', // Use dummy credentials for DynamoDB Local
  },
});

// Wrap the client to simplify interactions
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export default dynamoDBDocumentClient;
