import { useRef, useState } from "react";

/**
 * ファイルフォーム カスタムフック
 */
const useFileForm = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  /**
   * ファイル選択時の処理
   */
  const onChangeFile = () => {
    setFileName(() => fileRef.current?.files?.item(0)?.name ?? "");
  };

  /**
   * 参照ボタン押下時の処理
   */
  const onClickFileFormButton = () => {
    fileRef.current?.click();
  };

  return {
    fileName,
    fileRef,
    onChangeFile,
    onClickFileFormButton,
  };
};

export default useFileForm;
