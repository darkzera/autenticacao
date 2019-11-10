# - Aplicação de autenticação (LEDS - IFES/ST) | FULL SACK

<h2 align="center">
  <img
src="images/security.png" style="background-color:rgba(0,0,0,0);" height=230 alt="mlpack: a fast, flexible machine learning library"></a>


## Objetivo do projeto:

          A aplicação contempla do frontend (Agular) ao backend(NodeJS). Permite o usuário cadastrar uma conta para login com determinadas permissões. Este processo será protegido com autenticação JWT (JSON WebToken) e o Middleware do NodeJS. Assim, dependendo da função do usuário, o sistema deverá ser capaz de distingui-lo e permitir ou não o acesso a determinado conteúdo.
          Este projeto o objetivo de ser integrado ao projeto de teste do LEDS (A-wing). 
 
 
 
 
 
 
 
 
 


## - TODO 
    1 - prints
    2 - frontend
    3 - trocar essa merd de descricao
    4 - basics (instalacao, incializaçao etc..)


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


## Estrutura do projeto
![Alt text](images/bend.png?raw=true "Title")
- *pacote config:* define a configuração do nosso DB, chave secreta do JWT e permissões de usuário
- *pacote model:* define os modelos de usuário e suas permissões
- *pacote router:* RestAPI urls, funções de verificação para registro (signup), verificação do JWT para o login e autorização para conteúdo requerido por determinado usuario (baseado em suas permissões)
- *pacote controller:* processamento de funções para cada RestAPI declarada nas rotas