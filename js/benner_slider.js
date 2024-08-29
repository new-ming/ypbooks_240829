$(document).ready(function(){
    

    function slide(){
         
        // $('.slide').stop().animate({marginLeft:-1500}, function(){
        //   $('.slide li:first').appendTo('.slide');
        //   $('.slide').css({marginLeft:-750});
        // });
        $('.slide').stop().animate({marginLeft:-4518}, function(){
          $('.slide li:first').appendTo('.slide');
          $('.slide').css({marginLeft:-3765});
        });
       
    }

    setInterval(slide, 3000);


    function next(){
      $('.slide').stop().animate({marginLeft:-4518}, function(){
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({marginLeft:-3765});
      });
    }

    function prev(){
      $('.slide li:last').prependTo('.slide');
      $('.slide').css({marginLeft:-4518});
      $('.slide').stop().animate({marginLeft:-3765})
    }

    $(".next").on("click",function(){
      next()
    })

    $(".prev").on("click",function(){
      prev()
    })

});