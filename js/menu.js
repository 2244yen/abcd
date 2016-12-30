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

    $('.catelogies-bar li:first-child').find(".cate-sub").show();
    $('.catelogies-bar li:first-child').find(".icon-add").hide();
    $('.catelogies-bar li:first-child').find(".icon-subtract").show();

    $('.catelogies-bar li').each(function() {
        var child = $(this);
        child.children(".icon-subtract").click(function(e) {
            e.preventDefault();
            //hide menu item
            child.find(".cate-sub").hide();
            child.find(".icon-add").show();
            child.find(".icon-subtract").hide();
        });
        child.children('.icon-add').click(function(e) {
            e.preventDefault();
            $('.catelogies-bar li').children(".cate-sub").hide();
            $('.catelogies-bar li').children(".icon-add").show();
            $('.catelogies-bar li').children(".icon-subtract").hide();
            //show menu item
            child.find(".cate-sub").show();
            child.find(".icon-add").hide();
            child.find(".icon-subtract").show();
        });
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
