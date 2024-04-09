FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

COPY . .

# RUN npm install

USER node

CMD ["npm", "run", "build"]
# CMD [ "tail", "-f", "/dev/null" ]