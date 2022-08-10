$(document).ready(function(){
    const x = 0;
    const y = 6;
    $('.news_list_item').hide();
    $('.news_list_item').slice(x,y).show();
})

function more(){
    const x = 6;
    const y = 10;
    $('.news_list_item').slice(x,y).show();
    $('.button').hide();
}