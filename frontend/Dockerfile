FROM node:20

WORKDIR /app

COPY . .
RUN npm install
RUN npm install vite


EXPOSE 3000

CMD ["npm", "run", "dev"]
