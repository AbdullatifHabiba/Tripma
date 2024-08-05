import styles from './flights.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviewsContainer}>
        <div className={styles.titleRow} style={
            {
                alignItems:"center",
                justifyContent: "center"
            }
        }>
      <h2>What <span className={styles.highlight}>Tripma</span> users are saying</h2>
      </div>
      <div className={styles.reviewsGrid}>
        {reviews.map((review, index) => (
         <div key={index} className={styles.AllCard}>
            
            <Image src={review.avatar} alt={review.name} width={48} height={48} className={styles.avatar} />
            <div className={styles.reviewCard}>
            <div className={styles.userInfo}>
              <div>
                <p><strong>{review.name}</strong></p>
                <p>{review.location} | {review.date}</p>
              </div>
            </div>
            <div className={styles.rating}>
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
             <div className={styles.reviewContent}>
            <p>{review.content}</p>
            <Link href="#">read more...</Link>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
