# Builder
FROM node:16.4.2 AS builder

RUN mkdir -p /app/node_modules
RUN chown -R node:node /app
WORKDIR /app
USER node

COPY --chown=node:node ./frontend ./frontend
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile
RUN yarn frontend build

# Production
FROM node:16.4.2 AS runner

RUN mkdir -p /app/node_modules
RUN chown -R node:node /app
WORKDIR /app
USER node
ENV NODE_ENV production

COPY --from=builder /app/frontend/next.config.js ./
COPY --from=builder /app/frontend/public ./public
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/frontend/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

RUN yarn install --production --ignore-scripts --prefer-offline --silent

EXPOSE 3000

# Disable Next.js telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
