FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY prisma prisma
RUN npx prisma generate

COPY . .

RUN npm run build

CMD ["npm", "start"]
