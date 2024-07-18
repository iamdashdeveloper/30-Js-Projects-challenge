import { songs } from "./data.js";

class MusicPlayer {
    constructor(songId) {
        this.songId = songId;
        this.currentSongIndex = songId;
        this.progressInterval = null;
        this.playerContainer = document.getElementById('js-song-info');
        
        this.renderSong(this.currentSongIndex);
    }

    renderSong(index) {
        let song = songs[index];
        const playerHTML = `
            <div class="music-player-info">
                <img src="${song.thumbnail}" alt="thumbnail" class="thumbnail">
                <h1>${song.song_title}</h1>
                <p>${song.artist}</p>
                <audio id="song">
                    <source src="${song.audio}" type="audio/mpeg">
                </audio>
                <input type="range" value="0" id="progress">
            </div>
            <div class="controls">
                <div><i class="fa-solid fa-backward" id="previous"></i></div>
                <div><i class="fa-solid fa-play" id="play"></i></div>
                <div><i class="fa-solid fa-forward" id="next"></i></div>
            </div>
        `;

        this.playerContainer.innerHTML = playerHTML;

        const playBtn = this.playerContainer.querySelector('#play');
        const previousBtn = this.playerContainer.querySelector('#previous');
        const nextBtn = this.playerContainer.querySelector('#next');
        const songElement = this.playerContainer.querySelector('#song');
        const progress = this.playerContainer.querySelector('#progress');

        playBtn.addEventListener('click', () => this.playPause(songElement, playBtn, progress));
        previousBtn.addEventListener('click', () => this.playPreviousSong());
        nextBtn.addEventListener('click', () => this.playNextSong());

        songElement.onloadedmetadata = () => {
            progress.max = songElement.duration;
            progress.value = songElement.currentTime;
        };

        songElement.addEventListener('timeupdate', () => {
            progress.value = songElement.currentTime;
        });

        songElement.addEventListener('play', () => {
            this.progressInterval = setInterval(() => {
                progress.value = songElement.currentTime;
            }, 500);
        });

        songElement.addEventListener('pause', () => {
            clearInterval(this.progressInterval);
        });

        progress.oninput = () => {
            songElement.currentTime = progress.value;
        };
    }

    playPause(songElement, playButton, progressBar) {
        if (playButton.classList.contains("fa-pause")) {
            songElement.pause();
            playButton.classList.remove("fa-pause");
            playButton.classList.add("fa-play");
        } else {
            songElement.play();
            playButton.classList.add("fa-pause");
            playButton.classList.remove("fa-play");
        }
    }

    playPreviousSong() {
        if (this.currentSongIndex > 0) {
            this.currentSongIndex--;
            this.renderSong(this.currentSongIndex);
        }
    }

    playNextSong() {
        if (this.currentSongIndex < songs.length - 1) {
            this.currentSongIndex++;
            this.renderSong(this.currentSongIndex);
        }
    }
}

export function renderPlayer(songId) {
    new MusicPlayer(songId);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const songIndex = parseInt(urlParams.get('songIndex'), 10);
    if (!isNaN(songIndex)) {
        renderPlayer(songIndex);
    }
});
