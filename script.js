function showImage(imageId) {
    var image = document.getElementById(imageId);
    image.classList.add('visible');
    
    var text = document.getElementById('harakiriContent1');
    text.classList.add('visible');
}

function hideImage(imageId) {
    var image = document.getElementById(imageId);
    image.classList.remove('visible');
    
    var text = document.getElementById('harakiriContent1');
    text.classList.remove('visible');
}










