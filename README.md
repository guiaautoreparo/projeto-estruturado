# Guia Auto Reparo - API

## Estrutura modular para múltiplos acessos (admin, cliente, oficina)

### Como iniciar

```bash
npm install
npm start
```

### Rotas principais

- `GET /oficinas?servico=mecanica&cidade=Salvador` – busca por oficinas com filtros
- `GET /servicos` – lista os serviços disponíveis
- `POST /agendamentos`, `PATCH` etc – (em agendamentosRoutes)

> A conexão com o banco está protegida e só pode ser acessada via API backend (admin).