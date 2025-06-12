# Build stage
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY client/package*.json ./client/
COPY server/package*.json ./server/
COPY package*.json ./

# Install root dependencies
RUN npm install

# Install client dependencies
RUN cd client && npm install

# Install server dependencies
RUN cd server && npm install

# Copy all files
COPY . .

# Build client
RUN cd client && npm run build

# Production stage
FROM node:16

WORKDIR /app

# Copy built client
COPY --from=build /app/client/build ./client/build

# Copy server files
COPY server/package*.json ./server/
COPY server ./server

# Install only production dependencies
RUN cd server && npm install --production

WORKDIR /app/server

EXPOSE 5000

CMD ["npm", "start"]