FROM node:16.4.2

# set the propper environment variables
ENV DATABASE_URL=

# Create the working directory, including the node_modules folder for the sake of assigning ownership in the next command
RUN mkdir -p /usr/src/app

# Change ownership of the working directory to the node:node user:group
# This ensures that npm install can be executed successfully with the correct permissions
RUN chown -R node:node /usr/src/app

# changed the workdir to the standard workdir
WORKDIR /usr/src/app

# set the user to node when running this image
USER node

# copy the build files to the image
COPY --chown=node:node ./database ./
COPY --chown=node:node yarn.lock ./

RUN yarn --production --ignore-scripts --prefer-offline --silent

CMD [ "yarn", "migrate:prod" ]
