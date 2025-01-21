# Step 1: Build the React frontend
FROM node:22-alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy React's package.json and package-lock.json
COPY client/package*.json ./client/

# Install frontend dependencies
RUN npm install --prefix client

# Copy the entire React app into the container
COPY client/ ./client/

# Build the React app (output will be in client/build or client/dist)
RUN npm run build --prefix client


# Step 2: Set up the backend (Node.js server)
FROM node:22-alpine

# Set the working directory for the backend
WORKDIR /usr/src/app

# Copy the backend package.json and package-lock.json
COPY server/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY server/ ./

# Copy the built React app from the build stage into the backend's static folder
COPY --from=build /usr/src/app/client/dist ./client/dist

# Expose the backend port
EXPOSE 5001

# Start the backend server
CMD ["npm", "start"]
