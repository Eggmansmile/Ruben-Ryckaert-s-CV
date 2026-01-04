# Stage 1: Build the React application
FROM node:20-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install


# Fix for npm optional dependencies bug
RUN npm install @rollup/rollup-linux-x64-musl


# Copy the rest of the application code
COPY . .

# Remove any copied node_modules to ensure platform-specific binaries
RUN rm -rf node_modules frontend/node_modules

# Install frontend dependencies
RUN npm install --prefix frontend

# Build the application
# We need to set the VITE_API_URL environment variable during the build
ARG VITE_API_URL
ENV VITE_API_URL=https://75.119.131.242:82
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx html directory
COPY --from=build /app/frontend/dist /usr/share/nginx/html

# The Nginx configuration will be mounted via docker-compose
# Expose port 80 (internal container port)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
