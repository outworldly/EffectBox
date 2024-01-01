
 filters = ['blur','inverse','convolve','convoblur','convolve2','blackandwhite','noir','bluefill','displacement'],
 i = 1;
v = 4;
while (v > 0){
var vid = '#vid',[i]
var video = document.querySelector(vid);
  current.innerHTML = filters[i];
  video.style.webkitFilter='url(#'+filters[i]+')';
  video.style.mozFilter='url(#'+filters[i]+')';
  video.style.filter='url(#'+filters[i]+')';
vid = vid-1

 i++;
  
};
