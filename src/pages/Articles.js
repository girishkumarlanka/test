import React from 'react';
import Articless from '../components/Articless';

function Articles() {
  window.scrollTo(0, 0);

  return (
    <div className="container2">

    <div className="content2">
    <h1 style={{textAlign:'center'}}><u>Inner-view</u></h1>

      <Articless/>
    </div>
    </div>
  );
}

export default Articles;
