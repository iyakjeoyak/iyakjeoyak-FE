import Container from "../Container"
import styles from './index.module.scss';
import { useRef } from "react";
import usehandleImgPreview from "@/hooks/usehandleImgPreivew";

const ImgsInput = ()=>{
  const imgInputRef = useRef<HTMLInputElement>(null);
  const { handleImgChange, imgContainer, imgRef } = usehandleImgPreview();

  return (
  <Container title="이미지 선택" name="">
    <div className={styles.container}>
    <div className={styles['input-container']}>
      <input
          ref={imgInputRef}
          type="file"
          accept="image/*"
          onChange={handleImgChange}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImgChange}
        />
      <label>+</label>
    </div>
      <img ref={imgRef}/>
    </div>
  </Container>)
}
 
export default ImgsInput;