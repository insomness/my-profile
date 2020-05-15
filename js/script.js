$(".page-scroll").on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 55
    }, 1200, 'easeInQuint');

    e.preventDefault;

});

// parallax
// about saat halaman di load
$(window).on('load', function () {
    $('.pKiri, .pKanan').addClass('pMuncul');
})

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'

    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });
});

// portfolio
if (wScroll > $('.portfolio').offset().top - 200) {
    $('.portfolio .img-thumbnail').each(function (i) {
        setTimeout(function () {
            $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
        }, 300 * i)
    });
}