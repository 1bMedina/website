window.onload = init;

function init() {
    var button = document.getElementById("addButton"); 
    button.onclick = handleButtonClick;

}

function handleButtonClick () {
    var textInput = document.getElementById("songTextInput")
    var songName = textInput.value

    if(songName !== ""){
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById('playlist')
        ul.appendChild(li)
    alert('Adding ' + songName)
    } else {
        alert('Please add a song')
    }
}

function loadPlaylist() {
    var playlistarray = getSavedSongs();
    var ul = document.getElementById("playlist");
    if (playlistarray != null) {
    for (var i = 0; i < playlistarray.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = playlistarray[i];
    ul.appendChild(li);
         }
    }
}

function getSavedSongs() {
    return getStorearray("playlist"); 
}

function getStorearray(key) {
    var playlistarray = localStorage.getItem(key);
    if (playlistarray == null || playlistarray == ""){
        playlistarray = new array();
    } else {
     playlistarray = JSON.parse(playlistarray); return playlistarray;
    }
}

function save(item) {
    var playlistarray = getStorearray("playlist"); 
    playlistarray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistarray)); 
}