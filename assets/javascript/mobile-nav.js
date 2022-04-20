var hamburger = document.querySelector(".header-Menu--Btn");
var freezeBody = document.getElementsByTagName("BODY")[0];
var overLay = document.querySelector(".overlayClosed");
var mobileMenu = document.querySelector(".sidebar-navigation");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("open-menu");
  freezeBody.classList.toggle("opened-menu");
});




$(".sidebar-navigation nav li a").on('click', function(){
        
    
    //  = the nav li a's
    var parentLevel = $(this).parents('ul').length -1;
    var currentMenu = $(this).closest('ul');
    var currentListItem = $(this).parent('li');
    var parentMenu = $('.level-' + parentLevel);
    var subMenu = $(this).next('ul');

    
  
    if(currentListItem.hasClass('back')) {
      // back button hit	
      currentMenu.removeClass('active');
      parentMenu.removeClass('hidden');
    } else if (currentListItem.children('ul').length > 0) {
      // menu item has children - expand the menu
      subMenu.toggleClass('active');
      currentMenu.addClass('hidden');
    }
  });


