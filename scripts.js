document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("backgroundAudio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const rewindBtn = document.getElementById("rewindBtn");
    const forwardBtn = document.getElementById("forwardBtn");

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "&#10074;&#10074;"; // Pause symbol
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "&#9658;"; // Play symbol
        }
    });

    rewindBtn.addEventListener("click", function() {
        audio.currentTime -= 10; // Rewind by 10 seconds
    });

    forwardBtn.addEventListener("click", function() {
        audio.currentTime += 10; // Forward by 10 seconds
    });

    audio.addEventListener("timeupdate", function() {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        document.querySelector(".audio-duration").textContent = currentTime + " / " + duration;
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});
