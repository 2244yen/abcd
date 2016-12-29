(function ($) {

    /*======================
        Fix menu and go to top
    ======================*/

    if ($('body').hasClass('home') || $('body').hasClass('archive')) {
        $("#header-dropdown").addClass('menu-fix');
    }

    var a = $('.freezepanel').offset().top;
    $('.freezepanel').parent().height(parseInt($('.freezepanel').height()) + parseInt($('.freezepanel').css('margin-bottom')));
    $(window).scroll(function() {

        //Fix top main menu
        var b = $(window).scrollTop();
        if (b >= a) {
            $('.freezepanel').addClass('freezing');
            $('.brand-logo').addClass('fix');
            $('.dropdown-list').removeClass('menu-fix');
            $('.product-on-cart').addClass('product-on-cart-fix');
        } else {
            $('.freezepanel').removeClass('freezing');
            $('.brand-logo').removeClass('fix');
             $('.product-on-cart').removeClass('product-on-cart-fix');
            if ($('body').hasClass('home') || $('body').hasClass('archive')) {
                $("#header-dropdown").addClass('menu-fix');
                $('#header-dropdown').hide();
            }
        };
        //Fix Main_menu mobi
        if ($(window).scrollTop() >= 64) {
            $('.brand-mb').hide();
            $('.search-fix').show();
            $('.home-btn').show();
        } else {
            $('.brand-mb').show();
            $('.search-fix').hide();
            $('.home-btn').hide();
        }
        //Fix go top
        if ($(window).scrollTop() >= 300) {
            $('.go-top').css('visibility', 'visible');
        } else {
            $('.go-top').css('visibility', 'hidden');
        }
    }) 


    $('.go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('.i-go-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    //Show menu item
    $(".cate-btn").on('click', function() {
        if($("#header-dropdown").hasClass('menu-fix')) {

        }
        else {
           $("#header-dropdown").toggle(); 
        }
    }); 

    $(".cate-btn").hover(function() {
        $(".freezing .dropdown-list").stop(true, true).fadeIn(200);
        $(".freezing .dropdown-list").addClass('animate');
    }, function() {
        $(".freezing .dropdown-list").stop(true, true).fadeOut();
        $(".freezing .dropdown-list").removeClass('animate');
    });


    /*======================
        Menu for moblie
    =========================*/

    $("#btn-mb").click(function() {
        $(".dropdown-list1").toggle();
    });

    $(".cate-sub").show();
    $(".icon-add").hide();
    $(".icon-subtract").show();
        
    $(".icon-add").click(function() {
        $(".cate-sub").show();
        $(".icon-add").hide();
        $(".icon-subtract").show();
    });
    $(".icon-subtract").click(function() {
        $(".cate-sub").hide();
        $(".icon-add").show();
        $(".icon-subtract").hide();
    });
    $(".icon-add2").click(function() {
        $(".cate-sub2").show();
        $(".icon-add2").hide();
        $(".icon-subtract2").show();
    });
    $(".icon-subtract2").click(function() {
        $(".cate-sub2").hide();
        $(".icon-add2").show();
        $(".icon-subtract2").hide();
    });
    $(".icon-add3").click(function() {
        $(".cate-sub3").show();
        $(".icon-add3").hide();
        $(".icon-subtract3").show();
    });
    $(".icon-subtract3").click(function() {
        $(".cate-sub3").hide();
        $(".icon-add3").show();
        $(".icon-subtract3").hide();
    });
    $(".icon-add4").click(function() {
        $(".cate-sub4").show();
        $(".icon-add4").hide();
        $(".icon-subtract4").show();
    });
    $(".icon-subtract4").click(function() {
        $(".cate-sub4").hide();
        $(".icon-add4").show();
        $(".icon-subtract4").hide();
    });
    $(".icon-add5").click(function() {
        $(".cate-sub5").show();
        $(".icon-add5").hide();
        $(".icon-subtract5").show();
    });
    $(".icon-subtract5").click(function() {
        $(".cate-sub5").hide();
        $(".icon-add5").show();
        $(".icon-subtract5").hide();
    });
    $(".icon-add6").click(function() {
        $(".cate-sub6").show();
        $(".icon-add6").hide();
        $(".icon-subtract6").show();
    });
    $(".icon-subtract6").click(function() {
        $(".cate-sub6").hide();
        $(".icon-add6").show();
        $(".icon-subtract6").hide();
    });
    $(".icon-add7").click(function() {
        $(".cate-sub7").show();
        $(".icon-add7").hide();
        $(".icon-subtract7").show();
    });
    $(".icon-subtract7").click(function() {
        $(".cate-sub7").hide();
        $(".icon-add7").show();
        $(".icon-subtract7").hide();
    });
    
    //Search in fixed menu
    function resizeInput () {
        $('.search-fix ul').css({
            'position' : 'absolute',
            'left' : '10px',
            'padding-right' : '10px' 
        });
        $('.search-fix ul').attr('width', $(this).val().length);
    }

    $('#input-mobi').keyup(resizeInput);

    
})(jQuery);
