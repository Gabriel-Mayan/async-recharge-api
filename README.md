# API de Recarga Assíncrona

Este projeto fornece uma API para gerenciar recargas de celular de forma assíncrona. Desenvolvida com **Node.js** e **TypeORM**, a aplicação se comunica com um banco de dados **MySQL** e é executada em contêineres **Docker**.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **TypeORM**: ORM para integrar Node.js ao banco de dados MySQL.
- **MySQL**: Banco de dados relacional para persistência de dados.
- **Redis**: Banco de dados em memória (usado para cache ou filas).
- **Docker**: Plataforma de contêineres para facilitar a configuração do ambiente.
- **Yarn**: Gerenciador de pacotes para o gerenciamento de dependências.

## Pré-requisitos

Antes de rodar o projeto, é necessário ter as seguintes ferramentas instaladas:

- **Yarn**: Gerenciador de pacotes.
- **Docker** (versão >= 20.x): Para rodar os contêineres.
- **Docker Compose** (versão >= 1.29.x): Para gerenciar os múltiplos contêineres da aplicação.

# Executando a Aplicação com Docker

Este projeto utiliza **Docker** e **Docker Compose** para facilitar a execução de sua aplicação em contêineres. O uso desses recursos garante que todos os serviços necessários, como a API, o banco de dados MySQL e o Redis, sejam facilmente configurados e executados.

## Passos para Executar a Aplicação

### 1. Construindo e Iniciando os Contêineres

Para construir e iniciar todos os serviços definidos no arquivo `docker-compose.yml`, execute o comando abaixo:

    docker-compose up --build

Esse comando realiza as seguintes etapas:

- **Constrói** a imagem da aplicação Node.js.
- **Cria** os contêineres para a API, banco de dados MySQL e Redis.
- **Inicia** os serviços conforme as configurações no `docker-compose.yml`.

### 2. Variáveis de Ambiente no Docker Compose

No arquivo `docker-compose.yml`, as variáveis de ambiente já estão definidas para um **ambiente de teste**. Ao executar o comando `docker-compose up`, essas variáveis são automaticamente configuradas para o ambiente local, permitindo que você inicie a aplicação com as configurações corretas sem precisar modificar um arquivo `.env` manualmente.

Algumas das variáveis de ambiente configuradas são:

- **`DB_HOST`**: Definido como `db`, que é o nome do serviço MySQL no Docker Compose.
- **`DB_PORT`**: A porta padrão do MySQL, `3306`.
- **`DB_USERNAME`** e **`DB_PASSWORD`**: Credenciais de acesso ao banco de dados.
- **`FAIL_PROCCESS_CHANCE`**: Chance de falha configurável no processo de recarga (detalhado abaixo).

### 3. Acessando a Aplicação

Após o Docker Compose iniciar os contêineres, a API estará disponível na porta **3000** do seu ambiente local. Para acessar a API, use o seguinte endereço:

    http://localhost:3000

### 4. Configuração da Variável `FAIL_PROCCESS_CHANCE`

A variável **`FAIL_PROCCESS_CHANCE`** controla a probabilidade de falha no processo de recarga. A cada solicitação de recarga, a API calcula aleatoriamente a chance de falha com base no valor dessa variável. O comportamento é o seguinte:

- **`FAIL_PROCCESS_CHANCE=0`**: Nenhuma falha — todas as recargas serão bem-sucedidas.
- **`FAIL_PROCCESS_CHANCE=20`**: 20% de chance de falha em cada recarga.
- **`FAIL_PROCCESS_CHANCE=100`**: Todas as recargas falham.

Essa configuração permite testar o comportamento da API em diferentes cenários de falha.

### 5. Parando os Contêineres

Quando você terminar de utilizar os contêineres, pode parar e remover todos os contêineres, volumes e redes associados com o comando:

    docker-compose down

Isso remove os contêineres e outros recursos relacionados.

## Considerações Finais

Este projeto é uma API simples que simula o processamento de recargas de celular com uma chance de falha configurável. A utilização de Docker facilita a configuração e execução do ambiente de desenvolvimento e produção.

Se você tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue no repositório.
