var allVideos = $('.video');
var allplay=$('#play-all');
var video;

// 누구.hover(
//     function(){
//         누구한테 마우스를 올렸을때 할일 
//     }, function(){
//         누구에게 마우스를 내렸을때 할일
//     }
// )

allVideos.hover(
    function(){
        video=$(this).find('video');
        console.log(video.get(0))
        //HTML요소(body, header, div, h1, em...)
        //get(0)-->html요소중에서 첫번째요소를 호출
        video.get(0).play();
    }, function(){
        //누구에게 마우스를 내렸을때 할일
        video.get(0).pause();
    }
)


allplay.click(function(){
    //allplay아 ~on클래스를 가지고 있는가?
    if(allplay.hasClass('on')){
        //조건문이 참일때 할일
        var vd=$('video');
        allplay.removeClass('on');
        $('.play-all').text('Pause All')

        // for(초기값; 조건문; 증가감식){
        //     실행문
        // }
        for(var i= 0; i<vd.length; i++){
            vd.get(i).play();
        } 
        
    }else{
        //조건문이 거짓일때 할일
        allplay.addClass('on');
        $('.play-all').text('Play All')
        //내부 글자를 바꾸는 방법
        for(var i= 0; i<vd.length; i++){
            vd.get(i).pause();
        } 
    }
});