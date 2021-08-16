FROM node:16.4.2 as builder

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
COPY --chown=node:node ./backend ./backend
COPY --chown=node:node ./database ./database
COPY --chown=node:node package.json yarn.lock ./

# Build the application
RUN yarn --frozen-lockfile
RUN yarn database generate
RUN yarn backend build

# ----- production container

FROM node:16.4.2

# set the propper environment variables
ENV NODE_ENV=production \
    PORT=4000 \
    REDIS_HOST=host.docker.internal \
    REDIS_PORT=7000 \
    DATABASE_URL=postgresql://dev_db:dev_db@host.docker.internal:5432/dev_db?schema=public

# Create the working directory, including the node_modules folder for the sake of assigning ownership in the next command
RUN mkdir -p /usr/src/app/node_modules

# Change ownership of the working directory to the node:node user:group
# This ensures that npm install can be executed successfully with the correct permissions
RUN chown -R node:node /usr/src/app

# changed the workdir to the standard workdir
WORKDIR /usr/src/app

# set the user to node when running this image
USER node

# copy the build files to the image
COPY --from=builder /usr/src/app/backend/dist /usr/src/app/dist
# copy the node modules
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules

# copy package.json from bakend to limit set of node modules
COPY --from=builder /usr/src/app/backend/package.json /usr/src/app/package.json

# copy yarn.lock to lock down package versions
COPY --from=builder /usr/src/app/yarn.lock /usr/src/app/yarn.lock

# prunes all packages not in package.json from the production image while persisting the generated prisma files
RUN yarn --production --ignore-scripts --prefer-offline --silent

# Expose API port
EXPOSE 4000

# run the API
CMD [ "node", "dist/src/main" ]
