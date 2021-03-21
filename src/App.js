/* eslint-disable no-undef */
import './App.css';
import React, { useEffect, useState } from 'react';
import SimpleBottomNavigation from './SimpleBottomNavigation';

function App() {
  const [responseFromContent, setResponseFromContent] = useState('');
  const [url, setUrl] = useState('');

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });
  }, []);
  
  // const sendTestMessage = () => {
  //   chrome.runtime.sendMessage({
  //     greeting: "hello", function(res) {
  //       console.log(res);
  //     }
  //   });
  //   };

  const headingContainer = (
    <div className="user-header">
      <div className="placeholderCircle" />
      <div className="headingContainerRight">
        <div className="placeholderCircle2" />
        <div className="placeholderCircle2" />
      </div>
    </div>
  )

  const headingTitle = () => {
    return (
      <div className="headingNavTitleContainer">
        <p className="headingNavTitle">Favorites</p>
        <p className="headingNavDescription">My Favorite Collection</p>
      </div>
    )
  }

  const mainContainer = () => {

    if (chrome && chrome.runtime.message === "image added") {
      chrome.storage.local.get("image", value => {
        console.log(value);
      })
    }

    return (
      <div className="galleryContainer">
        <div className="addToFavorite">
          <p className="addToFavText" >Add to</p> 
          <p className="addToFavText" >Favorites</p> 
        </div>
        <div className="addToFavorite"/>
        <div className="addToFavorite"/>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="ext-container">
        {headingContainer}
        {headingTitle()}
        {/* <button onClick={sendTestMessage}>SEND MESSAGE</button>
        <p>Response from content:</p>
        <p>
          {url}
          {responseFromContent}
        </p> */}
        {mainContainer()}
        
        <SimpleBottomNavigation/>
      </div>
     
    </div>
  )

}

export default App;
