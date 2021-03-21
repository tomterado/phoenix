/* eslint-disable no-undef */
import './App.css';
import React, { useEffect, useState } from 'react';
import SimpleBottomNavigation from './SimpleBottomNavigation';
// import MessageIcon from '@material-ui/icons/MessageIcon';
import { Icon } from '@material-ui/core';

function App() {
  const [responseFromContent, setResponseFromContent] = useState('');
  const [url, setUrl] = useState('');
  const [value, setValue] = React.useState(0);

  /**
   * Get current URL
   */
  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
      const url = tabs[0].url;
      setUrl(url);
    });

    // console.log('value', value);
  }, [value]);
  
  // const sendTestMessage = () => {
  //   chrome.runtime.sendMessage({
  //     greeting: "hello", function(res) {
  //       console.log(res);
  //     }
  //   });
  //   };

  const messageIcon = "https://user-images.githubusercontent.com/16810128/111910824-90f17400-8a28-11eb-8373-c507bc22330e.png"
  const messageIconTwo = "https://user-images.githubusercontent.com/16810128/111910826-918a0a80-8a28-11eb-8ff2-771e2e7bfa5a.png"
  const headingContainer = (
    <div className="user-header">
      <div className="placeholderCircle" />
      <div className="headingContainerRight">
        <div className="placeholderCircle2">
          <img src={messageIconTwo} alt="share" />
        </div>
        <div className="placeholderCircle2">
          <img src={messageIcon} alt="message" />
        </div>
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

    // if (chrome && chrome.runtime.message === "image added") {
    //   chrome.storage.local.get("image", value => {
    //     console.log(value);
    //   })
    // }

    const zoraOne = "https://ipfs.fleek.co/ipfs/bafybeib5idq4k3nxujadfhi7qfghs52dpvs7htb3ug23rmbygpm535pncy"
    const zoraTwo = "https://ipfs.fleek.co/ipfs/bafybeihpeorpkez3wv4h3lwzkw2fmqal22llhdyb6laqc6opckatztemki"

    return (
      <div className="galleryContainer">
        <div className="addToFavorite">
          <img src={zoraOne} alt="Zora Flower" className="ipfsImage" />
        </div>
        <div className="addToFavorite">
          <img src={zoraTwo} alt="Zora Vid" className="ipfsImage" />
        </div>
        <div className="addToFavorite">
          <p className="addToFavPlusText" >+</p> 
          <p className="addToFavText" >Add to</p> 
          <p className="addToFavText" >Favorites</p> 
        </div>
      </div>
    )
  }


  const trendingGallery = () => {

    const ipfsOne = "https://ipfs.fleek.co/ipfs/bafybeieppvspqfzu7nzejxkflrr7g4kalixbxj4a5zw2z2j4ctk24jsily"
    const ipfsTwo = "https://ipfs.fleek.co/ipfs/bafybeigwzdfeksrpv3qrsxuhe4wxlvmp6tikx4ixvysc4hzwdsifhp5c6y"
    const ipfsThree = "https://ipfs.fleek.co/ipfs/bafybeicbfkqfunn3aacu4i3vqy6xronz37go46e2oqsve4rg2qh3qugswu"
    return (
      <div className="galleryContainer">
        <div className="addToFavorite">
          <img src={ipfsOne} alt="Girl in a jacket" className="ipfsImage" />
        </div>
        <div className="addToFavorite">
          <img src={ipfsThree} alt="Girl in a jacket" className="ipfsImage" />
        </div>
        <div className="addToFavorite">
          <img src={ipfsTwo} alt="Girl in a jacket" className="ipfsImage" />
        </div>
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
        {value === 0 ? mainContainer() : trendingGallery()}
        
        <SimpleBottomNavigation setValue={setValue} value={value}/>
      </div>
     
    </div>
  )

}

export default App;
