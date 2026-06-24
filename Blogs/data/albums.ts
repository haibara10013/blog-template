export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

// 你的相册列表。照片放 public/albums/ 下，格式见示例
export const albums: Album[] = [
  // 示例:
  // {
  //   id: "album-id",
  //   title: "相册标题",
  //   description: "简短描述",
  //   cover: "https://your-cdn.com/cover.jpg",
  //   date: "2026.01",
  //   photos: [
  //     { url: "https://your-cdn.com/photo1.jpg", caption: "说明文字" },
  //   ]
  // },
];
