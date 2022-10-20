# Imagem que vai rodar a aplicação
FROM node

WORKDIR /usr/app

# Copia o json das dependências
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Após instalar tudo
CMD ["npm", "start"]