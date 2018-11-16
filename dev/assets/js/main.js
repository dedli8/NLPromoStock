//add active class to catalog menu
   $(".sale-catalog .link").click(function () {
       $(".sale-catalog .link").removeClass('link-active');
       $(this).addClass('link-active');
   });