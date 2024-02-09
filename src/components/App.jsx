import 'modern-normalize';
import './App.css';
import { Description } from './description/Description';
import { Options } from './options/Options';
import { Feedback } from './feedback/Feedback';
import { useState, useEffect } from 'react';
import { Notification } from './notification/Notification';

export const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('saved-reviews');
    return savedReviews !== null
      ? JSON.parse(savedReviews)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-reviews', JSON.stringify(reviews));
  }, [reviews]);

  const totalReviews = Object.values(reviews).reduce((s, v) => (s += v), 0);

  const onButtonClick = e => {
    const button = e.target.dataset.id;
    if (!button) return;
    setReviews({
      ...reviews,
      [button]: reviews[button] + 1,
    });
  };

  const onResetClick = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        onButtonClick={onButtonClick}
        onResetClick={onResetClick}
        totalReviews={totalReviews}
      />
      {totalReviews === 0 ? (
        <Notification />
      ) : (
        <Feedback total={totalReviews} reviews={reviews} />
      )}
    </>
  );
};
