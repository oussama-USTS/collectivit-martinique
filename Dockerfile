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
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies including dev dependencies and missing packages
RUN npm install -g npm@latest && \
    npm install postcss-preset-env @babel/plugin-transform-private-property-in-object @babel/plugin-transform-class-properties @babel/plugin-transform-nullish-coalescing-operator @babel/plugin-transform-numeric-separator @babel/plugin-transform-optional-chaining @babel/plugin-transform-private-methods && \
    npm ci

# Copy source code
COPY . .

# Create images directory and copy grid.svg
RUN mkdir -p public/images && \
    touch public/images/grid.svg

# Build the app with increased memory allocation
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directory for static files if it doesn't exist
RUN mkdir -p /usr/share/nginx/html/static

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 