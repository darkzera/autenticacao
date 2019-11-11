# - Aplicação de autenticação (LEDS - IFES/ST) 

<h2 align="center">
  <img
src="images/security.png" style="background-color:rgba(0,0,0,0);" height=230 alt="mlpack: a fast, flexible machine learning library"></a>


# Objetivo do projeto

   A aplicação contempla do frontend (**Agular**) ao backend(**NodeJS**). Permite o usuário cadastrar uma conta para login com determinadas permissões. Este processo será protegido com autenticação **JWT** (JSON WebToken) e o Middleware do **NodeJS**. Assim, dependendo da função do usuário, o sistema deverá ser capaz de distingui-lo e permitir ou não o acesso a determinado conteúdo.
   Este projeto o objetivo de ser integrado ao projeto de teste do LEDS (<a href="https://github.com/acweller/A-Wing">**A-wing**</a>). 
 
 
 
## - TODO 
### - (Doc)
- [ ] prints (estrutura de pastas, diagramas de fluxo, bd..)
- [ ] frontend
- [x] backend
- [ ] fluxo frontend
- [x] fluxo backend
- [x] motivacao do projeto 
- [ ] trocar essa merd de descricao
- [ ] basics (instalacao, incializaçao etc..)
- [ ] colocar os arquivos obvio k k k 




### - (Code)
- [ ] corrigir nome DB 
- [ ] chave (secret-key)
- [ ] 


## Dependencias
- Angular 
- NodeExpress 
- jSON Web Token 
- BCryptjs 
- Sequelize 
- MySQL



# - Backend 
A requisição HTTP que corresponda com a rota, será aceita pelo 'Middleware' antes de chegar a camada de Segurança

Camada de segurança é composta por: 
- JWT Authentication Middleware: verify SignUp, verify token
- Authorization Middleware: verifica roles/funções/permissoes do usuário 

## Fluxo
- A lógica da regra de negocio faz a interação com o banco de dados (MySQL) via *Sequelize* e envia uma resposta HTTP (token, informação do usuário, dados baseados na permissão) para o cliente

- Quando houver uma requisição HTTP em */signup*, haverá a chamada dos métodos  *checkDuplicateUserNameOrEmail()* e *checkRolesExisted()* antes de ir a camada de controller de registro *signup()*

- *verifyToken()* e as funções de validação de permissão (isPmOrAdmin, isAdmin) TODO

- Usario e permissão (roles) diagrama de relacionamento aqui TODO


## Estrutura do projeto - Backend
![Alt text](images/bend.png?raw=true "Title")
- * config:* define a configuração do nosso DB, chave secreta do JWT e permissões de usuário
    - * model:* define os modelos de usuário e suas permissões
    - * router:* RestAPI urls, funções de verificação para registro (signup), verificação do JWT para o login e autorização para conteúdo requerido por determinado usuario (baseado em suas permissões)
    - * controller:* processamento de funções para cada RestAPI declarada nas rotas



# Frontend
balablabblablabal


## Referencia
https://grokonez.com/node-js/angular-nodejs-jwt-authentication-fullstack-nodejs-express-restapis-jwt-bcryptjs-sequelize-mysql-part-1-overview-and-architecture
@Lucas Cruz & Nicolas Milholi 
