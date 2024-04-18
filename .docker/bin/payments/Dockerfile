FROM node:20-slim as builder

RUN apt-get update -y && apt-get install -y openssl && apt-get install -y netcat-traditional

WORKDIR /home/node/app

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY apps/payments apps/payments
COPY .docker/scripts/start_payments.sh start.sh

RUN npm install

CMD [ "tail", "-f", "/dev/null" ]
