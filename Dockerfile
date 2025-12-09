# Stage 1: Build the React application
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
# We need to set the VITE_API_URL environment variable during the build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# The Nginx configuration will be mounted via docker-compose
# Expose port 80 (internal container port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
