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
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('Update the button');
}

function skip() {
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)                                                                                                                                                                                                                                                      
}

function handleRangeUpdate(){
    video[this.name] = this.value
    console.log(this.name)
    console.log(this.value)
}

function handleProgress(){
    const percent  = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', handleProgress);


skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))

