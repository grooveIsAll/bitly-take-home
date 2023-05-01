import classNames from "classnames";

import styles from "./Spinner.module.scss";

const Spinner = ({ className, style }: SpinnerProps) => {
  const size = 80;

  return (
    <div
      className={classNames(styles.loaderWrap, className)}
      style={{
        ...style,
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        className={styles.loader}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.path}
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 3}
        />
        <circle
          className={styles.backPath}
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 3}
        />
      </svg>
    </div>
  );
};

export default Spinner;

interface SpinnerProps {
  className?: string;
  style?: React.CSSProperties;
}
