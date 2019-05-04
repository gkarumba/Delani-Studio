$(document).ready(function (){
    //WHAT WE DO SECTION 
    $("#design").click(function (){
        $("#design").hide();
        $("#design-info").show();
    });
    $("#design-info").click(function (){
        $("#design-info").hide();
        $("#design").show();
    });
    $("#development").click(function (){
        $("#development").hide();
        $("#development-info").show();
    });
    $("#development-info").click(function (){
        $("#development-info").hide();
        $("#development").show();
    });
    $("#product").click(function (){
        $("#product").hide();
        $("#product-info").show();
    });
    $("#product-info").click(function (){
        $("#product-info").hide();
        $("#product").show();
    });
    // PORTFOLIO SECTION
    ("#work1").hover(function () {
        $("#work-p").show();
    });
    ("#work1").mouseleave(function () {
        $("#work-p").hide();
    });
})