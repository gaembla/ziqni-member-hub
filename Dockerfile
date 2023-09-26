FROM node:18-slim

WORKDIR /app

COPY . .

RUN apt-get update && \
    apt-get install -y python3-dev make g++ gcc && \
    npm install

CMD ["npm","run","serve"]
