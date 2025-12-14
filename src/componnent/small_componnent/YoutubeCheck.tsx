
import { useEffect, useState } from "react";

interface YoutubeCheckProps {
  url?: string;
  title: string;
}

const getYoutubeId = (url?: string) => {
  if (!url) return null;
  return url.split("v=")[1]?.split("&")[0] ?? null;
};

const checkYoutubeVideo = (videoId: string) => {
  return new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

const YoutubeCheck = ({ url, title }: YoutubeCheckProps) => {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const check = async () => {
      const id = getYoutubeId(url);
      if (!id) return;
      const exists = await checkYoutubeVideo(id);
      setAvailable(exists);
    };

    check();
  }, [url]);

  if (!url || !available)
    return (
      <>
        <div className="text-center dark:text-white text-2xl font-Montserrat font-semibold ">No video available :( </div>
      </>
    );

  return (
    <div className="mt-8 pt-6 border-t border-gray-300/30 dark:border-gray-700/60">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
        Watch Tutorial:
      </h3>
      <div className="aspect-video rounded-2xl overflow-hidden border border-gray-300/30 dark:border-gray-700/60">
        <iframe
          src={url.replace("watch?v=", "embed/")}
          title={title}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default YoutubeCheck;
