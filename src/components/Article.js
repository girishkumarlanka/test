// src/Article.js
import React, { useState } from 'react';
import '../components/Articles.css';

const Article = ({ article, onReadMore }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="article"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onReadMore(article.id)}>
      <img src={article.image} alt={article.title} className="article-image" />
      <div className="article-content" >
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        {hovered && (
          <button className="read-more" onClick={() => onReadMore(article.id)}>
            Read more....
          </button>
 
        )}
                           <br/>
                           <hr />
                           <br/>
                           

      </div>
    </div>
  );
};

export default Article;
