// siteConfig.ts - 你的全站“控制中心”
// 把下面的占位符改成你自己的信息即可上线

export const siteConfig = {
  // 1. 网站标题与博主信息
  title: "My Blog",
  faviconUrl: "https://your-cdn.com/avatar.jpg",
  authorName: "Your Name",
  bio: "这个人很懒，什么也没留下",

  navTitle: "YourName",
  navSuffix: "'s ",
  navAfter: "Blog",

  // 2. 头像 (替换为你的 CDN 链接)
  avatarUrl: "https://your-cdn.com/avatar.jpg",

  // 3. 网站背景图片 (替换为你自己的图)
  useGradient: false,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"],
  bgImages: [
    "https://your-cdn.com/bg-1.jpg",
    "https://your-cdn.com/bg-2.jpg",
    "https://your-cdn.com/bg-3.jpg",
  ],

  // 4. 文章默认封面
  defaultPostCover: "https://your-cdn.com/default-cover.jpg",

  // 5. 首页照片墙预览图
  photoWallImage: "https://your-cdn.com/bg-1.jpg",

  // 6. 网易云音乐歌曲 ID (去网易云网页版,URL 里 id=xxx 的数字)
  cloudMusicIds: [],

  // 7. 社交链接 (留空则不显示)
  social: {
    github: "",
    gitee: "",
    google: "",
    email: "",
    qq: "",
    wechat: "",
  },

  counts: {
    photos: 0,
  },

  chatterTitle: "杂谈",
  chatterDescription: "一些碎片想法",

  // 8. 全局背景弹幕
  danmakuList: ["Hello World!", "Welcome to my blog"],

  // 9. 评论区 (Gitalk, 需要 GitHub OAuth App)
  enableComments: false,
  gitalkConfig: {
    clientID: "",
    clientSecret: process.env.GITALK_CLIENT_SECRET || "",
    repo: "",
    owner: "",
    admin: [],
  },

  buildDate: new Date().toISOString().split('T')[0],

  // 10. 页脚技术栈徽章
  footerBadges: [
    {
      name: "Next.js",
      color: "text-sky-500",
      svg: "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>",
    },
    {
      name: "React",
      color: "text-cyan-400",
      svg: "<path d=\"M12 22.6l-9.8-5.6V5.6L12 0l9.8 5.6v11.4l-9.8 5.6zm-8.2-6.5l8.2 4.7 8.2-4.7V7.5L12 2.8 3.8 7.5v8.6z\"/>",
    },
    {
      name: "Tailwind",
      color: "text-teal-400",
      svg: "<path d=\"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z\"/>",
    },
  ],

  icpConfig: {
    name: "",
    link: "",
  },

  // 11. AI 聊天机器人 (Gemini, 需设环境变量 GEMINI_API_KEY)
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "你是一个友好的博客助手。",
    maxOutputTokens: 150,
    temperature: 0.85,
  },

  friendLinkApplyFormat: "",
  enableLevelSystem: false,
};
