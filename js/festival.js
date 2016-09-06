/**
 * Created by briancho on 9/3/16.
 */

$( document ).ready(function() {
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    if(isSafari){
        $(".text").removeClass("text");
    }

    $("div.box3_giveaway").click(function(){
        $("div.box3_festival").removeClass("active");
        $("div.box3_giveaway").addClass("active");
        $("div.default_giveaway").addClass("hide");
        $("div.festival").addClass("hide");
        $("div.lineup").addClass("hide");
        $("div.give").removeClass("hide");
        $("div#box4").addClass("small");
    });
    $("div.box3_festival").click(function(){
        $("div.box3_festival").addClass("active");
        $("div.box3_giveaway").removeClass("active");
        $("div.default_giveaway").removeClass("hide");
        $("div.festival").removeClass("hide");
        $("div.lineup").removeClass("hide");
        $("div.give").addClass("hide");
        $("div#box4").removeClass("small");
    });
    $("div.default_giveaway").click(function(){
        $("div.box3_festival").removeClass("active");
        $("div.box3_giveaway").addClass("active");
        $("div.default_giveaway").addClass("hide");
        $("div.festival").addClass("hide");
        $("div.lineup").addClass("hide");
        $("div.give").removeClass("hide");
        $("div#box4").addClass("small");
    });
});
