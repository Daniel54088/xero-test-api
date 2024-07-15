# Use Node.js v20 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variable
ENV NODE_ENV development
ENV PORT 3001
ENV XERO_API_ENDPOINT http://localhost:3000
ENV ORIGIN http://localhost:3002
ENV CREDENTIALS true

# Expose port 3001
EXPOSE 3001

# Run the application
CMD ["npm", "run", "dev"]

