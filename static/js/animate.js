$(function() {
    var heroArr = [{
            'name': '墨子',
            'type': '胜率'
        },
        {
            'name': '黄武蝶',
            'type': '出场'
        },
        {
            'name': '姜维',
            'type': 'MVP'
        },
        {
            'name': '张郃',
            'type': '击杀'
        },
        {
            'name': '董卓',
            'type': '助攻'
        },
        {
            'name': '黄武蝶',
            'type': '金钱'
        }, {
            'name': '吕布',
            'type': '金钱'
        }
    ];
    var videoArr = [{
        'imgUrl': './static/images/video1.jpg',
        'content': '「2017MPL」夏季赛 全新logo演绎视频'
    }, {
        'imgUrl': './static/images/video2.jpg',
        'content': '「神秘然解说」孙子兵法 看懂曹洪的优劣势'
    }, {
        'imgUrl': './static/images/video3.jpg',
        'content': '「江哥解说」希望 vs 阿青 逆天翻盘 进击的阿青！'
    }, {
        'imgUrl': './static/images/video4.jpg',
        'content': '「主播疯油经」Vol.1 元旦特供！梦三主播疯游成精！'
    }, {
        'imgUrl': './static/images/video5.jpg',
        'content': '「微播三国」Vol.29 揭露英雄为何不能装X？真相原来竟是如此！'
    }, {
        'imgUrl': './static/images/video6.jpg',
        'content': '5月16日 全新英雄 修罗鬼童 — 水镜先生'
    }]
    for (let i = 0; i < heroArr.length; i++) {
        $('.dark').eq(i).append('<div><p>' + heroArr[i].type + '</p><p>NO.1</p></div>');
        $('.dark').eq(i).append('<div><p>' + heroArr[i].name + '</p><p>' + heroArr[i].type + 'NO.1</p></div>');
        $('.dark div:nth-child(2)').css({
            'font-size': '18px',
            'position': 'absolute',
            'right': '0',
            'bottom': '0',
        });
        $('.dark div:nth-child(1)').css({
            'font-size': '18px',
            'position': 'absolute',
            'left': '0',
            'bottom': '0'
        })
    }
    for (let i = 0; i < 4; i++) {
        $('.videoContent li').eq(i).append('<div></div><p>' + videoArr[0].content + '</p>');
        $('.videoContent li div').css({
            'background': 'url(' + videoArr[0].imgUrl + ')',
            'width': '190px',
            'height': '108px',
            'margin': '25px auto 10px auto'
        });
        $('.videoContent li p').css({
            'display': 'block',
            'color': '#646464',
            'font-size': '12px',
            'width': '190px',
            'margin': '0 auto'
        })
    }
    $('.eyes ul li').hover(function() {
            var index = $(this).index();
            $(this).stop().animate({
                'background-position-x': '-100px',
            });
            $('.dot').eq(index).stop().animate({
                'left': '180px'
            })
        },
        function() {
            var index = $(this).index();
            $(this).stop().animate({
                'background-position-x': '0',
            });
            $('.dot').eq(index).stop().animate({
                'left': '10px'
            })
        });
    // 英雄胜率
    $('.heroWeek ul li').hover(function() {
        var index = $(this).index();
        //手风琴animate
        $(this).stop().animate({
            "width": "212px",
            'background-position-x': '0'
        }).siblings().stop().animate({
            "width": "108px",
            'background-position-x': '-80px'
        });
        //黑色虚化animate
        $('.dark').eq(index).stop().animate({
            "height": "60px"
        }).parent().siblings().children('.dark').stop().animate({
            "height": "267px"
        });
        $('.dark').eq(index).children('div:nth-child(1)').stop().animate({
            'left': '-140px'
        });
        $('.dark').eq(index).children('div:nth-child(2)').stop().animate({
            'left': '0'
        })
    }, function() {
        var index = $(this).index();
        $('.dark').eq(index).children('div:nth-child(1)').stop().animate({
            'left': '0'
        });
        $('.dark').eq(index).children('div:nth-child(2)').stop().animate({
            'left': '250px'
        });
    });
    //视频中心tab切换
    $('.videoNav li:eq(0),.kongfuNav li:eq(0)').css({
        'background': '#fff',
        'color': '00A39A',
        'border-top': '6px solid #00A39A'
    });
    $('.videoNav li').hover(function() {
        var index = $(this).index();
        $(this).css({
            'background': '#fff',
            'color': '00A39A',
            'border-top': '6px solid #00A39A'
        }).siblings().css({
            'background': '#F0F0F0',
            'color': 'black',
            'border-top': '6px solid #D7D7D7'
        });
        $(this).parent().next().find('div').css({
            'background': 'url(' + videoArr[index].imgUrl + ')'
        });
        $(this).parent().next().find('p').text(videoArr[index].content)
    });
    // kongfu TAB切换
    $('.kongfuNav li').mouseover(function() {
            var index = $(this).index();
            $(this).css({
                'background': '#fff',
                'color': '00A39A',
                'border-top': '6px solid #00A39A'
            }).siblings().css({
                'background': '#F0F0F0',
                'color': 'black',
                'border-top': '6px solid #D7D7D7'
            });
            $('.kongfuContent').eq(index).show().siblings('.kongfuContent').hide();
        })
        // banner
    var dotindex = 0;
    $('.bannerDot li').eq(dotindex).css({
        'width': '30px',
        'background': '#CD2D1D',
        'border-radius': '10px'
    });
    $('.bannerDot li').mouseover(function() {
        var index = $(this).index();
        dotindex = index;
        $(this).css({
            'width': '30px',
            'background': '#CD2D1D',
            'border-radius': '10px'
        }).siblings().css({
            'width': '10px',
            'background': '#666',
            'border-radius': '50%'
        });
        $('.banner ul').eq(0).stop().animate({
            'left': -index * 424
        })
    })
    var clone = $('.banner>ul li').first().clone();
    $('.banner>ul').eq(0).append(clone);
    var t = setInterval(function() {
        dotindex++;
        move();
    }, 2000);

    function move() {
        if (dotindex == 6) {
            $('.banner>ul').eq(0).css({
                'left': '0'
            })
            dotindex = 1;
        }
        $('.banner>ul').eq(0).stop().animate({
            'left': -dotindex * 424
        });
        if (dotindex == 5) {
            $('.bannerDot li').eq(0).css({
                'width': '30px',
                'background': '#CD2D1D',
                'border-radius': '10px'
            }).siblings().css({
                'width': '10px',
                'background': '#666',
                'border-radius': '50%'
            })
        } else {
            $('.bannerDot li').eq(dotindex).css({
                'width': '30px',
                'background': '#CD2D1D',
                'border-radius': '10px'
            }).siblings().css({
                'width': '10px',
                'background': '#666',
                'border-radius': '50%'
            })
        }
    }

    $('.banner').hover(function() {
        clearInterval(t);
        console.log(dotindex);
    }, function() {
        t = setInterval(function() {
            dotindex++;
            move();
        }, 2000)
    })
})