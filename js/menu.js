$(document).ready(function(){



    // 전체 카테고리 위에 마우스 올릴경우 메뉴 항목 보이게하기
    $("#allCategory").on("mouseenter",function(){

        $("#menu").stop().show();

    });

    
    // 메뉴에서 마우스를 벗어나면 숨기기
    $("#menu").on("mouseleave",function(){

        $("#menu").stop().hide();

    });
    

    // 동적 생성된 태그여서  $(document).on 으로 이벤트를 추가한다.
    $(document).on('mouseenter', '.menuTitle > li', function() {

        // 대분류 li 전체 배경색 회색으로 만들기
        $(".menuTitle > li").css("background-color", "rgb(240, 240, 240)");
        
        // 마우스 올라간 대분류 li에 색상 변경
        $(this).css("background-color", "white");

        // 모든 .menuSub 숨기기
        $(".menuSub").stop().hide();
        
        // 현재 대분류 li의 인덱스를 찾고 해당하는 .menuSub 보여주기
        var index = $(this).index();
        $(".menuSub").eq(index).stop().show();
    })
















});