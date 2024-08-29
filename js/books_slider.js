
$(document).ready(function(){

    //class로 페이지내에 반복생성한 슬라이드를 제어해야함

    // //////////////////////////////////////////////////자동슬라이드 사용 X
    // function slide() {
    //     $(".wrap").each(function() {
    //         $(this).stop().animate({ marginLeft: -1200 }, function() {
    //             $(this).find(".booksWrap:first").appendTo($(this));
    //             $(this).css({ marginLeft: 0 });
    //         });
    //     });
    // }

    // setInterval(slide, 3000);



    // //////////////////////////////////////////////////슬라이드 이전페이지로
    function prev(n){
        let bookSlide = n.parent().siblings('.bookSlide')

        bookSlide.each(function(){
            let wrap = $(this).find(".wrap")
            wrap.find(".booksWrap:last").prependTo(wrap);
            wrap.css({marginLeft : -1200})
            wrap.stop().animate({marginLeft: 0})

        })


        
    };



    // //////////////////////////////////////////////////슬라이드 다음페이지로
    function next(n){

        let bookSlide = n.parent().siblings('.bookSlide')
        bookSlide.each(function(){

            let wrap = $(this).find(".wrap")
            wrap.stop().animate({marginLeft:-1200},function(){
                wrap.find(".booksWrap:first").appendTo(wrap);
                wrap.css({marginLeft:0})
            })


        })
        

    }




    // ////////////////////////////////////////////////////// 이벤트 추가

    $(document).on("click",".bookSlidePrev span" ,function() {
        prev($(this))
    });

    $(document).on("click",".bookSlideNext span" ,function() {
        console.log("1번" + $(this).attr("class"))
        next($(this))
    });



    
    // ///////////////////////////////////////////////////슬라이드 카테고리 선택

    /// 

    $('.bookSlide').hide(); // 모든 .bookSlide 요소 숨김

    $('.slideBox').each(function(){
        $(this).find(".slide0").show();

    })





    // 카테고리 선택 여부에 따른 출력

    $('.slideCate').each(function(){
        $(this).on("click", "ul > li", function() {
            // 버튼색상 없애기
            $('.slideCate li').css("background-color","rgb(226, 226, 226)")
            $('.slideCate li').css("color","gray")
            //클릭한 버튼만 색상 표시
            $(this).css("background-color","#2bb673")
            $(this).css("color","white")

            // 선택되지 않은 카테고리의 항목 숨기기
            $(this).closest(".slideCate").siblings(".bookSlide").each(function(){
                $(this).hide()
                
            });

            // 선택된 카테고리의 인덱스 확인
            let index = $(this).index();
            // console.log(index);
            
            // 선택된 카테고리의 인덱스를 통해 보여질 내용 선택
            $(this).closest(".slideCate").siblings(".slide" + index).show();
        });   
    });














});
