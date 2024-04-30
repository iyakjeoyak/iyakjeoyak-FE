import { useLocation, useNavigate } from 'react-router-dom';

import Tag from '@/components/Tag';
import ectQueryOptions from '@/api/etc'
import styles from '../styles/TagsModal.module.scss';
import { useQuery } from '@tanstack/react-query';

export default function TagsModal({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen:()=>void}){
  const {data: tags} = useQuery(ectQueryOptions.getCategories())
  
  const navigate = useNavigate();
  const location = useLocation();

  return(
  <div onClick={toggleIsTagsModalOpen} className="background">
    <div className={styles.container}>
      <div>태그 선택</div>
      <div className={styles['tags-container']}>
        {tags.map((tag)=><Tag key={tag.id} text={tag.name} onClick={()=>{
          navigate(`${location.pathname}${location.search}&tag=${tag.id}&tag-name=${tag.name}`)}}/>)}
      </div>
    </div>
  </div>
)}