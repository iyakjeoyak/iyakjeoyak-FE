import Container from "../Container"
import styles from './index.module.scss';
import { useFormContext } from "react-hook-form";
import { useState } from "react";

const ImgsInput = ()=>{
  const { setValue, } = useFormContext();
  const [imgs, setImgs] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileList: File[] = Array.from(files);
    const fileStrings: string[] = fileList.map(file => URL.createObjectURL(file));
    setImgs(prevImgs => [...prevImgs, ...fileStrings]);

    setValue("imgFile", fileList);
    console.log(fileList[0])
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
      {imgs.map((img) => <img src={img} />)}
    </div>
  </Container>)
}
 
export default ImgsInput;