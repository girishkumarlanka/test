import React from 'react';
import '../components/VideoPlayer.css';
import VideoPlayer from "../components/VideoPlayer";


function VLogs() {
  const videoId1 = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnail1 = require("../images/articlesvlogs/Himalayas.jpg"); // Replace with your video thumbnail URL

  const videoId2 = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnail2 = require("../images/articlesvlogs/dronagirimatha.jpg"); // Replace with your video thumbnail URL

  const videoId3 = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnail3 = require("../images/articlesvlogs/kainchidham.jpg"); // Replace with your video thumbnail URL

  const videoId4 = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnail4 = require("../images/articlesvlogs/Haidakhan.jpg"); // Replace with your video thumbnail URL

  const videoId5 = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnail5 = require("../images/articlesvlogs/girnar.jpg"); // Replace with your video thumbnail URL

  const videoId6 = "dQw4w9WgXcQ"; // Replace with your YouTube video ID
  const thumbnail6 = require("../images/articlesvlogs/garudeshwar.jpg"); // Replace with your video thumbnail URL

  window.scrollTo(0, 0);

  return (
    
<div className="container1">

<div className="content1">
<h1 style={{textAlign:'center'}}><u>Reminisce</u></h1>

<div className="hover01 column">

<div class="row"> 
  <div class="column">
  <figure><VideoPlayer videoId={videoId1} thumbnail={thumbnail1} /></figure>
    <span>Mahavatar Babaji Cave</span>
  </div></div>

  <div class="row"> 
  <div class="column">
  <figure><VideoPlayer videoId={videoId2} thumbnail={thumbnail2} /></figure>
    <span>Dronagiri Matha Temple</span>
  </div>
</div>
<div class="row"> 
  <div class="column">
  <figure><VideoPlayer videoId={videoId3} thumbnail={thumbnail3} /></figure>
    <span>Kainchidham</span>
  </div>
</div>
<div class="row"> 
  <div class="column">
  <figure><VideoPlayer videoId={videoId4} thumbnail={thumbnail4} /></figure>
    <span>Haidakhan Baba Ashram</span>
  </div></div>

  <div class="row"> 
  <div class="column">
  <figure><VideoPlayer videoId={videoId5} thumbnail={thumbnail5} /></figure>
    <span>Girnar Datta Sikhar</span>
  </div>
</div>
<div class="row"> 
  <div class="column">
  <figure><VideoPlayer videoId={videoId6} thumbnail={thumbnail6} /></figure>
    <span>Sri Kshetra Garudeshwar</span>
  </div>
</div>
</div>
</div>
</div>
  );
}

export default VLogs;