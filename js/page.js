function Page(ele, json) {
    this.target = document.querySelector(ele); //找到目标元素
    this.pageIndex = 1; //默认显示第一页
    this.option = {
        count: 100, //数据总数
        shownum: 5, //每页显示五条数据
        showpage: 7, //连续出现的页码数
        next: "下一页",
        prev: "上一页",
        callBack: function (pageIndex) {

        }
    }
    this.extend(json);
    this.create(); //搭建结构
    this.bindData(); //填充数据

}
Page.prototype.extend = function (json) {
    Object.assign(this.option, json); //用 用户数据 替代 默认数据
}
Page.prototype.bindEvent = function () {
    var that = this;
    this.nextBtn.className = "";
    this.nextBtn.onclick = function () {
        that.pageIndex++;
        that.bindData();
    }
    this.prevBtn.className = "";
    this.prevBtn.onclick = function () {
        that.pageIndex--;
        that.bindData();
    }
    if (this.option["callBack"]) {
        this.option["callBack"](this.pageIndex);
    }

}

Page.prototype.bindData = function () {
    var that = this;
    //将页码放到 content中
    var start = 1;
    var end = this.option["showpage"];

    var maxPageIndex = Math.ceil(this.option["count"] / this.option["shownum"]); //计算总页码数
    var middleNum = Math.floor(this.option["showpage"] / 2); //(7/2  3)


    end = maxPageIndex > this.option["showpage"] ? this.option["showpage"] : maxPageIndex;
    //(100 /5  20  >7 ?7:)
    //前面页码

    if (this.pageIndex > middleNum) { //中间页码
        start = this.pageIndex - middleNum;
        end = this.pageIndex + middleNum;
    }
    if (this.pageIndex > (maxPageIndex - middleNum)) { // 20-3 结束页码
        start = maxPageIndex - this.option["showpage"] + 1; //20-7+1
        end = maxPageIndex;
    }
    start = start < 1 ? 1 : start;
    this.content.innerHTML = ""; //清空
    for (var i = start; i <= end; i++) {
        var li = document.createElement("li");
        li.innerHTML = i;
        if (i == this.pageIndex) {
            li.className = "selected";
        }
        this.content.appendChild(li);

        li.onclick = function () {
            that.pageIndex = this.innerHTML * 1;
            that.bindData();
        }
    }
    this.bindEvent(); //事件的绑定
    //移除绑定的条件
    if (this.pageIndex == 1) {
        this.prevBtn.onclick = null;
        this.prevBtn.className = "disabled";
    }

    if (this.pageIndex == maxPageIndex) {
        this.nextBtn.onclick = null;
        this.nextBtn.className = "disabled";
    }

}
Page.prototype.create = function () {
    this.target.className = "page";
    this.target.innerHTML = "";
    
    this.prevBtn = document.createElement("span");
    this.prevBtn.innerHTML = this.option["prev"];
    this.prevBtn.className = "page-prev";
    this.target.appendChild(this.prevBtn);

    this.content = document.createElement("ul");
    this.content.className = "page-content";
    this.target.appendChild(this.content);

    this.nextBtn = document.createElement("span");
    this.nextBtn.className = "page-next";
    this.nextBtn.innerHTML = this.option["next"];
    this.target.appendChild(this.nextBtn);

}