// Initialize The Variables

let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterplay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progress-bar');
let playingGIF = document.getElementById('playing');
let MasterSongName = document.getElementById('MasterSongName');
let songItem = Array.from(document.getElementsByClassName('song-item'));

let songs = [
    { SongName: "You Are", FilePath: "/songs/1.mp3", CoverPath: "/covers/1.jpg", Duration: "03:50" },
    { SongName: "Hands Down", FilePath: "/songs/2.mp3", CoverPath: "/covers/2.jpg", Duration: "02:33" },
    { SongName: "Forever", FilePath: "/songs/3.mp3", CoverPath: "/covers/3.jpg", Duration: "04:33" },
    { SongName: "In my Life", FilePath: "/songs/4.mp3", CoverPath: "/covers/4.jpg", Duration: "04:27" },
    { SongName: "Stay With You", FilePath: "/songs/5.mp3", CoverPath: "/covers/5.jpg", Duration: "03:28" },
    { SongName: "Everything", FilePath: "/songs/6.mp3", CoverPath: "/covers/6.jpg", Duration: "02:40" },
    { SongName: "I Wanna", FilePath: "/songs/7.mp3", CoverPath: "/covers/7.jpg", Duration: "02:27" },
    { SongName: "Joker BGM", FilePath: "/songs/8.mp3", CoverPath: "/covers/8.jpg", Duration: "03:07" }
]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].CoverPath;
    element.getElementsByClassName('SongName')[0].innerText = songs[i].SongName;
    element.getElementsByClassName('timestamp')[0].innerText = songs[i].Duration;
});

// audioElement.play();

// Handle Play/Pause Click
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        playingGIF.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        playingGIF.style.opacity = 0;

    }
});


// Listen To Events

audioElement.addEventListener('timeupdate', () => {
    // Update SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
    if (progress = 100) {
        songIndex++
    }
});

progressBar.addEventListener
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
});

const MakeAllPlays = () => {
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        MakeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        MasterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        playingGIF.style.opacity = 1;
    });

});


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});
