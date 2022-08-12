var btn = document.getElementById('btn');


btn.onclick = function(){
    var urlLink = document.getElementById("url").value;

    var mp3link = document.getElementById("mp3_link").src;

    var mp3_link = "https://yt-download.org/api/single/mp3?url="+ urlLink;

    document.getElementById("mp3_link").src = mp3_link;

    // document.getElementById('url').innerHTML = "";
}