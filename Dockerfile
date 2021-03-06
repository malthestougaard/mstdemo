FROM node:4

# Provides cached layer for node_modules (hack)
# Add this to your Dockerfile, after your dependencies, but before your app code.
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

COPY . /src

# Define working directory
WORKDIR /src

# Expose port
EXPOSE 3000

# Define env variables
ENV NODE_ENV='production'

# Run app
CMD ["npm", "start"]
