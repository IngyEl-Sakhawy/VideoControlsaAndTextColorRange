const video = document.getElementById('video');
const playButton = document.getElementById('play');
const muteButton = document.getElementById('mute');
const rewindButton = document.getElementById('rewind');
const fullScreenButton = document.getElementById('fullScreen');
const speedmeter = document.getElementById('speed');
const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');
const videoProgress = document.getElementById('videoProgress');

        playButton.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        muteButton.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        });

        rewindButton.addEventListener('click', () => {
            video.currentTime = 0;
        });

        fullScreenButton.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            }
        });

        forwardButton.addEventListener('click', () => {
            video.currentTime += 3;
        });

        backwardButton.addEventListener('click', () => {
            video.currentTime -= 3;
        });

        speedmeter.addEventListener('input', () => {
            video.playbackRate = parseFloat(speedmeter.value);
        });

        video.addEventListener('timeupdate', () => {
            const currentTime = video.currentTime;
            const duration = video.duration;
            const progress = (currentTime / duration) * 100;
            videoProgress.value = progress;
        });
