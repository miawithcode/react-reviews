import { useState } from 'react';
import reviews from './data';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  return (
    <main>
      <article>
        <div>
          <img src={image} width={'150px'} alt={name} />
          <span><FaQuoteRight /></span>
        </div>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
      </article>
    </main>
  );
};
export default App;
