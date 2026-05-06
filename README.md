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

## Docker runtime com Bun

```bash
docker build -t lol-nexus-build .
docker run -p 8080:8080 lol-nexus-build
```

A imagem agora:

- faz o build da SPA
- sobe um servidor Bun na porta `8080`
- serve `dist/`
- faz fallback para `index.html` nas rotas da SPA
- aceita requests com ou sem o prefixo público `/lol/nexus`

## Deploy atrás da VPS

No proxy reverso:

- URL pública: `/lol/nexus`
- destino: `http://container:8080/`

O serviço interno responde na raiz `/`, e o prefixo público continua sendo tratado pelo `base` do Vite e pelo `basename` do React Router.
