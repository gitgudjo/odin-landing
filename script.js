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
  