import React from "react";
import { useTheme } from "@store/themeStore";

const CardMedia = ({ type = "iamge", src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470", alt = "", className = "", ...props }) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("cardMedia")["base"]);

  let mediaContent = null;
  switch (type) {
    case "image":
      mediaContent = <img src={src} alt={alt} className={`${baseClasses} ${className} `} {...props} />;

      break;
    case "video":
      mediaContent = (
        <video controls>
          <source src={src} type="video/mp4" />
        </video>
      );

      break;
    case "audio":
      mediaContent = <audio src={src} controls loop />;
      break;
    default:
      break;
  }

  return <>{mediaContent}</>;
};

export default CardMedia;
