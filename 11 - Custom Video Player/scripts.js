//get elements on page
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
//build out functions

function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if(video.paused) {
    //     video.play()
    // }else{
    //     video.pause()
    // }
}
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)


