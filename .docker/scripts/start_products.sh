#!/bin/bash

npm install

cd apps/products && npx prisma migrate dev

cd ../../

npm run start:dev products