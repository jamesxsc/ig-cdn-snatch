chrome.storage.sync.get('username', function (data) {
    document.getElementById('username-textarea').innerText = data.username;
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('update-button').addEventListener("click", function() {
        chrome.storage.sync.set({username: document.getElementById('username-textarea').value}, function () {
            alert('Username updated successfully');
        });
    })
});