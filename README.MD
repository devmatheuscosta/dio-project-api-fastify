# F1 Teams and Pilots API

Esta é uma API simples construída com Fastify que fornece informações sobre equipes e pilotos da Fórmula 1 em 2024. A API permite que você obtenha dados sobre todas as equipes e pilotos, além de buscar detalhes específicos sobre um piloto com base em seu ID.

## Requisitos

- Node.js v20.17.0 ou superior
- NPM v10.8.2 ou superior

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/devmatheuscosta/dio-project-api-fastify.git
```

2. Navegue até o diretório do projeto:

```bash
cd seu-repositorio
```

3. Instale as dependências:

```bash
npm install
```

## Como Usar

1. Inicie o servidor:

```bash
npm run start:dev
```

2. O servidor estará em execução em:

```bash
http://localhost:3000
```

## Endpoint

### Listartodas as equipes

```http
GET /api/v1/teams
```

Retorna uma lista de todas as equipes de F1 com seus respectivos IDs, nomes e bases.

### Resposta de exemplo:

```json
{
  "teams": [
    {
      "id": 1,
      "name": "ferrari",
      "base": "Maranello, Italy"
    },
    ...
  ]
}
```

### Listar todos os pilotos

```http
GET /api/v1/pilots
```

Retorna uma lista de todos os pilotos de F1 com seus respectivos IDs, nomes e equipes.

### Resposta de exemplo:

```json
{
  "pilots": [
    {
      "id": 1,
      "name": "alonso",
      "team": "aston martin"
    },
    ...
  ]
}
```

### Buscar piloto por ID

```http
GET /api/v1/pilots/:id
```

Retorna informações sobre um piloto específico com base no seu ID.

### Parâmetros de rota:

- id (number): O ID do piloto a ser buscado.

### Resposta de exemplo:

```json
{
	"pilot": {
		"id": 1,
		"name": "alonso",
		"team": "aston martin"
	}
}
```

### Erro de exemplo:

```json
{
	"error": "Pilot not found"
}
```

## Configurações de CORS

A API está configurada para permitir requisições de qualquer origem (origin: "\*") e suporta os métodos GET, POST, PUT, DELETE.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
