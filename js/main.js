$(document).ready(function (){
    //WHAT WE DO SECTION 
    var whatWeDo = ['design','development','product'];
    whatWeDo.forEach(function(what){
        $("#"+what).click(function (){
            $("#"+what).hide();
            $("#"+what+"-info").show();
        });
        $("#"+what+"-info").click(function (){
            $("#"+what+"-info").hide();
            $("#"+what).show();
        });
    });
    // PORTFOLIO SECTION
    var workIds = ['work1','work2','work3','work4','work5','work6','work7','work8'];
    workIds.forEach(function(id){
        $("#"+id).mouseover(function () {
            $("."+id+"-div").show();
        });
        $("#"+id).mouseout(function () {
            $("."+id+"-div").hide();
        });
    });
});