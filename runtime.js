chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({username: 'snatchers'}, function () {
        alert('Open the extension popup to configure who to snatch')
    });
});