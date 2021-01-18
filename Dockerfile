FROM node:alpine

WORKDIR '/app'

COPY package.json /app

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

EXPOSE 9001

EXPOSE 9002

CMD ["npm","start"]
