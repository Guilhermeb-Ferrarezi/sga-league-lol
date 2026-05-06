FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM oven/bun:1-slim AS runtime

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.ts ./server.ts

ENV PORT=8080
EXPOSE 8080

CMD ["bun", "server.ts"]
