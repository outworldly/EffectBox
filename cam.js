// fetch ip
function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  console.log(ip);
});

// stream video
var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    const video = document.querySelector('#vid1');

	
	//w-width,h-height
    var w, h;
    canvas.style.display = "none";
	

    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play();
                
        
                video.videoWidth = video.videoWidth*0.5;
                video.videoHeight = video.videoHeight*0.5
		w = video.videoWidth;
                h = video.videoHeight
                
                canvas.width = w;
                canvas.height = h;
            };
		import("./video.js");
    	})
        .catch(error => {
        	alert('You have to enable the mic and the camera');
    	});
// hide controls FireFox
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
