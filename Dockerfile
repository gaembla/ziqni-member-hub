FROM node:18-slim as build-stage
WORKDIR /app
COPY package*.json ./

RUN apt-get update && \
    apt-get install -y python3-dev make g++ gcc && \
    npm install

COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
