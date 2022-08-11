var btn = document.getElementById('btn');


btn.onclick = function(){
    var urlLink = document.getElementById("url").value;

    var mp3link = document.getElementById("mp3_link").src;

    var mp3_link = "http://yt-download.org/api/single/mp3?url="+ urlLink;


    var new_src = '<iframe id="mp3_link" src="'+mp3_link+'" width="50%" height="50%" allowtransparency="true" scrolling="no" style="border:none"></iframe>';

    document.getElementById("mp3_link").src = mp3_link;

    urlLink = "sggfs";

}