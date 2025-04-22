ARG NODE_IMAGE=node:22-alpine
FROM ${NODE_IMAGE} AS base

RUN apk add --no-cache bash curl jq nano

WORKDIR /app

ENV CI=1

FROM base AS runner

ARG APP_PORT=3000

ENV NODE_ENV=production
ENV PORT=${APP_PORT}

USER node

WORKDIR /app/main

COPY --chown=node ./package.json ./package.json
COPY --chown=node ./build ./build

RUN npm install --prefer-offline

EXPOSE ${APP_PORT}

CMD ["node_modules/.bin/react-router-serve", "build/server/index.js"]
