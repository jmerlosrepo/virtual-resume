import styles from "./styles.module.scss";

const Image = ({
  src,
  alt = "",
  classNames = "",
  customStyles = {},
  sources = [],
}) => {
  return (
    <picture>
      {sources.length > 0 &&
        sources.map((soruce) => (
          <source media={soruce.media} srcset={source.srcset} />
        ))}
      <img
        loading="lazy"
        className={classNames}
        style={customStyles}
        src={src}
        alt={alt}
      />
    </picture>
  );
};

export default Image;
