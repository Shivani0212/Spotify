console.log("Welcome to Spotify");
let Index=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let MyprogressBar=document.getElementById('MyprogressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Krishna flute",filepath:"songs/1.mp3",coverPath:"pexels-alexander-grey-1191710.jpg"},
    {songName: "Tum hi ho",filepath:"songs/2.mp3",coverPath:"pexels-craig-adderley-1563356.jpg"},
    {songName: "Bande hai hum uske",filepath:"songs/3.mp3",coverPath:"pexels-pixabay-60597.jpg"},
    {songName: "Zara Zara",filepath:"songs/4.mp3",coverPath:"pexels-yuliya-strizhkina-1198802.jpg"},
    {songName: "Tum se hi",filepath:"songs/5.mp3",coverPath:"pexels-eberhard-grossgasteiger-443446.jpg"},
    {songName: "Jaan Nisaar",filepath:"songs/6.mp3",coverPath:"pexels-pixabay-45911.jpg"},
    {songName: "Chidiya",filepath:"songs/7.mp3",coverPath:"pexels-julius-silver-753626.jpg"},
    {songName: "Bhare Naina",filepath:"songs/8.mp3",coverPath:"pexels-pixabay-33109.jpg"},
    {songName: "Kyun main jaagoon",filepath:"songs/9.mp3",coverPath:"pexels-annam-w-1047442.jpg"},
    {songName: "Sun rha hai",filepath:"songs/10.mp3",coverPath:"pexels-pixabay-60597.jpg"},
]
songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    MyprogressBar.value=progress;
})
MyprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=(MyprogressBar.value*audioElement.duration)/100;

})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        Index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${Index+1}.mp3`;
        masterSongName.innerText=songs[Index].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(Index>=9){
        Index=0;
    }
    else{
        Index+=1;
    }
    audioElement.src='songs/${Index+1}.mp3';
    masterSongName.innerText=songs[Index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');   

})
document.getElementById('previous').addEventListener('click',()=>{
    if(Index<=0){
        Index=0;
    }
    else{
        Index-=1;
    }
    audioElement.src='songs/${Index+1}.mp3';
    masterSongName.innerText=songs[Index].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');   

})



