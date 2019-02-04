let url = window.location.href;
let name = url.replace("https://www.instagram.com/", "").replace("/", "");
chrome.storage.sync.get('username', function(data) {
    if (name === data.username) {
        alert('Snatch procedure beginning');
        document.getElementById('react-root').style.visibility = 'hidden';
        function t() {
            document.getElementById('react-root').style.visibility = 'hidden';
            let preencrypt = document.documentElement.innerHTML;
            download("encrypted-snatch.lsn", preencrypt);
        }

        setTimeout(t, 1000);
    }
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}