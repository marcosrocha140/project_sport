# Learning - Site de Futebol

Este projeto é um site/aplicativo voltado ao futebol, com funcionalidades para times, campeonatos, jogos, ranking, posts e autenticação de usuários.

## Tecnologias

- [Next.js 16](https://nextjs.org/) - Framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS 4](https://tailwindcss.com/) - Estilização
- [Prisma](https://www.prisma.io/) - ORM para PostgreSQL
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL
- [Next PWA](https://github.com/shadowwalker/next-pwa) - Suporte a Progressive Web App
- [Zod](https://zod.dev/) - Validação de schemas
- [Jose](https://github.com/panva/jose) - Autenticação JWT
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) - Hash de senhas

## Arquitetura

O projeto segue uma arquitetura em camadas:
- **Repositories** - Camada de acesso a dados
- **Services** - Camada de lógica de negócio
- **API Routes** - Endpoints da API
- **Components** - Componentes React reutilizáveis
- **Schemas** - Validação com Zod

## Começando

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- MongoDB (opcional)

### Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Configure o banco de dados com Prisma:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linting
