# - Aplicação de autenticação (LEDS - IFES/ST)

## Backend 
A requisição HTTP que corresponda com a rota, será aceita pelo 'Middleware' antes de chegar a camada de Segurança

Camada de segurança é composta por: 
- JWT Authentication Middleware: verify SignUp, verify token
- Authorization Middleware: verifica roles/funções/permissoes do usuário 

# Descrição do flow
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