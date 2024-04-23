FROM node:20-slim as builder

RUN apt-get update -y && apt-get install -y openssl && apt-get install -y netcat-traditional

WORKDIR /home/node/app

COPY package.json .
COPY tsconfig.json .
COPY apps/products apps/products
COPY .docker/scripts/start_products.sh start.sh

RUN npm install

CMD [ "tail", "-f", "/dev/null" ]
