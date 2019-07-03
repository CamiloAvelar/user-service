FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install -g nodemon
RUN npm install
RUN npm install -g gulp
RUN npm install -g sequelize
RUN npm install -g sequelize-cli
RUN npm install -g pg
COPY . /app
RUN git clone https://github.com/vishnubob/wait-for-it.git
CMD npm start
EXPOSE 3001

