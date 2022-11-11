//배열
//var 변수 = 10; //Ram과 같이 메모리를 어떤 저장장소에 저장하는 것!
//console.log(변수)//10
//
//var 배열 = ['일동','이동','삼동','사동'] //저장장소의 칸을 만든다 
//console.log(배열[1]) //이동
//console.log(배열[3]) //사동

//배열요소(아이템) 각각할일
//배열.forEach(할일); 
//배열.forEach(function(){실행문}); 
//배열.forEach(function(item){ /* 그릇 이름인 ()이름은 아무거나 설정가능하다 */
//   console.log(item+"아~안녕~") 
//}); 

var allVideos=document.querySelectorAll('.video') 
//무조건 class명은 배열로 들어옴
var allplay = document.querySelector('#play-all')

allVideos.forEach(function(v){
    v.addEventListener('mouseover',function(){ //event가 발생할테니 잘 들어라
        var video = v.querySelector('video') //아이템설정(queryselctor)
        video.play();
    })

    v.addEventListener('mouseleave',function(){
        var video = v.querySelector('video') 
        video.pause();
    })
})


allplay.addEventListener('click',function(){
    //allplay아~ 너 on이라는 클래스명을 가지고 있니?
    //if(조건문){
    //    조건문이 참일때 실행할일
    //}else{
    //    조건문이 거짓일때 실행할일
    //}
    if(allplay.classList.contains('on')){
        allplay.classList.remove('on');
        document.querySelector('.play-all').innerHTML="Pause All";
        allVideos.forEach(function(v){
            var video=v.querySelector('video');
            video.play();
        })
    }else{
        allplay.classList.add('on');
        document.querySelector('.play-all').innerHTML="Play All";
        allVideos.forEach(function(v){
            var video=v.querySelector('video');
            video.pause();
        })
    }
    //contains(on):~를 가지고 있으면
})

console.log(allVideos)
console.log(allplay)