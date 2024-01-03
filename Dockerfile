# Use Node as the base image for building the Angular app
FROM node:latest as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the Angular app
RUN npm run build --

# Use Nginx as the base image for serving the Angular app
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built Angular app from the builder stage to the Nginx container
COPY --from=builder /app/dist/foodmine-angular-toutrial/browser/ .

RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
