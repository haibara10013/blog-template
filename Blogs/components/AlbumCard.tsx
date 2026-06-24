"use client";

import { useState } from 'react';
import { Album } from '../data/albums';

export default function AlbumCard({ album, onOpen }: { album: Album; onOpen: (album: Album) => void }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={() => onOpen(album)}
      className="group cursor-pointer flex flex-col items-center"
    >
      <div className="relative w-[85%] aspect-[4/3] mb-8">
        {/* 层1: 背景 — 始终可见 */}
        <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-[4px] shadow-md transform rotate-6 translate-x-4 translate-y-2 group-hover:rotate-12 group-hover:translate-x-8 transition-all duration-500 border-[6px] border-white dark:border-slate-200 overflow-hidden opacity-60">
          {album.photos[2] && <img src={album.photos[2].url} className="w-full h-full object-cover grayscale blur-[2px]" alt="" />}
        </div>

        {/* 层2: 中间 — 始终可见 */}
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-600 rounded-[4px] shadow-lg transform -rotate-3 -translate-x-2 -translate-y-1 group-hover:-rotate-6 group-hover:-translate-x-6 transition-all duration-500 border-[6px] border-white dark:border-slate-200 overflow-hidden opacity-80 z-10">
          {album.photos[1] && <img src={album.photos[1].url} className="w-full h-full object-cover grayscale-[50%]" alt="" />}
        </div>

        {/* 层3: 封面 — 加载前透明让底层可见，加载后白底弹出 */}
        <div className={`absolute inset-0 rounded-[4px] shadow-2xl border-[6px] border-white dark:border-slate-200 overflow-hidden z-20 transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 ${
          loaded ? 'bg-white dark:bg-slate-200' : 'bg-transparent'
        }`}>
          <img
            src={album.cover}
            alt={album.title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.92]'
            }`}
            style={{ transition: 'opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)' }}
            onLoad={() => setLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
            <span className="text-white font-bold text-lg drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{album.photos.length} 张照片</span>
            <span className="text-indigo-300 font-medium text-xs mt-1 drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">Click to Open</span>
          </div>
        </div>
      </div>

      <div className="text-center px-4 w-full">
        <div className="flex items-center justify-center gap-2 mb-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{album.title}</h2>
          <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 bg-white/60 dark:bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-sm uppercase tracking-wider">{album.date}</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1">{album.description}</p>
      </div>
    </div>
  );
}
