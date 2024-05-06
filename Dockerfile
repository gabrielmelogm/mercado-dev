FROM node:20-slim


RUN \
  apt-get update -y && \
  apt-get install -y openssl unzip wget

# Install Terraform
ARG TERRAFORM_VERSION=1.0.0
RUN wget https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip

RUN unzip terraform_${TERRAFORM_VERSION}_linux_amd64.zip -d /usr/local/bin/
RUN terraform --version

WORKDIR /home/node/app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

USER node

CMD [ "tail", "-f", "/dev/null" ]