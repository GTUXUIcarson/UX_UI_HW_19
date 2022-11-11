$(".loading").onclick( function(){
    $(".loading").css("display","block");
  });
 // $(".loading").on("click")( function(){
   // $(".loading","display","block").slidetoggle();
   //});

   $("#contact").hover( function(){
    $(".loading").slideToggle();
  });