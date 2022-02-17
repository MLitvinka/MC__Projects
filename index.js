const player = document.querySelector('.player'),
      playBtn = document.querySelector('.btn__play'),
      prevBtn = document.querySelector('.btn__prev'),
      nextBtn = document.querySelector('.btn__next'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('progress__container'),
      progressBar = document.querySelector('.progress__bar'),
      songArtist = document.querySelector('.song-artist'),
      songTitle = document.querySelector('.song-title'),
      boxLogo = document.querySelector('.boxLogo'),
      imgSrc = document.querySelector('.img__src')
     


const songs = ['Snow (Hey Oh)', 'Californication'] 

let songIndex = 0     

function loadSong(song) {
  songTitle.innerHTML = song
  audio.src = `./audio/${song}.mp3`
}

function playSong(){
  player.classList.add('play')
  audio.play()
  imgSrc.src = './img/pause.png'
}

function pauseSong(){
  player.classList.remove('play')
  audio.pause()
  imgSrc.src = './img/play.png'
}

playBtn.addEventListener('click', () => {
  const isPlaying = player.classList.contains('play')
  if(isPlaying){
    pauseSong()
  } else {
    playSong()
  }
  
})

const nextSong = () =>{
  songIndex++
  if (songIndex === songs.length){
    songIndex = 0;
  } 
  loadSong(songs[songIndex])
  playSong()
  
}

const prevSong = () => {
  songIndex--
  if (songIndex < 0){
    songIndex = songs.length -1
  }
  loadSong(songs[songIndex])
  playSong()
  console.log(songIndex)

}
nextBtn.onclick = () => nextSong();
prevBtn.onclick = () => prevSong();


function updateProgress(e) {
  const {duration, currentTime} = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progressBar.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)


function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration

}
progressContainer.addEventListener('click', setProgress)