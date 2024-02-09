import css from './Feedback.module.css';
export const Feedback = ({ reviews, total }) => {
  return (
    <ul className={css.list}>
      <li>
        <p>Good: {reviews.good}</p>
      </li>
      <li>
        <p>Neutral: {reviews.neutral}</p>
      </li>
      <li>
        <p>Bad: {reviews.bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      {total > 0 && (
        <li>
          <p>
            Positive:{' '}
            {Math.round(((reviews.good + reviews.neutral) / total) * 100)}%
          </p>
        </li>
      )}
    </ul>
  );
};
