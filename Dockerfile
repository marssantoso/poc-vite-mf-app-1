FROM node:18.15-alpine as builder
WORKDIR /src
COPY package*.json ./
RUN npm ci --unsafe-perm=true
COPY . .
RUN chown -R node /src
USER node
RUN npm run build

FROM node:18.15-alpine
WORKDIR /app
COPY --from=builder /src .
ENV HOST 0.0.0.0
EXPOSE 4001
CMD ["npm", "run", "start"]

