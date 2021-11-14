window.onload = function () {
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    const button = document.createElement('button');

    button.innerHTML = 'down video';
    button.setAttribute('id','download-video-tiktok');
    button.setAttribute('type','button');

    document.addEventListener('DOMNodeInserted', function(){
        const upDownButton = document.getElementsByClassName('action-container');
        const buttonDown = document.getElementById('download-video-tiktok');
        if(upDownButton.length && buttonDown === null){
            console.log(123);
            insertAfter(upDownButton[0],button);        
        }
    });

    button.addEventListener('click', function () {
        const urlVideo = document.querySelector('.video-card-browse > video').currentSrc;
        console.log(urlVideo);
        chrome.extension.sendMessage({
            data: urlVideo
        });
    });
}