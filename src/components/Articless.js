// src/Articles.js
import React, { useState } from 'react';
import Article from './Article';
import '../components/Articles.css';

const articlesData = [
  {
    id: 1,
    title: 'AI: The Fifth Industrial Revolution',
    description: 'The AI Revolution is real, why?? check it out..',
    image: require('../images/articlesvlogs/ai.jpg'),
    content: 'This article is yet to be published..... Please wait for a couple more days.',
  },
  {
    id: 2,
    title: 'Himalayas - Mahimalayas',
    description: 'Why Himalayas are so special? Is there any spiritual magic behind it?',
    image: require('../images/articlesvlogs/him.jpg'),
    content: 'This article is yet to be published..... Please wait for a couple more days.',
  },
  {
    id: 3,
    title: 'Is CAPM Worthy??',
    description: 'Can I take CAPM? or directly PMP?',
    image: require('../images/articlesvlogs/capm.jpg'),
    content: 'This article is yet to be published..... Please wait for a couple more days.',
  },
  // Add more articles as needed
];

const Articless = () => {
  window.scrollTo(0, 0);

  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (id) => {
    const article = articlesData.find((article) => article.id === id);
    setSelectedArticle(article);
  };

  return (
    <div className="articles">
      {selectedArticle ? (
        <div className="article-full">
                    <button onClick={() => setSelectedArticle(null)}>Back</button>
<br/><br/>

          <p>{selectedArticle.title}</p>
          <br/>
          <p>{selectedArticle.content}</p>
          
          <button onClick={() => setSelectedArticle(null)}>Back</button>
        </div>
      ) : (
        articlesData.map((article) => (
          <Article key={article.id} article={article} onReadMore={handleReadMore} />
        ))
      )}

    </div>
  );
};

export default Articless;
