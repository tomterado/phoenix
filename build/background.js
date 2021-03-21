/* eslint-disable no-undef */
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log('tab URL', current_tab_info.url);
        if (/^https:\/\/zora.co/.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('i injected'))
        }
        
        chrome.contextMenus.create({
            title: 'Save NFT',
            onclick: function (e) {
                chrome.runtime.sendMessage({message: "image added"})
                chrome.storage.local.set({"img": "https://ipfs.fleek.co/ipfs/bafybeiebjtasvpvbwj47ewcdufumucuqqgu6crdljyjtygxlvnxsp7kri4"})
                console.log('tag', document.getElementsByTagName('img'));
        }
        }, function () {
            // console.log('test2');
        })

    });
});