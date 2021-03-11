# Case Node - Search Engine
Programa desenvolvido em Node.JS, com o objetivo de resgatar dados/informações através de uma página da web.


**Versões usadas no projeto**

Node.js 15.3.0

NPM 7.0.14



**Ambientes**

Windows 10 

Ubuntu 18.04.2 LTS 


## Instalação
```sh
npm install
```

## Execução
Levantar o serviço na porta 3000:
```sh
node app.js
```
Fazer uma requisição POST  para **localhost:3000/buscar**

Passar no corpo da requisição as datas de entrada e saída:
```sh
{
 "checkin" : "13/03/2021",
 "checkout": "14/03/2021"
}
```
O resultado esperado será um array de objetos, aonde cada um deste corresponderá a um quarto disponível no período informado.

## Testes - Jest
Para testar a funcionalidade de busca, execute o comando abaixo:
```sh
npm test
```

## License
MIT
