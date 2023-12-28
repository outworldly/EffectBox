
// stream video
var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    const video = document.querySelector('#vid3');
const content = document.querySelector('#vid1');
	
	//w-width,h-height
    var w, h;
    canvas.style.display = "none";
	

            video.srcObject = content.srcObject;
            video.onloadedmetadata = (e) => {
                video.play();
                
        
                w = video.videoWidth;
                h = video.videoHeight
                
                canvas.width = w;
                canvas.height = h;
            };


// hide controls FireFox
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
