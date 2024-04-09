#!/bin/bash

npm install

cd apps/orders && npx prisma migrate dev

cd ../../

npm run start:dev orders