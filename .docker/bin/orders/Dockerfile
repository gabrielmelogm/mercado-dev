FROM node:20-slim as builder

RUN apt-get update -y && apt-get install -y openssl && apt-get install -y netcat-traditional

WORKDIR /home/node/app

COPY package.json .
COPY tsconfig.json .
COPY apps/orders apps/orders
COPY .docker/scripts/start_orders.sh start.sh

RUN npm install

CMD [ "tail", "-f", "/dev/null" ]
