FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install -g nodemon
RUN npm install
RUN npm install -g gulp
COPY . /app
CMD npm start
EXPOSE 3001

