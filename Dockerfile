FROM node:19-alpine3.15

# Creación de directorios
RUN mkdir -p /usr/src/app/src

WORKDIR /usr/src/app

# Copiando los archivos JSON al contenedor
COPY package.json ./

# Instalando dependencias en el contenedor
RUN npm install

# Copiando el resto de archivos
COPY ./src/ ./src/

# Puerto de la API
EXPOSE 1234

# Comando para ejecutar la imagen una vez instanciada
CMD ["npm","start"]
