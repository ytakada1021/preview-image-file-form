import classNames from "classnames";
import React, {
  ComponentPropsWithRef,
  MouseEventHandler,
  forwardRef,
} from "react";

import styles from "./FileForm.module.scss";

export type FileFormProps = {
  fileName?: string;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
} & ComponentPropsWithRef<"input">;

/**
 * ファイルフォーム
 */
const FileForm: React.FC<FileFormProps> = forwardRef(
  ({ fileName, onButtonClick, className, ...rest }, ref) => {
    return (
      <div className={classNames(styles["wrapper"], className)}>
        <input
          type="text"
          readOnly
          className={styles["filename"]}
          value={fileName}
        />
        <input type="file" ref={ref} hidden {...rest} />
        <button className={styles["button"]} onClick={onButtonClick}>
          参照
        </button>
      </div>
    );
  }
);

export default FileForm;
