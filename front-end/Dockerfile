# LAYER I - Primeiro vamos escolher qual será nossa IMAGEM BASE(leve)
FROM node:15-alpine

# LAYER II - DEFINIR o diretório de trabalho do CONTAINER
WORKDIR /app

# LAYER III - ADICIONANDO `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# LAYER IV - COPIANDO apenas essa pasta para dentro da nossa imagem
# pois apenas ela é necessária para instalar as nossas dependências
COPY package.json .
# LAYER V - RODANDO na build as instalação das dependências
RUN npm install

# LAYER VI - CARREGANDO a aplicação(sugestão de inicialização do container)
CMD ["npm", "start"]