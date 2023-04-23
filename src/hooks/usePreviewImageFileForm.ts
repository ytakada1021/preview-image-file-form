import { useEffect, useMemo, useRef, useState } from "react";

/**
 * 画像プレビューファイルフォーム カスタムフック
 */
const usePreviewImageFileForm = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();
  const [imgSrc, setImgSrc] = useState("");
  const fileName = useMemo(() => file?.name ?? "", [file]);

  /**
   * ファイル選択時の処理
   */
  const onChangeFile = () => {
    const inputFile = fileRef.current?.files?.item(0);
    setFile(inputFile ?? undefined);
  };

  /**
   * 参照ボタン押下時の処理
   */
  const onClickFileFormButton = () => {
    fileRef.current?.click();
  };

  useEffect(() => {
    if (!file) {
      setImgSrc(() => "");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setImgSrc(() => objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  /**
   * 画像削除ボタン押下時の処理
   */
  const onClickDeleteImageButton = () => {
    if (fileRef.current) {
      fileRef.current.value = "";
    }

    setFile(() => undefined);
  };

  return {
    fileName,
    fileRef,
    imgSrc,
    onClickFileFormButton,
    onChangeFile,
    onClickDeleteImageButton,
  };
};

export default usePreviewImageFileForm;
