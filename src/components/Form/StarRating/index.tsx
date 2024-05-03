import { FaRegStar, FaStar } from 'react-icons/fa';
import { useController, useFormContext } from 'react-hook-form';

import Container from '../Container';
import styles from './index.module.scss';

const StarRating = ({ name = "star" }) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  const handleStarClick = (rating: number) => {
    field.onChange(rating);
  };

  return (
    <Container title="별점 선택" name={name}>
      <div className={styles.container}>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((rating) => (rating <= field.value ? 
          <FaStar key={rating} onClick={() => handleStarClick(rating)} />
          :
          <FaRegStar key={rating} onClick={() => handleStarClick(rating)}/>
          ))}
        </div>
        <div className={styles.number}>{field.value}</div>
      </div>
    </Container>
  );
};

export default StarRating;
