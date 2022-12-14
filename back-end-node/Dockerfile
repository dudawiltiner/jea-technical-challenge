# LAYER I - Primeiro vamos escolher qual será nossa IMAGEM BASE(leve)
FROM node:15-alpine

# LAYER II - DEFINIR o diretório de trabalho do CONTAINER
WORKDIR /api

# LAYER III - ADICIONANDO `/app/node_modules/.bin` para o $PATH
ENV PATH /api/node_modules/.bin:$PATH

# LAYER IV - COPIANDO apenas essa pasta para dentro da nossa imagem
# pois apenas ela é necessária para instalar as nossas dependências
COPY package.json /api/package.json

# LAYER V - RODANDO na build as instalação das dependências
RUN npm install

# LAYER VI - COPIANDO apenas essa pasta para dentro da nossa imagem
# Temos que fazer isso para rodar o build e dar certo
COPY . .
# LAYER VII - Garantir que o app vai sei buildado no /dist
# source: https://blog.logrocket.com/containerized-development-nestjs-docker/
RUN npm run build

# LAYER VIII - CARREGANDO a aplicação(sugestão de inicialização do container)
CMD ["npm", "run", "start:dev"]