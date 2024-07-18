import { songs } from "./data.js";

function renderPlaylist() {
    let songHTML = '';
    songs.forEach((song, index) => {
        const song_title = song.song_title;
        const song_artist = song.artist;
        let HTML = `
            <div class="song-card js-song-card" data-song-index="${index}">
                <div class="circle">
                    <i class="fa-solid fa-music"></i>
                </div>
                <div class="song-info">
                    <h3>${song_title}</h3>
                    <p>${song_artist}</p>
                </div>
                <div class="dot-menu">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        `;
        songHTML += HTML;
    });

    document.getElementById('songs-container').innerHTML = songHTML;
    const songCards = document.querySelectorAll('.js-song-card');
    songCards.forEach(card => {
        card.addEventListener('click', () => {
            const songIndex = card.getAttribute('data-song-index'); // Get the value of data-song-index
            window.location.href = `player.html?songIndex=${songIndex}`;
        });
    });
}

renderPlaylist();
