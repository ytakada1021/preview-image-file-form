import { MouseEventHandler, forwardRef } from "react";
import FileForm, { FileFormProps } from "../FileForm/FileForm";

import styles from "./PreviewImageFileForm.module.scss";
import classNames from "classnames";

type PreviewImageFileFormProps = {
  imgSrc?: string;
  onClickDeleteButton?: MouseEventHandler<HTMLButtonElement>;
} & FileFormProps;

/**
 * プレビュー画像ファイルフォーム
 */
const PreviewImageFileForm: React.FC<PreviewImageFileFormProps> = forwardRef(
  ({ imgSrc, onClickDeleteButton, className, ...rest }, ref) => {
    return (
      <div className={classNames(styles["wrapper"], className)}>
        <FileForm accept="image/*" ref={ref} {...rest} />
        {imgSrc && (
          <>
            <img src={imgSrc} alt="preview" className={styles["preview"]} />
            <button onClick={onClickDeleteButton}>画像削除</button>
          </>
        )}
      </div>
    );
  }
);

export default PreviewImageFileForm;
