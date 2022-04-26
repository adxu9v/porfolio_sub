$(document).ready(function(){
    $('#mouse_wheel').animate({'top':'12px','opacity':'0'},500)
    $('#mouse_wheel').animate({'top':'5px','opacity':'1'},0)
    $('#main>h1').animate({'top':'-50px','opacity':'1'})
    $('#main>p').delay(100).animate({'top':'70px','opacity':'1'})
    $('#menu_popup_menu>li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown()
    })
    $('#menu_popup_menu>li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp()
    })
    setInterval(function(){
        $('#mouse_wheel').animate({'top':'12px','opacity':'0'},500)
        $('#mouse_wheel').animate({'top':'5px','opacity':'1'},0)
    },600)
    $('#close_btn').click(function(){
        $('#menu_popup').fadeOut()
    })
    $('#mobile_menu').click(function(){
        $('#menu_popup').fadeIn()
    })
    let main_work_age = 0;
    let pc_mobile_age = 0;
    let pc_work_age = 0;
    let about_me1_age = 0;
    let about_me2_age = 0;
    $(window).scroll(function(){
        sc = $(window).scrollTop()
        if(sc >= $('#main_work').offset().top-50){
            $('header').css({'position':'fixed','z-index':'999999','top':'0'})
            $('#close_btn').css({'margin-top':'70px'})
        }
        else{
            $('header').css({'position':'static'})
            $('#close_btn').css({'margin-top':'10px'})
        }
        if(sc >= $('#main_work').offset().top-500){
            main_work_age = main_work_age +1
            if(main_work_age == 1){
                $('.main_work_oculus_logo').animate({'margin-top':'0px','opacity':'1'},500)
                $('#main_work_title>h3').animate({'marginTop':'40px','opacity':'1'},500);
                $('#main_work_title>p').delay(150).animate({'marginTop':'50px','opacity':'1'},500);$('#main_work_img').delay(300).animate({'marginTop':'70px','opacity':'1'},500);
            }

        }
        if(sc >= $('#pc_mobile').offset().top-300){
            pc_mobile_age = pc_mobile_age + 1
            if(pc_mobile_age == 1){
                $('#pc_mobile>h3').animate({'marginTop':'0','opacity':'1'},500)
            $('#pc_mobile>p').delay(150).animate({'marginTop':'20px','opacity':'1'},300)
            $('#pc_mobile>ul').delay(300).animate({'marginTop':'50px','opacity':'1'},300)
            }
        }
        if(sc >= $('#pc_work').offset().top-300){
            pc_work_age = pc_work_age + 1
            if(pc_work_age == 1){
                $('#pc_work>h3').animate({'marginTop':'0','opacity':'1'},500)
            $('#pc_work>p').delay(150).animate({'marginTop':'20px','opacity':'1'},300)
            $('#pc_work>ul').delay(300).animate({'marginTop':'50px','opacity':'1'},300)
            }
        }
        if(sc >= $('#about_me').offset().top-300){
            about_me1_age = about_me1_age + 1;
            if(about_me1_age == 1){
                $('#about_me>h3').animate({'marginTop':'0','opacity':'1'},500)
            $('#about_me_img').delay(150).animate({'marginTop':'20px','opacity':'1'},300)
            }
        }
        if(sc >= $('#about_me').offset().top-100){
            about_me2_age = about_me2_age + 1;
            if(about_me2_age == 1){
                $('#skill>ul>li:nth-child(1)>.skills_bg>.skills_box').animate({'width':'80%'},300)
            $('#skill>ul>li:nth-child(2)>.skills_bg>.skills_box').delay(100).animate({'width':'70%'},300)
            $('#skill>ul>li:nth-child(3)>.skills_bg>.skills_box').delay(200).animate({'width':'80%'},300)
            $('#skill>ul>li:nth-child(4)>.skills_bg>.skills_box').delay(300).animate({'width':'70%'},300)
            }
        }
    })
    let main_sc = $('#main_work').offset().top
    let responsive_sc = $('#pc_mobile').offset().top
    let pc_work_sc = $('#pc_work').offset().top
    let about_me_sc = $('#about_me').offset().top
    $('.menu_home').click(function(){
        $('body,html').animate({'scrollTop':'0'})
    })
    $('.menu_main').click(function(){
        $('body,html').animate({'scrollTop':main_sc})
    })
    $('.menu_responsive').click(function(){
        $('body,html').animate({'scrollTop':responsive_sc})
    })
    $('.menu_pc').click(function(){
        $('body,html').animate({'scrollTop':pc_work_sc})
    })
    $('.menu_about').click(function(){
        $('body,html').animate({'scrollTop':about_me_sc})
    })
});