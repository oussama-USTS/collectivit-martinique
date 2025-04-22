# Utiliser Node.js comme image de base
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]

# Build stage
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm install && \
    npm install -D @babel/plugin-transform-private-property-in-object @babel/plugin-transform-class-properties @babel/plugin-transform-nullish-coalescing-operator @babel/plugin-transform-numeric-separator @babel/plugin-transform-optional-chaining @babel/plugin-transform-private-methods

# Copy source code
COPY . .

# Create images directory and grid.svg
RUN mkdir -p public/images && \
    touch public/images/grid.svg

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Set up directories and permissions
RUN mkdir -p /usr/share/nginx/html/static && \
    mkdir -p /var/log/nginx && \
    chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/log/nginx && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod -R 755 /var/log/nginx

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 