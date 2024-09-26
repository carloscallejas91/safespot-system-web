import styles from "./CustomTriangleDividerTop.module.css";

const CustomTriangleDividerTop = () => {
  return (
    <div className={styles.customShapeDividerTop}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 0L0 0 598.97 114.72 1200 0z"
          className={styles.shapeFill}
        ></path>
      </svg>
    </div>
  );
};

export default CustomTriangleDividerTop;
