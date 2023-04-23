import FileForm from "./components/FileForm";
import useFileForm from "./hooks/useFileForm";

import styles from "./App.module.scss";
import PreviewImageFileForm from "./components/PreviewImageFileForm";
import React from "react";
import usePreviewImageFileForm from "./hooks/usePreviewImageFileForm";

/**
 * App
 */
const App: React.FC = () => {
  const fileHooks = useFileForm();
  const previewHooks = usePreviewImageFileForm();

  return (
    <div className={styles["wrapper"]}>
      <FileForm
        fileName={fileHooks.fileName}
        onButtonClick={fileHooks.onClickFileFormButton}
        onChange={fileHooks.onChangeFile}
        ref={fileHooks.fileRef}
        className={styles["form"]}
      />
      <PreviewImageFileForm
        fileName={previewHooks.fileName}
        ref={previewHooks.fileRef}
        onButtonClick={previewHooks.onClickFileFormButton}
        onChange={previewHooks.onChangeFile}
        imgSrc={previewHooks.imgSrc}
        onClickDeleteButton={previewHooks.onClickDeleteImageButton}
        className={styles["form"]}
      />
    </div>
  );
};

export default App;
