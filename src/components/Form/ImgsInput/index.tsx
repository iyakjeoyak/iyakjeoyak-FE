import Container from "../Container"
import stopEvent from "@/utils/stopEvent";
import styles from './index.module.scss';
import { useRef } from "react";
import usehandleImgPreview from "@/hooks/usehandleImgPreivew";

const ImgsInput = ()=>{
  const { handleImgChange, imgContainer, imgRef } = usehandleImgPreview();
 

  return (
  <Container title="이미지 선택" name="">
    <div className={styles.container}>
      <div className={styles['input-container']}>
        <input
            id="input-file"
            type="file"
            accept="image/*"
            onChange={handleImgChange}
            onDragOver={(e) =>{ 
              e.preventDefault()}}
            onDrop={handleImgChange}
          />
        <label htmlFor="input-file">+</label>
      </div>
      <img src="https://picsum.photos/200/300" ref={imgRef} />
    </div>
  </Container>)
}
 
export default ImgsInput;