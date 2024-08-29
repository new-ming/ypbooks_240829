$(document).ready(function(){

    const REST_API_KEY = "78aa470b61abb884d4df1d1490f3c6e8"
    $("#newBooks").append('<div class="bookSlidePrev"><span>&lt;</span></div>') // prev 화살표 생성

// 신간
    // 1. 전체 카테고리
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {query:"가",size:25},
        headers:{Authorization: "KakaoAK " + REST_API_KEY}
        
    }).done(function(bookdata){


        
        
        $("#newBooks").append('<div class="bookSlide slide0"><div class="wrap"></div></div>');    // 카테고리별 슬라이드 묶음



        for(let i in bookdata.documents){
        
            let index = (parseInt(i/5));
            let data = bookdata.documents[i]
        
            if(i%5 == 0){
                $('#newBooks > .slide0 > .wrap').append('<div class="booksWrap"></div>')     // 5개씩 책 묶음
            }

            let booksWrap = $('#newBooks > .slide0 > .wrap > .booksWrap ').eq(index)

            booksWrap.append(
                '<div class="books"><a href="#"><div class="booksImg">'+'<img src="'+ 
                data.thumbnail +
                '"></div><div class="booksHover"><div class="hoverText">'+
                data.contents.substring(0,120)+'...' +
                '</div><div class="hoverView">View</div><div class="hoverCart">Cart</div></div>'+
                '<p class="bookTitle">'+ data.title.substring(0,15)+'...'+ '</p><p class="author">' + data.authors[0] +'</p></a> </div>'
                )
        }

        
        $("#newBooks").append('<div class="bookSlideNext"><span>&gt;</span></div>')

    });





    
    
});