<div align="center">

# ViralReel — AI 爆款视频生成器

**上传一张照片，生成人人都在发的爆款视频格式——Hotel Lobby、Burning Bridges 等。**

[![Live Site](https://img.shields.io/badge/%E5%9C%A8%E7%BA%BF%E7%AB%99%E7%82%B9-viralreel.app-F97316?logo=googlechrome&logoColor=white)](http://www.viralreel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers%20%2B%20D1-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)

[English](README.md) | [简体中文](README.zh-CN.md)

![ViralReel 预览](public/og-image.jpg)

</div>

**ViralReel**（[viralreel.app](http://www.viralreel.app)）是一个已上线的 AI SaaS 产品：用户上传照片，即可复刻当下最热的视频玩法（COLORS 风格的 *Hotel Lobby* 双人舞台、*Burning Bridges* 吊灯派对等）。内置积分计费、多模型视频生成、中英双语的 SEO/GEO 优化博客和完整的后台管理，部署在 Cloudflare Workers 上。

## 功能特性

### 1. 爆款视频模板

每个模板都是对真实热梗格式的精调版本，自带预填提示词、参考素材和预览视频：

| 办公室派对（Burning Bridges） | 派对领舞 | 宠物与主人 |
|---|---|---|
| ![办公室派对](public/templates/party-office-poster.jpg) | ![派对领舞](public/templates/party-lead-poster.jpg) | ![宠物与主人](public/templates/petowner-poster.jpg) |

### 2. 一张照片即可生成

上传照片，选择画幅 / 分辨率 / 时长，点击生成。弹窗在确认前明示本次消耗的积分，渲染过程中实时显示进度，并保留完整的生成历史。

![生成弹窗](public/blog/replicate-viral-videos-generator-dialog.png)

### 3. 多模型视频生成

- **MiniMax H3** — 多模态模型，支持传入参考**音频**（≤ 15 秒，最多 3 段）驱动人声与声音风格，同时支持参考图片
- **Grok Imagine** — media-relay 图生视频
- 可插拔的 **media-relay / task-relay** 供应商架构——接入新模型只是改配置，不需要重写代码

### 4. 积分、套餐与支付

- 三档订阅套餐（**Starter / Plus / Pro**，月付与年付），另有按量积分加购
- 单条视频按 分辨率 × 时长（480p–1080p，8–15 秒）定价，后台可随时调整
- 支付渠道抽象层，支持结账、账单历史，失败/取消的任务自动退款

### 5. 中英双语博客（SEO + GEO 优化）

- 基于 MDX 的博客（英文 + 简体中文），支持图片、视频等富媒体嵌入
- 每篇文章独立输出 Open Graph / Twitter 卡片、`BlogPosting` JSON-LD、sitemap 与 canonical
- `robots.ts` 明确放行 AI 答案引擎（GPTBot、PerplexityBot、ClaudeBot 等）抓取与引用

### 6. 后台管理

无需重新部署即可运行时调整：切换模型与供应商、修改定价与积分消耗、上传 MiniMax H3 的参考音频、管理文章与用户。

### 7. 账号与登录

基于 better-auth 实现 Google OAuth **与** Google One Tap 一键登录；每个用户有独立的积分流水与生成记录。

### 8. 全站国际化

落地页、定价页、博客、控制台、事务邮件——所有页面均提供英文和简体中文版本，元数据也按语言区分。

### 9. 一次推送即部署到 Cloudflare

GitHub Actions 在每次推送到 `main` 时自动构建 OpenNext worker 并部署到 **Cloudflare Workers + D1**。worker 配置在 `wrangler.toml`，同时附带 Docker 构建工作流。

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 15（App Router）· React · TypeScript |
| 样式 | Tailwind CSS · shadcn/ui · magicui |
| 国际化 | next-intl（en / zh） |
| 数据库 | Drizzle ORM · Cloudflare D1 / SQLite |
| 登录 | better-auth（Google OAuth + One Tap） |
| 内容 | MDX · fumadocs |
| 支付 | Stripe / Creem（渠道无关的结账层） |
| 基础设施 | Cloudflare Workers · GitHub Actions CI/CD |

## 快速开始

```bash
# 1. 安装依赖
pnpm install

# 2. 配置环境变量（参考 .env.example）
cp .env.example .env

# 3. 本地运行
npm run dev
```

部署目标为 Cloudflare Workers（经 OpenNext 构建）：worker 配置在 `wrangler.toml`，CI/CD 工作流在 `.github/workflows/`。

## 链接

- 🌐 **在线站点**：[http://www.viralreel.app](http://www.viralreel.app)
- 📝 博客：[viralreel.app/blog](http://www.viralreel.app/blog)

## 许可证

源代码仅供学习参考，不得公开传播。详见 [LICENSE](./LICENSE)。
