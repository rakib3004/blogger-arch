FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY frontend/ ./blogger-arch/

RUN cd frontend && npm install && npm run build

COPY backend/ ./blogger-mint/


ENV SERVER_PORT 5000
ENV DATABASE_PORT 3306
ENV DATABASE_NAME blogger
ENV DATABASE_HOST localhost
ENV DATABASE_USER root
ENV DATABASE_TABLE_NAME users
ENV DB_URI mysql://root@localhost:3306/blogger
ENV JWT_SECRET_TOKEN khondokhondocetonagulochetonahinhoyeroysarthohasilermohautsobesottorakorevoy
ENV JWT_SECRET_TOKEN_EXPIRE_TIME 10h
ENV JWT_SECRET_TOKEN_ALGORITHM HS256
ENV CROSS_ORIGIN_1 http://localhost:5173
ENV CROSS_ORIGIN_2 http://127.0.0.1:5173

EXPOSE 5000

CMD ["node", "backend/app.js"]
