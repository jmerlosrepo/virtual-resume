import styles from "./styles.module.scss";

const Section = ({ title, classNames, customnStyles, children }) => {
  return (
    <section className={classNames} style={customnStyles}>
      <div className={styles.sectionTitle}>{title}</div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

export default Section;
