# API de Usuários - Estudo de Autenticação e Consulta




Este repositório contém uma API simples para estudo de conceitos como autenticação, criptografia de senhas e gerenciamento de usuários usando Node.js, Express e Prisma que usei para estudar e aprender alguns coceitos de autenticação de usuarios.
## Stack utilizada



**Back-end:**

🚀 Node.js

📡 Express

🛢 Prisma ORM

🔐 JWT (JSON Web Token)

🔑 Bcrypt


## Como Rodar o Projeto

1. Clonar o Repositório

```bash
git clone https://github.com/darckrow/apiUsers.git
```
1. 2. Instalar as Dependências

```bash
npm install
```
3. Configurar as Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione:

```bash
DATABASE_URL="sua_url_do_banco"
JWT_SECRET="sua_chave_secreta
```
4. Rodar as Migrações do Banco

```bash
npx prisma migrate dev --name init
```
5. Iniciar o Servidor

```bash
node --watch server.js
```
O servidor rodará na porta 3000.
## Documentação da API

#### Rotas Públicas

```http
  POST /cadastro
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. E-mail do usuário |
| `name` | `string` | **Obrigatório**. Nome do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |

#### Autenticar usuário

```http
 POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. E-mail do usuário |
| `password`   | `string` | **Obrigatório**. senha do usuário |

### Resposta esperada:
```bash
{
  "token": "jwt_token"
}
```

#### Rotas Privadas (Requerem Token JWT)
Listar usuários

```http
 GET /listar-usuarios
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. Token JWT no formato Bearer token |

#### Resposta esperada:

```bash
{
  "message": "Usuários listados com sucesso",
  "users": [
    {
      "id": 1,
      "email": "usuario@example.com",
      "name": "Usuário Exemplo"
    }
  ]
}
```