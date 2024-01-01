
// 2
var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    var video = document.querySelector('#vid2');
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


// 3
    var video = document.querySelector('#vid3');

	
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


