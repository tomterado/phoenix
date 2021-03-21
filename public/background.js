/* eslint-disable no-undef */
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        // console.log('tab URL', current_tab_info.url);
        if (/^https:\/\/zora.co/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('i injected'))
        }
        
        // Here is the right click menu section
        chrome.contextMenus.create({
            title: 'Save NFT',
            onclick: function (e) {
                chrome.runtime.sendMessage({ message: "image added" })
                //dummy IPFS imageSource
                chrome.storage.local.set({ "img": "https://ipfs.fleek.co/ipfs/bafybeiebjtasvpvbwj47ewcdufumucuqqgu6crdljyjtygxlvnxsp7kri4" })
                //test getting the clicked element with a doc getElements
                // console.log('tag', document.getElementsByTagName('img'));
        }
        }, function () {
            // console.log('test2');
        })

    });
});