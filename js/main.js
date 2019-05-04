$(document).ready(function (){
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
})