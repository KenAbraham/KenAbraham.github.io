$(window).scroll(function () {
            if ($(window).scrollTop() >= 50) {
            $('.navbar').css('background','#805dfe');
            } else {
            $('.navbar').css('background','transparent');
            }
            });