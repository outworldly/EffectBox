// fetch ip to stream to other user
function fetchIP() {
  fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => console.log(data))
}

fetchIP()

// stream video
var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    const video = document.querySelector('#myVidPlayer');
	
	//w-width,h-height
    var w, h;
    canvas.style.display = "none";
	

    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play();
                
        
                w = video.videoWidth;
                h = video.videoHeight
                
                canvas.width = w;
                canvas.height = h;
            };
    	})
        .catch(error => {
        	alert('You have to enable the mic and the camera');
    	});
// hide controls FireFox
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
