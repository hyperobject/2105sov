
var loop = function (thing, text, i) {
  setTimeout(function () {
    $(thing).append(text[i]);
    // DO SOMETHING WITH data AND stuff
    if (i < text.length) {
      i++;                  // If i > 0, keep going
      loop(thing, text, i);  // Call the loop again
    }
  }, 50);
};
t1 = "Here's what whizzer (the organizer) says about Scratchovision:";
t2 = "\"Basically you try and make a poor/cheesy song in the style of the Eurovision Song Contest (which for the first time includes Australia! Because that's totally Europe!) and then submit whatever you come up with. Then we all listen to them, and vote while our ears recover. And maybe we remix the winning track.\"";
t3 = "This website will be updated with a playable list of song entries when whizzer puts out a bandcamp album.";

$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  console.log(keycode);
  switch (keycode){
    case 108:
        $('#content').append("<br /><br />");
        loop('#content', " Loading...", 0);
        setTimeout(function(){window.location.href = "http://files.technoboy10.tk/scratchovision.html";}, 800);
        break;
    case 105:
        loop('#content', t1, 0);
        setTimeout(function(){$('#content').append("<br /><br />");}, (t1.length * 50)+500);
        setTimeout(function(){loop('#content', t2, 0);}, (t1.length * 50) + 600);
        setTimeout(function(){$('#content').append("<br /><br />");}, (t1.length * 50)+(t2.length*50)+1300);
        setTimeout(function(){loop('#content', t3, 0);}, (t1.length * 50)+(t2.length*50)+2300);
        break;
    case 116:
        $('#trololo').show();
        break;
    case 115:
        $('body').append('<br /><br /><iframe style="border: 0; width: 200px; height: 200px;" src="http://bandcamp.com/EmbeddedPlayer/album=3150462307/size=large/bgcol=000000/linkcol=00ff00/minimal=true/transparent=true/" seamless><a href="http://whizzer0.bandcamp.com/album/scratchovision-song-contest-2014">Scratchovision Song Contest 2014 by Various Artists</a></iframe>');
    
  }
});