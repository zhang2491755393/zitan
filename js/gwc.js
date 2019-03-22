$(".jrgwc").click(function () {
    var flag = false;
    $(".guigeUL li").each(function () {
        if ($(this).attr("type") == 1) {
            flag = true;
        }
    });
    if (flag) {
        $(".tip").html("");
        var num = $("#num").html();
        //带用户id和商品id到购物车
        if (getCookie("username")) {//判断用户是否登录，登录跳到购物车页面结算，未登录弹出登录框,
            //跳到购物车页面
            var userid = getCookie("userid");
            var username = getCookie("username");
            $.ajax({
                type: "get",
                url: "../php/guowuche.php",
                data: {
                    goodsguige: guige,
                    goodsnum: num,
                    userid: userid,
                    goodsid: id,
                },
                dataType: "json",
                success: function (obj) {
                    if (obj["code"] == 1) {
                        $(".tip").html("加入成功");
                    } else {
                        $(".tip").html(obj["msg"]);
                    }
                }
            });
        } else {
            $("#login").show();
        }
    } else {
        // alert("还未选择商品规格");
        $(".tip").html("");
        var p = `<p>还未选择商品规格</p>`;
        $(".tip").append(p);
    }
});
$(".gwc").click(function () {
    $(".tip").html("");
    var num = $("#num").html();
    var id = getCookie("userid");
    //带用户id和商品id到购物车
    if (getCookie("username")) {//判断用户是否登录，登录跳到购物车页面结算，未登录弹出登录框,
        //跳到购物车页面
        window.location.href = `shoppingcar.html?id=${id}`;
    } else {
        $("#login").show();
    }
})