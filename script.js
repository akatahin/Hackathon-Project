//set defult//
 $("a").hide();
 $("#me").text("Click a button for help!");
 $(".hoot").hide();
 
/*For Math Button*/
$("#math").dblclick(function() {
 $("ul").toggle();   
 $(".math").toggle();
 $(".hoot").toggle();
 $("#me").text("Click on the links to learn");
 $(".ela").hide();
 $(".sci").hide();
 $(".his").hide();
 $(".code").hide();
});
 
/*For English Button*/
$("#english").dblclick(function() {
 $("ul").toggle();   
 $(".ela").toggle();
 $(".hoot").toggle();
 $("#me").text("Click a links to learn!");
 $(".math").hide();
 $(".sci").hide();
 $(".his").hide();
 $(".code").hide();
});

/*For Science Button*/
$("#science").dblclick(function() {
 $("ul").toggle();   
 $(".sci").toggle();
 $(".hoot").toggle();
 $("#me").text("Click a links to learn!");
 $(".math").hide();
 $(".ela").hide();
 $(".his").hide();
 $(".code").hide();
});

/*For History Button*/
$("#history").dblclick(function() {
 $("ul").toggle();   
 $(".his").toggle();
 $(".hoot").toggle();
 $("#me").text("Click a links to learn!");
  $(".math").hide();
 $(".ela").hide();
 $(".sci").hide();
 $(".code").hide();
});

/*For Programming Button*/
$("#programming").dblclick(function() {
 $("ul").toggle();   
 $(".code").toggle();
 $(".hoot").toggle();
 $("#me").text("Click a links to learn!");
  $(".math").hide();
 $(".ela").hide();
 $(".his").hide();
 $(".sci").hide();
});
