// fetch ip to stream to other user
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
    const vid2 = document.querySelector('#vid2');
    const vid3 = document.querySelector('#vid3');
	
	//w-width,h-height
    var w, h;
    canvas.style.display = "none";
	

    window.navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            video.srcObject = stream;
            vid2.srcObject = stream;
            vid3.srcObject = stream;
            video.onloadedmetadata = (e) => {
                video.play();
                
        
                w = video.videoWidth;
                h = video.videoHeight
                
                canvas.width = w;
                canvas.height = h;
            };
            vid2.onloadedmetadata = (e) => {
                vid2.play();
                
        
                w = vid2.videoWidth;
                h = vid2.videoHeight
                
                canvas.width = w;
                canvas.height = h;
            };
            vid3.onloadedmetadata = (e) => {
                vid3.play();
                
        
                w = vid3.videoWidth;
                h = vid3.videoHeight
                
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
