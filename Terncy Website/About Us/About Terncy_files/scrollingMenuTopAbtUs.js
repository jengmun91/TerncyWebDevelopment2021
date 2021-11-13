
// $(function () { 
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 300) { 
//       $('.xy-logo-div img').attr('src','Home/whatif_matter_logo.png');
//     }
//     if ($(this).scrollTop() < 300) { 
//       $('.xy-logo-div img').attr('src','Home/xy_nav_logo.png');
//     }
//   })
// });




$(function () { 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) { 
      $('.xy-logo-div img').attr('src','About Terncy_files/whatif_matter_logo.png');
    }
    if ($(this).scrollTop() < 50) { 
      $('.xy-logo-div img').attr('src','About Terncy_files/xy_nav_logo.png');
    }
  })
});

