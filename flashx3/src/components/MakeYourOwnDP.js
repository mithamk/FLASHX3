/*
    Project Name: FLASHX3
    Contributors:
        - Meghana Saisri Bisa
        - Mitha M K
        - Mrunal Manjunath Kudtarkar
*/
import './MakeYourOwnDP.css';
import logo from './LOGO.jpg';
import background from './bg-img.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  const [image1, showImage1] = useState(false);
  const [image2, showImage2] = useState(false);
  const [image3, showImage3] = useState(false);

  const display1 = () =>
  {
    showImage1(true);
    showImage2(false);
    showImage3(false);
  }

  const display2 = () => 
  {
    showImage2(true);
    showImage1(false);
    showImage3(false);
  }

  const display3 = () => 
  {
    showImage3(true);
    showImage1(false);
    showImage2(false);
  }

  const navigate = useNavigate();

  const handleSubmit = () => 
  {
    if(image1)
    {
      navigate('/MakeYourOwn1');
    }
    else if(image2)
    {
      navigate('/MakeYourOwn2');
    }
    else if(image3)
    {
      navigate('/MakeYourOwn3');
    }
    else
    {
      alert("Please click on Bullet Points/Question and Answer/MCQ button and click Select");
    }
  }
    const directHomePg = () => {
      window.location.href = '/flashcard-type-directing-page.html';
    }

  return (
    <>
    <div id = "header">
      <img src={logo} alt="flashX3-logo" />
      <h2>Make your Own</h2>
    </div>
    <div style={backgroundStyle}></div>
    <div id="btn-container">
        <button id="bp" onClick = {display1}>Bullet Points</button>
        {image1 && (
          <img src="image1.png" alt="bullet-points" id="bullet-points" />
        )}
        <button id="qa" onClick = {display2}>Q & A</button>
        {
          image2 && (
            <img src = "image2.png" alt = "question-answers" id = "QA" />
          )}
        <button id="mcq" onClick = {display3}>MCQ</button>
        {
          image3 && (
            <img src = "image3.png" alt = 'MCQ' id = "MCQ" />
          )}
    </div>
    <div id = "homepage">
      <button onClick={directHomePg} style = {{right: '0px', position:'absolute'}}>⏪ Home 🏠</button>
    </div>
    <div id = "ok">
    {
        (image1 || image2 || image3) && (
            <button onClick = {handleSubmit}>Select</button>
        )
    }
    </div>
    </>
  );
}

export default App;
