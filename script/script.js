//-const and variables
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//-play and pasue video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fax-2x"></i>';

    }
}

//-update play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fax-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fax-2x"></i>'
    }
}

//-stop video 
function stopvideo() {
    video.currentTime = 0;
    video.pause();
    play.innerHTML = '<i class="fa fa-play fax-2x"></i>';
}

//- update progress
function updateProgress() {
    // console.log(video.currentTime);
    // console.log(video.duration);
    progress.value = (video.currentTime / video.duration) * 100;
    //-get-mins
    let mins = Math.floor(video.currentTime / 60);
    if (mins < video.duration) {
        mins = '0' + String(mins);
    }
    //-get-seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < video.duration) {
        seconds = '0' + String(seconds);
    }
    timestamp.innerHTML = `${mins}:${seconds}`;
}


//- set video progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

//-handlling events
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pasue', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus)
stop.addEventListener('click', stopvideo);
progress.addEventListener('change', setVideoProgress);

// @mondalcodehub | November-2022