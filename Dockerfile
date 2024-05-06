FROM node:20-slim


RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

USER node

CMD [ "tail", "-f", "/dev/null" ]