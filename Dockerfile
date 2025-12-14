# Use a imagem base oficial do Node.js
FROM node:18-alpine AS base

# Instala dependências necessárias para o Next.js
RUN apk add --no-cache libc6-compat

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do npm
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instala dependências com legacy-peer-deps para evitar conflitos
# Mudando de npm ci para npm install para evitar problemas com lock file
RUN npm install --legacy-peer-deps

# Constrói a aplicação
FROM base AS builder
WORKDIR /app

# Cria um usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia os node_modules da imagem base
COPY --from=base /app/node_modules ./node_modules

# Copia o resto dos arquivos do projeto
COPY . .

# Gera o build da aplicação Next.js
RUN npm run build

# Imagem de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Cria um usuário não-root para segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia os arquivos construídos
COPY --from=builder /app/public ./public

# Cria o diretório .next automaticamente
RUN mkdir .next

# Copia os arquivos do build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Define o usuário para executar a aplicação
USER nextjs

# Expõe a porta 3000
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar a aplicação
CMD ["node", "server.js"]