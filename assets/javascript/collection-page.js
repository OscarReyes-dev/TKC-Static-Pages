var filterBoxToggler = document.querySelector(".toggle-filters");
var filterBox = document.querySelector(".filter-box");
var pageBody = document.getElementsByTagName("BODY")[0];

// var x = document.getElementById("filterbox-Toggler");

filterBoxToggler.addEventListener("click", function() {
    filterBox.classList.toggle("hide-Filter--Box");
    pageBody.classList.toggle("opened-menu");




    // if (x.innerHTML === "Hide Filters") {
    //   x.innerHTML = "Show Filters";
    // } else {
    //   x.innerHTML = "Hide Filters";
    // }

  });





  var filterBoxCloseToggler = document.querySelector(".close-filters");
var filterBox = document.querySelector(".filter-box");

filterBoxCloseToggler.addEventListener("click", function() {
    filterBox.classList.toggle("hide-Filter--Box");
    pageBody.classList.toggle("opened-menu");




  });

