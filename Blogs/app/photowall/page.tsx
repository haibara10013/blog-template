import { Suspense } from "react";
import { siteConfig } from "../../siteConfig";
import PhotoWallClient from "./PhotoWallClient";

export const metadata = {
  title: "照片墙 | " + siteConfig.title,
};

export default function PhotoWallPage() {
  return (
    <Suspense fallback={<div className="min-h-screen"></div>}>
      <PhotoWallClient />
    </Suspense>
  );
}