import Container from "../Container"
import styles from './index.module.scss';
import useHandleImgPreview from "@/hooks/useHandleImgPreivew";

const ImgsInput = ()=>{
  const { handleImgChange, imgRef } = useHandleImgPreview();

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