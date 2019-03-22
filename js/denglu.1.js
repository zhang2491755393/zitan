$("#enroll").click(function () {
    $(".shuzbox").html("");
    var html = ""
    for (var i = 0; i < 4; i++) {
        var q = suiji()[i];
        let ii = $('<i></i>');
        $(ii).html(q);
        html += q;
        $(".shuzbox").append(ii);
    }
    $("#enrollbox").fadeIn("slow");
    // $("#yidenglu").mouseenter(function(){
    // });
    $(document).on("click", "#yidenglu", function () {
        $(".du").show(200);

    });
    //点x消失
    $(".x").click(function () {
        $("#enrollbox").fadeOut("slow");
        $("#userId1").val("");
        $("#userpwd1").val("");
        $("#userpwd2").val("");
        $("#yzminp").val("");
        $(".wrongBox3").html("");
        $("#wrongBoxz").html("").fadeOut("slow");
    })
    $("#lijilogin1").click(function () {
        var username = $("#userId1").val();
        var userpwd = $("#userpwd1").val();
        var userpwd2 = $("#userpwd2").val();
        var yzm = $("#yzminp").val();
        var usertelReg = /^1[35678][0-9]{9}$/g;
        var useremailReg = /^[1-9a-z][0-9a-z]{4,}@[0-9a-z]{2,10}\.(com|cn)/;
        var userpwdReg = /^[a-z0-9]{8,16}$/ig;
        var usernameReg = /^[a-z_$][0-9a-z_$]{5,16}$/ig;
        if (usertelReg.test(username) || useremailReg.test(username) || usernameReg.test(username)) {
            $.ajax({
                type: "get",
                data: {
                    username: username
                },
                url: "../php/shoujihaocunzi.php",
                dataType: "json",
                success: function (obj) {
                    if (obj[0]["code"] == 0) {//用户名存在
                        $("#wrongBoxz").html(obj[0]["msg"]).fadeIn(200);
                    } else {//用户名不存在可以注册 判断密码
                        if (userpwdReg.test(userpwd)) {//密码对了判断两次密码输入是否一致
                            if (userpwd2 == userpwd) {//密码一致 判断验证码
                                if (yzm.toUpperCase() == html.toUpperCase()) {//验证码一致注册成功 转到index
                                    $.ajax({
                                        type: "get",
                                        url: "../php/zhuce.php",
                                        data: {
                                            username: username,
                                            userpwd: userpwd
                                        },
                                        dataType: "json",
                                        success: function (obj) {
                                            if (obj[0]["code"] == 1) {
                                                //转到登录页面
                                                $("#enrollbox").fadeOut(200);
                                                $("#enroll a").html("把信仰带在身上");
                                                $("#enroll a").css({ "color": "rgb(201, 187, 146)" });
                                                $("#landing").hide();
                                                $("#name").html(username);
                                                $("#yidenglu").show();
                                            }
                                        }

                                    });
                                } else {
                                    $(".wrongBox3").html("验证码不匹配").fadeIn(200);
                                }
                                $(".wrongBox2").html("").fadeOut(200);
                            } else {
                                $(".wrongBox2").html("两次密码不匹配").fadeIn(200);
                            }
                        } else {
                            $(".wrongBox1p").html("请输入6~40个字符").fadeIn(200);
                        }
                    }
                }
            });
        } else {
            $("#wrongBoxz").html("请输入6~40个字符").fadeIn(200);
        }
    })
});
//出现注册提示信息
$("#userId1").focus(function () {
    $("#enro1").fadeIn("slow")
});
$("#userpwd1").focus(function () {
    $("#enro2").fadeIn("slow")
});
$("#userpwd2").focus(function () {
    $("#enro3").fadeIn("slow")
});
$("#yzminp").focus(function () {
    $("#enro4").fadeIn("slow")
})
$("#userId1").blur(function () {
    $("#enro1").fadeOut("slow")
});
$("#userpwd1").blur(function () {
    $("#enro2").fadeOut("slow")
});
$("#userpwd2").blur(function () {
    $("#enro3").fadeOut("slow")
});
$("#yzminp").blur(function () {
    $("#enro4").fadeOut("slow")
})
// 随机数 
$("#shuzbox").click(function () {
    $(".shuzbox").html("");
    for (var i = 0; i < 4; i++) {
        var q = suiji()[i];
        let ii = $('<i></i>');
        $(ii).html(q);
        $(".shuzbox").append(ii);
    }
})
function suiji() {
    var upperCodeList = []; //往该集合中放大写
    var lowerCodeList = []; //小写的集合
    var numList = []; //数字的集合
    for (var i = 65; i < (65 + 26); i++) { //这就是大写的字符编码范围
        var char = String.fromCharCode(i);
        var char2 = String.fromCharCode(i + 32); //利用大小写的编码相差32
        upperCodeList.push(char);
        lowerCodeList.push(char2);
    }
    for (var i = 0; i <= 9; i++) {
        numList.push(String(i));
    }
    var bigList = upperCodeList.concat(lowerCodeList, numList);
    var b = [];
    for (var j = 0; j < 4; j++) {
        var a = Math.round(Math.random() * 61);
        b.push(bigList[a]);
    }
    return b;
}


// <!-- //点击登录出现登录页面 -->
$("#landing").click(function () {
    $("#login").fadeIn("slow");
});
// 点x消失
$(".x").click(function () {
    $("#login").fadeOut("slow");
});
//获取框值
$("#lijilogin").click(function () {
    var useridInp = $("#userId").val().length;
    var userpwdInp = $("#userpwd").val().length;
    if (useridInp && userpwdInp >= 6) {//长度小于6则不能进行登录
        var userid = $("#userId").val();
        var userpwd = $("#userpwd").val();
        $.ajax({
            type: "get",
            url: "../php/denglu.php",
            data: {
                username: userid,
                userpwd: userpwd
            },
            dataType: "json",
            success: function (obj) {
                if (obj[0]["code"] == 1) {
                    // $(".tipxx").html(obj[0]["msg"]);
                    $("#login").fadeOut(200);
                    $("#enroll a").html("把信仰带在身上");
                    $("#enroll a").css({ "color": "rgb(201, 187, 146)" });
                    $("#landing").hide();
                    $("#name").html(userid);
                    $("#yidenglu").show();
                    if ($("#jizhuinp").prop("checked")) {
                        setCookie("username", userid, 7);
                    } else {
                        setCookie("username", userid,);
                    }

                } else {
                    $(".tipxx").html(obj[0]["msg"]);
                }
            }
        });
        $(".wrongBox").fadeOut("slow");
        $(".wrongBox1").fadeOut("slow");
    } else {
        $(".wrongBox").fadeIn("slow");
        $(".wrongBox1").fadeIn("slow");
    }
});
//点框出现提示信息，消失提示信息
$("#userId").focus(function () {
    $("#tip1").fadeIn("slow")
});
$("#userId").blur(function () {
    $("#tip1").fadeOut("slow")
});
$("#userpwd").focus(function () {
    $("#tip2").fadeIn("slow")
});
$("#userpwd").blur(function () {
    $("#tip2").fadeOut("slow")
});