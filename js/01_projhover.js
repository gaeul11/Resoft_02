
$(".ser_card").on({
"mouseover":function(){
$(this).children(".txt_front").css({'transform':'translate(-50px, -50px)', 'opacity':'0', 'transition':'0.4s'});
$(this).children(".txt_back").css({'transform':'translate(0, 0)', 'opacity':'1', 'transition':'0.4s'});
},
"mouseout":function(){
$(this).children(".txt_front").css({'transform':'translate(0,0)', 'opacity':'1', 'transition':'0.4s'});
$(this).children(".txt_back").css({'transform':'translate(50px, 50px)', 'opacity':'0', 'transition':'0.4s'});
}
});