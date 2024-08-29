$(document).ready(function(){


    // 메뉴 데이터 출력

    $(function(){
        $.ajax({
            url : "./json/menu.json",
            dataType : "json",
            success : function(data){
                if(data.length>0){
                    for(let i in data){
                        let largeCate = data[i].largeCate
                        let subCate = data[i].subCate

                        // #menuCenter
                        //대분류 입력
                        $(".menuTitle").append('<li>'+largeCate+'</li>')
                        //소분류 입력 ul 생성
                        $("#menuCenter").append('<ul class="menuSub"></ul>')
                       
                        //소분류 입력
                        for(let l in subCate){
                            if(subCate[l].indexOf("[") == -1){
                                $(".menuSub").eq(i).append("<a href='#'><li>"+subCate[l]+"</li></a>")
                            }else{
                            $(".menuSub").eq(i).append("<li>"+subCate[l]+"</li>")
                            }} 
                    }
                }
            }
        });
    });






});