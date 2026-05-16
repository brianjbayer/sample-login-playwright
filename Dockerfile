
#--- Base Image ---
# Version must match that in package.json
# Use an official Playwright image that supports ARM64 architecture
ARG BASE_IMAGE=mcr.microsoft.com/playwright:v1.60.0-noble
FROM ${BASE_IMAGE} AS playwright-base

#--- Dependencies Layer ---
FROM playwright-base AS packages

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install project dependencies
RUN npm install \
    # Install Playwright browsers (if not already included in the base image)
    && npx playwright install --with-deps

    # --- Development Environment Layer ---
FROM packages AS devenv

CMD ["bash"]

# --- Deployment Layer ---
FROM packages AS deploy

# Copy your Playwright tests and other relevant files
COPY . .

# Run Playwright tests
CMD ["./script/run", "tests"]
