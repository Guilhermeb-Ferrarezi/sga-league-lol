# LOL Nexus

SPA em Vite + React preparada para deploy em `https://santos-games.com/lol/nexus`.

## Base path

O projeto está configurado com:

- `Vite base`: `/lol/nexus/`
- `React Router basename`: `/lol/nexus`

Isso faz o build gerar assets e rotas corretamente sob esse prefixo.

## Build local com Bun

```bash
bun install
bun run build
```

O output fica em `dist/`.

## Build com Docker + Bun

```bash
docker build -t lol-nexus-build .
```

A imagem gera o build em `/app/dist`. Para extrair os arquivos estáticos:

```bash
docker create --name lol-nexus-export lol-nexus-build
docker cp lol-nexus-export:/app/dist ./dist
docker rm lol-nexus-export
```

## Deploy atrás da VPS

Publique o conteúdo de `dist/` no servidor que a VPS expõe em `/lol/nexus`.

Requisito do proxy/rewrite:

- Requisições para `/lol/nexus/*` devem retornar o `index.html` da SPA quando não corresponderem a um arquivo estático.
