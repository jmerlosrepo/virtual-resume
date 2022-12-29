import React from "react";

import Image from "../Image";
import LinkButton from "../LinkButton";

import styles from "./styles.module.scss";

const ThumbnailList = ({
  images,
  onThumbnailButtonClick,
  isClickable = true,
}) => {
  return (
    <div className={styles.thumbnail_list}>
      {images.map((img) => (
        <div key={img.src} className={styles.thumbnail}>
          {isClickable && (
            <LinkButton
              text="X"
              onClick={onThumbnailButtonClick}
              classes={styles.thumbnail_button}
            />
          )}

          <Image
            src={img.src}
            alt={img.name}
            classes={styles.thumbnail_image}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailList;
