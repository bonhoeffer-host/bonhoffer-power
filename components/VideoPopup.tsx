"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPopup() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "";

    if (!showVideo) return;

    const video = videoRef.current;

    if (video) {
      video.muted = true;

      video
        .play()
        .then(() => {
          // Try to enable sound after playback starts
          video.muted = false;
        })
        .catch(() => {
          // Autoplay blocked by browser
        });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showVideo]);

  if (!showVideo) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4">
      <div className="relative w-full max-w-[580px] bg-white p-[18px] shadow-2xl">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={() => setShowVideo(false)}
          aria-label="Close video"
          className="absolute -right-2 -top-[45px] z-50 flex h-8 w-12 items-center justify-center rounded-[3px] bg-[#a9ad18] text-[26px] font-light leading-none text-white transition hover:bg-[#8f9310]"
        >
          ×
        </button>

        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/videos/video2.mp4"
          autoPlay
          muted
          playsInline
          controls
          onEnded={() => setShowVideo(false)}
          className="block h-auto max-h-[70vh] w-full object-contain"
        />

      </div>
    </div>
  );
}