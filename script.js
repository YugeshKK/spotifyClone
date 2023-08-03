
let masterplay=document.getElementById('masterplay');
let audio= document.getElementById('firstSong');
let play='pause';



masterplay.addEventListener('click',()=>{
    if(play=='pause'){
        audio.play();
        masterplay.src="images/icons8-pause-50.png";
        play='play'
    }else{
        audio.pause();
        masterplay.src="images/icons8-play-30.png";
        play='pause';
    }
})

