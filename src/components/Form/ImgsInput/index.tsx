import Container from "../Container"
import { showToast } from "@/utils/ToastConfig";
import styles from './index.module.scss';
import { useFormContext } from "react-hook-form";
import { useState } from "react";

const MAX_IMG_LENGTH = 4;

const ImgsInput = ()=>{
  const { setValue, } = useFormContext();
  const [imgs, setImgs] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    if (files.length > MAX_IMG_LENGTH) {
      showToast({type: "error", message: '파일은 최대 4개 업로드할 수 있습니다.'})
      setImgs([]);
      return;
    }
    
    const fileList: File[] = Array.from(files);
    const fileStrings: string[] = fileList.map(file => URL.createObjectURL(file));
    setImgs(prevImgs => [...prevImgs, ...fileStrings]);

    setValue("imgFile", fileList);
  };
  
  return (
  <Container title="이미지 선택" name="imgFile">
    <div className={styles.container}>
      <div className={styles['input-container']}>
        <input
            id="input-file"
            type="file"
            accept="image/*" 
            onChange={handleFileChange}
            multiple
          />
        <label htmlFor="input-file">+</label>
      </div>
      {imgs.map((img, index) => <img src={img} key={index} />)}
    </div>
  </Container>)
}
 
export default ImgsInput;