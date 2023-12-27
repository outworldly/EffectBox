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
                
                //new
                w = video.videoWidth;
                h = video.videoHeight
                
                canvas.width = w;
                canvas.height = h;
            };
    	})
        .catch(error => {
        	alert('You have to enable the mic and the camera');
    	});
