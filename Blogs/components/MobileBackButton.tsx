// src/components/MobileBackButton.tsx
"use client";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

export default function MobileBackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleBack = () => {
    // 根据当前路径决定返回到哪里
    if (pathname.startsWith('/posts/')) {
      router.push('/timeline');
    } else if (pathname.startsWith('/chatter/')) {
      router.push('/chatter');
    } else if (pathname.startsWith('/moments/')) {
      router.push('/moments');
    } else if (pathname === '/photowall' && searchParams.get('album')) {
      // 照片墙相册详情 → 返回列表
      router.push('/photowall');
    } else if (pathname.startsWith('/photowall')) {
      router.push('/');
    } else {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      // 放在右下角稍微靠上的位置，防止挡住底部的导航转轴
      className="fixed bottom-24 right-4 z-[90] w-11 h-11 flex items-center justify-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl rounded-full text-slate-700 dark:text-slate-200 active:scale-90 transition-all"
      title="返回上一页"
    >
      <ChevronLeft size={24} />
    </button>
  );
}