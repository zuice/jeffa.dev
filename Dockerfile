# Use the official Bun image
FROM oven/bun:1

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and bun.lockb (if you have one) for the entire monorepo
COPY package*.json bun.lockb* ./

# Copy the packages directory
COPY packages ./packages

# Install dependencies
RUN bun install --frozen-lockfile

# Build the Astro static files
RUN cd packages/web && bun run build

# Build the API
RUN cd packages/api && bun run build

# Copy the built static files to the API's static serving directory
RUN mkdir -p packages/api/dist && cp -r packages/web/dist/* packages/api/dist

# Set working directory to the API folder
WORKDIR /usr/src/app/packages/api

# Expose the port the app runs on
EXPOSE 3210

# Command to run the application
CMD ["bun", "run", "serve"]
