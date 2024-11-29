FROM node:20

WORKDIR /app

COPY package.json yarn.lock ./

# RUN npm install -g yarn
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/main"]