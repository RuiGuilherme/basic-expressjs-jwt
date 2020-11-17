# basic-expressjs-jwt
Fiz essa base para o uso do JWT no Expressjs, sem interação com banco ou validação de usuário, sinta-se livre para usar esse código. :) 

#### Usage/Install

```bash
$ git clone https://github.com/RuiGuilherme/basic-expressjs-jwt.git
$ cd basic-expressjs-jwt
$ yarn                       
$ code .
$ nodemon/debugger(F5)/yarn start
```

Você pode abrir o postman e mandar uma request para `http://127.0.0.1:3000/api/v1/login` | passe na body x-www-form a chave `username` e o valor `someuser`;

O token vai vim no Header Response na chave `authorization`;

Você pode testar o Token mandando outra request para `http://127.0.0.1:3000/api/v1/index` | passe na header a chave `Authorization` com o valor do Header Response gerado na hora de login;

#### Author
###### Rui Guilherme
[GitHub](https://github.com/RuiGuilherme/)
<br />
[Linkedin](https://www.linkedin.com/in/rui-guilherme/)

#### Contributing
Contributions, issues and feature requests are welcome!
