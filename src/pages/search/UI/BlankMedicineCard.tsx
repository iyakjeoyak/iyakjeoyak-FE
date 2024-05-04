import XIcon from "@/assets/icons/XIcon"
import styles from '../styles/BlankMedicineCard.module.scss';

export default function BlankMyMedicineBoard(){

  return (
    <div className={styles.container}>
       <div className={styles.icons}>
        <XIcon width={50} height={32}/>
        <XIcon width={50} height={32}/>
        <XIcon width={50} height={32}/>
       </div>
       <div className={styles.text}>
          <div>검색된 영양제가 없습니다</div>
       </div>
    </div>
  )
}