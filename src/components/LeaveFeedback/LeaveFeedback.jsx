import { useState } from 'react';
import { FeedbackOptions } from '../LeaveFeedback/FeedbackOptions/FeedbackOptions';
import { Notification } from '../LeaveFeedback/Notification/Notification';
import { Section } from '../LeaveFeedback/Section/Section';
import { Statistics } from './Statistics/Statistics';
import css from './Section/Section.module.css';
const LeaveFeedback = () => {
  const [votes, setVotes] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const handleFeedback = type => {
    setVotes(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, bad, neutral } = votes;
    return bad + good + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = votes;
    const total = countTotalFeedback();
    return total === 0 ? 0 : ((good / total) * 100).toFixed(2);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback yet." />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={votes.good}
            bad={votes.bad}
            neutral={votes.neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
};
export default LeaveFeedback;
