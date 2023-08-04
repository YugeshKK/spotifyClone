
let masterplay=document.getElementById('masterplay');
let next= document.getElementById('next');
let songindex=0;
let audio=new Audio;
let play='pause';

let songs=[
    "song/Pottakaatil-Poovasam-MassTamilan.com.mp3",
    "song/Vaa-Rayil-Vida-Polaama-MassTamilan.com.mp3"
]

let index=0;
let len= songs.length;

masterplay.addEventListener('click',()=>{
    if(play=='pause'){
        if(index>=0){
            audio.src=songs[index];
            audio.play();
            masterplay.src="images/icons8-pause-50.png";
            play='play'
            console.log(len)
        }
    }else{
        audio.pause();
        masterplay.src="images/icons8-play-30.png";
        play='pause';
    }
})

next.addEventListener('click',()=>{
    if(index>=len-1){
        index=0;
        audio.src=songs[index];
        audio.play();
        play='pause';
    }else{
        index++;
        audio.src=songs[index];
        audio.play();
        play='pause';
    }
} )

