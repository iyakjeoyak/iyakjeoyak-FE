import { useLocation, useNavigate } from 'react-router-dom';

import { TAPS_QUERIES } from '@/constants/TAPS';
import Tag from '@/components/Tag';
import ectQueryOptions from '@/api/etc'
import styles from '../styles/TagsModal.module.scss';
import useGetURLSearch from '@/hooks/useGetURLSearch';
import { useQuery } from '@tanstack/react-query';

export default function TagsModal({toggleIsTagsModalOpen}:{toggleIsTagsModalOpen:()=>void}){
  const tap = useGetURLSearch('tap');
  const {data: tags} = useQuery(tap === TAPS_QUERIES.FEATURE ? ectQueryOptions.getCategories(): ectQueryOptions.getHashtags())
  
  const navigate = useNavigate();
  const location = useLocation();

  return(
  <div onClick={toggleIsTagsModalOpen} className="background">
    <div className={styles.container}>
      <div>태그 선택</div>
      <div className={styles['tags-container']}>
        {tags.map((tag)=><Tag key={tag.id} text={tag.name} onClick={()=>{
          navigate(`${location.pathname}${location.search}&tag=${tag.id}&tagname=${tag.name}`)}}/>)}
      </div>
    </div>
  </div>
)}