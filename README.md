# Personal Diary App

一个基于 Next.js 和 NestJS 的全栈日记应用。

## 项目结构

```
├── apps
│   ├── api     # NestJS 后端
│   └── web     # Next.js 前端
├── packages
│   └── prisma  # Prisma Schema和客户端
└── docker-compose.yml
```

## 开发环境设置

1. 安装依赖
```bash
pnpm install
```

2. 设置环境变量
```bash
# apps/api/.env
DATABASE_URL="postgresql://diary4:diary4@localhost:5432/diary4"

# packages/prisma/.env
DATABASE_URL="postgresql://diary4:diary4@localhost:5432/diary4"
```

3. 启动数据库
```bash
docker-compose up postgres -d
```

4. 初始化数据库
```bash
cd packages/prisma
pnpm db:push
pnpm db:generate
```

5. 启动开发服务器
```bash
pnpm dev
```

## 使用Docker运行

```bash
docker-compose up -d
```

## 技术栈

- 前端：Next.js, React, TypeScript
- 后端：NestJS, TypeScript
- 数据库：PostgreSQL
- ORM：Prisma
- 包管理：pnpm workspace