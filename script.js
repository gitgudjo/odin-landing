function toggleVisibility(imageId, textId) {
    var image = document.getElementById(imageId);
    var text = document.getElementById(textId);

    image.classList.toggle('visible');
    text.classList.toggle('visible');
}



function delay (URL) {
    var myDiv = document.getElementById('content'); 

    
    myDiv.style.transition = 'opacity 0.5s ease'; 

    
    myDiv.style.opacity = '0'; 

    var myDiv2 = document.getElementsByClassName('socials')[0]; 

    
    myDiv2.style.transition = 'opacity 0.5s ease'; 

    
    myDiv2.style.opacity = '0'; 

    setTimeout( function() { window.location = URL }, 500 );
}

function openFileExplorer(folderName) {
    // You can customize this function to load content based on the folderName
    // For simplicity, just toggle the visibility of the file explorer window
    document.getElementById('fileExplorer').style.display = 'block';
  }
  
  function closeFileExplorer() {
    document.getElementById('fileExplorer').style.display = 'none';
  }
  

  function openBrowser(folderName) {
    // You can customize this function to load content based on the folderName
    // For simplicity, just toggle the visibility of the file explorer window
    document.getElementById('browser').style.display = 'block';

    if (folderName === 'Japanfolder') {
        loadJapanContent();

    } else if (folderName === 'albaniaFolder') {
        loadAlbaniaContent()
        
    }

    function loadJapanContent() {
        
        document.querySelector('#browser .title p').innerText = 'C:/Photos/Japan, 2019';
    
       
        const photoroll = document.querySelector('#browser .photoroll');
        photoroll.innerHTML = `
        <img src="/photos/japan/IMG_9313.jpg" alt="">
        <img src="/photos/japan/IMG_9301.jpg" alt="">
        <img src="/photos/japan/IMG_0063.jpg" alt="">
        <img src="/photos/japan/IMG_0048.jpg" alt="">
        <div class="portrait">
        <img src="/photos/japan/IMG_9534.jpg">
    </div>
        <img src="/photos/japan/IMG_9536.jpg" alt="">
        <img src="/photos/japan/IMG_0047.jpg" alt="">
        <div class="smaller">
        <img src="/photos/japan/IMG_20190722_174509.jpg" alt="img">
    </div>
        <img src="/photos/japan/IMG_9316.jpg" alt="">
        <div class="portrait">
        <img src="/photos/japan/IMG_9345.jpg" alt="">
    </div>
        <img src="/photos/japan/IMG_9518.jpg" alt="">
        <div class="portrait">
        <img src="/photos/japan/IMG_9514.jpg" alt="">
    </div>
        `;
    } 

    function loadAlbaniaContent() {
        document.querySelector('#browser .title p').innerText = 'C:/Photos/Albania, 2018';
    
       
        const photoroll = document.querySelector('#browser .photoroll');
        photoroll.innerHTML = `
        <img src="/photos/albania/IMG_2047.jpg" alt="">
               <img src="/photos/albania/IMG_2027.jpg" alt="">
               <img src="/photos/albania/IMG_2039.jpg" alt="">
               <img src="/photos/albania/IMG_2138.jpg" alt="">
               <img src="/photos/albania/IMG_2143.jpg" alt="">
               <img src="/photos/albania/IMG_2063.jpg" alt="">
               <img src="/photos/albania/IMG_2020.jpg" alt="">
               <img src="/photos/albania/IMG_2023.jpg" alt="">
        `;



    }















































  }
  
  function closeBrowser() {
    document.getElementById('browser').style.display = 'none';
    photorollElement.scrollTop = 0;
  }

  