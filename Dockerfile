FROM node:18-alpine

# Creación de directorios
RUN mkdir -p /usr/src/bernat-api/src

WORKDIR /usr/src/index

# Copiando los archivos JSON al contenedor
COPY package*.json ./

# Instalando dependencias en el contenedor
RUN npm i 

# Copiando el resto de archivos
COPY ./src/ ./src/

# Puerto de la API
EXPOSE 1234

# Comando para ejecutar la imagen una vez instanciada
CMD ["npm","start"]