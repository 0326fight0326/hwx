window.onload = function () {
    let gz = document.querySelector('.gz')
    let gz8 = document.querySelector('.gz8')
    let gz9 = document.querySelector('.gz9')
    let ment1 = document.querySelector('.z09')
    let ment2 = document.querySelector('.z15')
    let ment3 = document.querySelector('.z21')
    let ment4 = document.querySelector('.z25')
    let run = document.querySelector('.run')
    let drop = document.querySelector('.dropp')
    let ques1 = document.querySelector('.ques')
    let z35 = document.querySelector('.z35')
    let z01 = document.querySelector('.z01')
    let txt1 = document.querySelector('.txt1')
    let txt2 = document.querySelector('.txt2')
    let txt3 = document.querySelector('.txt3')
    let txt4 = document.querySelector('.txt4')
    let txt5 = document.querySelector('.txt5')
    let txt6 = document.querySelector('.txt6')
    let cada1 = document.querySelectorAll('.cada1')
    let z25 = document.querySelector('.z25')
    let brow1 = document.querySelectorAll('.brow1')
    let cada2 = document.querySelectorAll('.cada2')
    let brow2 = document.querySelectorAll('.brow2')
    let cada3 = document.querySelectorAll('.cada3')
    let brow3 = document.querySelectorAll('.brow3')
    let cada4 = document.querySelectorAll('.cada4')
    let iris1 = document.querySelector('.iris1')
    let iris2 = document.querySelector('.iris2')
    let iris3 = document.querySelector('.iris3')
    let iris4 = document.querySelector('.iris4')
    let box = document.querySelector('.box')
    let war = document.querySelector('.war')
    let logo = document.querySelector('.logo')
    let show = document.querySelector('.show')
    let left = document.querySelector('.star>.left')
    let center = document.querySelector('.star>.center')
    let right = document.querySelector('.star>.right')
    let flag = true;
    let arr = [];
    // 获取每一朵云
    let yun = [
        { m1: document.querySelector('.m1') },
        { m2: document.querySelector('.m2') },
        { m3: document.querySelector('.m3') },
        { m4: document.querySelector('.m4') }
    ]
    let topBg = document.querySelector('.top-bg')
    music1.play()
    //遍历每一朵云
    function yun1(a) {
        for (var i of yun) {
            for (var j in i)
                // console.log(i[j]);
                i[j].classList.add("animate__animated", a)
        }
    }
    yun1("animate__fadeIn")
    music4.playbackRate = 0.8
    left.addEventListener("animationend", function () {
        music3.pause();
        left.classList.remove("animate__animated", "animate__rotateInDownLeft")
        right.classList.remove("animate__animated", "animate__rotateInDownRight")
        center.classList.remove("animate__animated", "animate__fadeIn")
        left.classList.add("rote1")
        right.classList.add("rote2")
        center.classList.add("rote3")
    }, true)
    txt1.classList.add('animate__animated', 'animate__fadeIn')
    gz.addEventListener("animationend", function () {
        box.style.display = 'block'
        box.classList.add('animate__animated', 'animate__fadeIn')
    }, true)
    document.ontouchmove = function () {
        music1.pause();
        drop.style.display = 'block'
        ques1.style.display = 'none'
        txt1.style.display = 'none'
        txt2.style.display = 'block'
        txt2.classList.add('animate__animated', 'animate__fadeIn')
        z35.addEventListener("animationend", function () {
            move1(cada1);
            music2.play();
        })
        document.ontouchmove = null;
    }
    ment1.addEventListener("animationend", function () {
        txt1.style.display = 'none'
        music2.pause();
        iris1.style.display = 'block';
        iris1.onclick = function () {
            iris1.style.borderColor = 'transparent';
            if (flag == true) {
                flag = false
                if (arr.length >= 1) {
                    condition('1.5rem', '4rem', 1, txt4, txt3)
                    txt5.style.display = 'none'
                } else {
                    Executor1('gz gz1')
                    run.setAttribute('class', 'gz1')
                    // 第一段
                    gzmove(1, 5, 1500)
                    // 第二段
                    rode(11, 15, 6, 1500)
                    // 第三段
                    rode(1, 5, 13, 2610)
                    // 第四段
                    rode(11, 15, 8, 5168, 1)
                }
            }
        }
    }, true)
    ment2.addEventListener("animationend", function () {
        iris2.style.display = 'block';
        music2.pause();
        iris2.onclick = function () {
            iris2.style.borderColor = 'transparent';
            if (flag == true) {
                flag = false
                if (arr.length >= 2) {
                    condition('4rem', '6rem', 21, txt3, txt4)
                    txt3.style.display = 'none'
                } else {
                    Executor1('gz gz1 gz2')
                    iris1.style.pointerEvents = 'none'
                    gzmove(1, 5, 200)
                    gzwheel2(11, 15, 16, 11)

                }
            }
        }
    }, true)
    ment3.addEventListener("animationend", function () {
        iris3.style.display = 'block';
        music2.pause();
        iris3.onclick = function () {
            iris3.style.borderColor = 'transparent';
            if (flag == true) {
                flag = false
                if (arr.length >= 3) {
                    condition('5.5rem', '3.5rem', 31, txt4, txt5)
                    txt3.style.display = 'none'
                } else {
                    Executor1('gz gz1 gz2 gz3')
                    iris1.style.pointerEvents = 'none'
                    iris2.style.pointerEvents = 'none'
                    gzmove(21, 25, 1524)
                    setTimeout(gzwheel, 1324)
                    setTimeout(() => {
                        gzwheel1(21, 25, 8, 21, 0)
                    }, 2432)
                }
            }
        }
    }, true)
    ment4.addEventListener("animationend", function () {
        iris4.style.display = 'block';
        music2.pause();
        iris4.onclick = function () {
            iris4.style.borderColor = 'transparent';
            music4.play()
            if (flag == true) {
                flag = false
                gz8.style.display = 'none';
                gz.style.display = 'block';
                gz.className = ('gz gz1 gz2 gz3 gz4')
                var i = 31;
                var a = setInterval(() => {
                    if (i > 35) i = 31
                    run.setAttribute('src', '../image/gz' + i + '.png')
                    i++
                }, 200)
                setTimeout(() => {
                    clearInterval(a)
                }, 1827)
                setTimeout(() => {
                    gzwheel1(1, 5, 5, 21, 1)
                }, 1827)

            }
        }
    }, true)
    //楼梯升起
    function move1(cada1) {
        for (let i = 0; i < cada1.length; i++) {
            setTimeout(() => {
                cada1[i].style.display = 'block';
                cada1[i].classList.add('animate__animated', 'animate__bounceInUp')
            }, 300 * (i + 1))
        }
    }
    //跳动图标的柱子升起
    function rise1(brow1) {
        for (let i = 0; i < brow1.length; i++) {
            setTimeout(() => {
                brow1[i].style.display = 'block';
                brow1[i].classList.add('animate__animated', 'animate__bounceInUp')
            }, 200)
        }
    }
    //鸽子移动时不能点击
    function move4(cada, iris) {
        music2.play();
        for (let i = 0; i < cada.length; i++) {
            setTimeout(() => {
                cada[i].style.display = 'block';
                cada[i].classList.add('animate__animated', 'animate__bounceInUp')
                if (i == cada.length - 1) {
                    setTimeout(() => {
                        iris1.style.pointerEvents = 'auto'
                        iris.style.pointerEvents = 'auto'
                    }, 700)
                } else {
                    iris.style.pointerEvents = 'none'
                }
            }, 300 * (i + 1))
        }
    }
    //鸽子瞬移代码
    function condition(left, bottom, a, txt, txtw) {
        gz8.style.display = 'block'
        gz.style.display = 'none'
        gz8.style.left = left
        gz8.style.bottom = bottom
        gz9.setAttribute('src', '../image/gz' + a + '.png')
        txt.style.display = 'none'
        txtw.style.display = 'block'
        txtw.classList.add('animate__animated', 'animate__fadeIn')
        flag = true
    }

    function Executor1(className) {
        music4.play();
        gz8.style.display = 'none';
        gz.style.display = 'block';
        gz.className = className;
    }
    //鸽子移动动画定时器
    var sid;
    function gzmove(a, b, c) {
        var i = a;//2
        sid = setInterval(() => {
            if (i > b) i = a   //3  4
            run.setAttribute('src', '../image/gz' + i + '.png')
            i++
        }, 200)
        setTimeout(() => {
            clearInterval(sid)
        }, c)
    }
    //鸽子转向
    function gzwheel() {
        var i = 31   //6
        var num = 0
        clearInterval(sid)
        var b = setInterval(() => {
            if (i > 35) i = 31
            run.setAttribute('src', '../image/gz' + i + '.png')
            i++
            num++
            if (num == 6) clearInterval(b)
        }, 200)
    }
    var cid;
    //鸽子转向走路
    function gzwheel1(a, b, c, d, end) {
        // setTimeout(() => {
        var i = a
        var num = 0
        // clearInterval(sid)
        cid = setInterval(() => {
            if (i > b) i = a;
            run.setAttribute('src', '../image/gz' + i + '.png');
            i++;
            num++;
            if (num == c) {
                if (end == 0) {
                    console.log(end);
                    clearInterval(cid)
                    flag = true
                    run.setAttribute('src', '../image/gz' + d + '.png')
                    music4.pause();
                    rise1(brow3);
                    setTimeout(showw(cada4, iris2, 'none', 3, 'block', txt5), 1000)
                } else {
                    clearInterval(cid)
                    music4.pause()
                    run.setAttribute('src', '../image/gz' + d + '.png')
                    txt5.style.display = 'none'
                    txt6.style.display = 'block'
                    txt6.classList.add('animate__animated', 'animate__fadeIn')
                    setTimeout(() => {
                        war.classList.add('rose')
                        music3.play();
                    }, 1000)
                    setTimeout(() => {
                        txt3.style.display = 'none'
                        txt4.style.display = 'none'
                        txt5.style.display = 'none'
                        txt6.style.display = 'none'
                        drop.classList.add('down')
                        z01.classList.add('down')
                    }, 1500)
                    z25.classList.add('moveUp')
                    gz.classList.remove('gz1', 'gz2', 'gz3', 'gz4', 'animate__animated', 'animate__fadeIn')
                    gz.classList.add('moveUp1')
                    logo.style.display = 'none'
                    txt6.classList.add("animate__animated", "animate__fadeOut")
                    topBg.classList.add("animate__animated", "animate__fadeOut")
                    yun1("animate__fadeOut")
                    setTimeout(() => {
                        show.style.display = 'block'
                        left.classList.add("animate__animated", "animate__rotateInDownLeft")
                        right.classList.add("animate__animated", "animate__rotateInDownRight")
                        center.classList.add("animate__animated", "animate__fadeIn")
                    }, 4500)
                }
            }

        }, 200)
        // }, 2432)
    }
    //
    function gzwheel2(a, b, c, d) {
        setTimeout(() => {
            var i = a
            var num = 0
            clearInterval(sid)
            cid = setInterval(() => {
                if (i > b) i = a;
                run.setAttribute('src', '../image/gz' + i + '.png');
                i++;
                num++;
                if (num == c) {
                    clearInterval(cid)
                    flag = true
                    run.setAttribute('src', '../image/gz' + d + '.png')
                    music4.pause();
                    rise1(brow2);
                    setTimeout(showw(cada3, iris1, 'block', 2, 'none', txt4), 1000)
                }
            }, 200)
        }, 616)
    }
    //点击其他按钮文字隐藏与显现
    function showw(cada, iris, block, a, txts, txt) {
        move4(cada, iris)
        txt3.style.display = 'none'
        txt4.style.display = block
        arr.push(a)
        txt5.style.display = txts
        txt.classList.add('animate__animated', 'animate__fadeIn')
    }
    //鸽子走路动画
    function rode(a, v, x, y, z) {
        setTimeout(() => {
            var i = a
            var num = 0
            var b = setInterval(() => {
                if (i > v) i = a
                run.setAttribute('src', '../image/gz' + i + '.png')
                i++
                num++
                if (num == x) {
                    clearInterval(b)
                    if (z == 1) {
                        flag = true;
                        music4.pause();
                        rise1(brow1)
                        setTimeout(() => {
                            move1(cada2)
                            arr.push(1)
                            txt2.style.display = 'none'
                            txt3.style.display = 'block'
                            txt3.classList.add('animate__animated', 'animate__fadeIn')
                        }, 1000)
                    }
                }
            }, 200)
        }, y)
    }
}