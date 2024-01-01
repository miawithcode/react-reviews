import { useState } from 'react';
import reviews from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number < 0) {
      return reviews.length - 1;
    }
    if (number > reviews.length - 1) {
      return 0;
    }
    return number;
  };

  const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    if(randomIndex == index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <main>
      <article>
        <div>
          <span>
            <FaQuoteRight />
          </span>
          <div className="wrapper">
            <img src={image} alt={name} className="avatar" />
          </div>
        </div>

        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>

        <div>
          <button onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>

        <button onClick={randomReview}>suprise me</button>
      </article>
    </main>
  );
};
export default App;
