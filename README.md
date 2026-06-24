# Blog Template

基于 [voidliang-blog](https://voidliang.top) 的博客模板。

## 快速开始

1. 修改 `Blogs/siteConfig.ts` 中的个人信息
2. 替换图片为你的 CDN 链接
3. 在 `Blogs/posts/` 下写 .md 文章
4. 本地预览: `cd Blogs && npm install && npm run dev`
5. 部署到 Vercel 一键上线

## Vercel 部署

1. 将整个文件夹推到 GitHub
2. Vercel 导入仓库
3. **Root Directory 设为 `Blogs`**
4. 部署

## 文章格式

```md
---
title: '文章标题'
date: "2026-06-24 12:00:00"
tags: ["标签1", "标签2"]
description: "摘要"
cover: "https://your-cdn.com/cover.jpg"
---

## 章节标题

#### ① 小标题
#### ② 小标题
#### ③ 小标题

正文内容...

## 写在最后
```

## 功能

- 暗色/亮色主题切换
- 网易云音乐播放器
- 照片墙 / 杂谈 / 说说
- AI 聊天机器人 (Gemini)
- 全文搜索 / 友链 / 评论区 (Gitalk)
- HTML 图表嵌入 (dashmotion)
- 移动端适配

## 技术栈

Next.js 15 + TypeScript + Tailwind CSS 4 + Framer Motion

## License

MIT
