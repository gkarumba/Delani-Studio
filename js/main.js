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
    // POP UP AFTER SUBMITING
    $("button").click(function(event){
        var name = $("#name").val();
        alert(name + " we have received your message. Thank you for reaching out to us.");
        event.preventDefault();
    });
    // RESET FORM
    $("button").click(function(event){
        $(".message")[0].reset();
    });
    //MAILCHIMP API
    $(".message").bind("#submit",function(){
        var name = $("#name").val;
        var email= $("#email").val;
        var message = $("#message").val;
        var link = "https://us20.api.mailchimp.com/2.0/lists/subscribe.json?" + "apikey=ad9f836f93af6bdcba872119e1a0860c-us20id=2b641f2179" +
        "&email[email]="+ email +
        "&merge_vars[NAME]="+ name+
        "&merge_vars[MESSAGE]=" +message+
        "&send_welcome=false";
        
    $.ajax({
        type:"POST",
        url:link,
        dataType:'json',
        success: function(data){
            var name = $("#name").val();
        alert(name + " we have received your message. Thank you for subscribing");
        },
        error: function(jqXHR,textStatus,errorThrown){
            alert(errorThrown);
        }
    });
    });
});