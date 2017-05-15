var ncmb = new NCMB("アプリケーションキー", "クライアントキー");
var order = [];
ons.ready(function() {
    $('ons-list-item').click(function() {
        $(this).addClass('red');
        order.push($(this).text()); 
    });
});
