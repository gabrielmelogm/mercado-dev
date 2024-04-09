#!/bin/bash

npm install

cd apps/payments && npx prisma migrate dev

cd ../../

npm run start:dev payments