#!/bin/bash

set -e

while ! nc -z "mysql" "3306"; do
  echo "🟡 Waiting for Mysql Database Startup (mysql 3306) ..."
  sleep 2
done

echo "✅ Mysql Database Started Successfully (mysql:3306)"

cd apps/products && npx prisma migrate dev

cd ../../

npm run build && \
rm -rf apps && \
rm tsconfig.json && \
node dist/src/main.js
