$(document).ready(function(){
    const x = 6;
    const y = 10;
    $('.news_list_item').slice(x,y).hide();
})

function more(){
    const x = 6;
    const y = 10;
    $('.news_list_item').slice(x,y).show();
    $('.button').hide();
}