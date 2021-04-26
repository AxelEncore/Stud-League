function playMe(val) {
  var index = parseInt(val);
  demoplayer.playlist().playAtIndex(index);
}

function updateOnSrc() {
  var playing = demoplayer.playlist().currentIndex();
  var loop = demoplayer.playlist().length();
  for(var i=0; i<loop; i++) {
    var btn = document.getElementById(i);
    if(i == playing)
      btn.setAttribute("class", "thumbnail playing");
    else
      btn.setAttribute("class", "thumbnail ");
  }
  console.log("updateOnSrc", playing, loop);
}

var cld = cloudinary.Cloudinary.new({ cloud_name: 'hadar' });
var demoplayer = cld.videoPlayer('demo-player');
demoplayer.on('sourcechanged', updateOnSrc);
demoplayer.playlist(
  [{ publicId: 'game2', sourceTypes: ['hls'], transformation: {streaming_profile: 'hd' }},
   { publicId: 'hls_30s_test', sourceTypes: ['hls'], transformation: {streaming_profile: 'hd' }},
   { publicId: 'hd_trim2', sourceTypes: ['hls'], transformation: {streaming_profile: 'hd' }},
   { publicId: 'Homepage_2', sourceTypes: ['hls'], transformation: {streaming_profile: 'hd' }}], 
   { autoAdvance: 0, repeat: true });