import React from "react";
import { useTheme } from "@store/themeStore";

const CardMedia = ({ type = "iamge", src = "", alt = "", className = "", ...props }) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("cardHMedia")["base"]);
  const titleClasses = useTheme((state) => state.getComponentStyle("cardHeader")["title"]);
  const subtitleClasses = useTheme((state) => state.getComponentStyle("cardHeader")["subtitle"]);

  let mediaContent = null;
  switch (type) {
    case "image":
      mediaContent = <img src={src} alt={alt} />;

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

  return (
    <div
      className={`
        ${baseClasses}
        ${className}
      `}
      {...props}
    >
      {mediaContent}
    </div>
  );
};

export default CardMedia;
