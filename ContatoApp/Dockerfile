FROM node:latest

RUN mkdir -p /ContatoApp-build /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /ContatoApp-build
COPY package.json /ContatoApp-build/
RUN npm install --unsafe-perm=true

COPY . /ContatoApp-build
RUN chown -R nodejs:nodejs /ContatoApp-build
USER nodejs

CMD npm start