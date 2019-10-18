//1、set footer copyright end_year
$(function(){
	var year = new Date().getFullYear();
	var yearArea = $("#latest_year");
	yearArea.text(year);
});

//2、鼠标滑过微信图标
$(function () {
	
	$(".nav_a1").click(function(){
        $(this).css('background','#ed8d6e').siblings().css('background','none');
    });
    
    
    
  $('#getyzm').click(function () {
    var Myphone = $('#tel').val();
    if (Myphone == '') { //验证手机号是否为空
        alert('请填写手机号');
        return false;
    }
    var reg = /^0?1[3456789]\d{9}$/; //手机号正则
    if (!reg.test(Myphone)) { //验证手机号是否正确
        alert('请填写正确的手机号!');
        return false;
    }
//  $('#getbkdq').val('60s后重新获取');
    $('#getyzm').hide();
    $('#daojishi').show();
    $.getJSON("http://www.jinrongren.net/index.php?m=formguide&c=index&a=formyzm&formid=2402&siteid=1" +
        "&mobile=" + Myphone + "&callback=?",
        function (json) {
            if (json.status == 1) {
                alert('正在发送验证码');
                //倒计时
                runcountc(120);
            } else if (json.status == 2) {
                $('#getyzm').val('点击获取');
                return false;
            }
        })
});
// 获取验证码改变
function runcountc(t) {
    if (t > 0) {
    	
        document.getElementById('daojishi').innerHTML = t + 'S' + '后重新获取';
        t--;
        setTimeout(function () {
            runcountc(t)
        }, 1000)
    }else{
		 $('#getyzm').show();
		 $('#daojishi').hide();
		 }
}
	
	
	
function tab(aa,bb,cc){
	 $(aa).click(function(){
	var tli = $(aa).index(this);
	$(this).addClass(bb).siblings().removeClass(bb);
	$(cc).fadeOut(10);
	$(cc).eq(tli).fadeIn(100);
})
}
tab('.sec3_ul1>li',"active",'.sec3_ol1>li')

 $(document).scroll(function(){
                //获取滚动条滚动的距离
                var scrollH=$(document).scrollTop();
                console.log(scrollH)
                if(scrollH >2700){
                	$('.ani1').css('animation','ani1 2s ease-in-out forwards');
                	$('.ani2').css('animation','ani1 2s 0.5s ease-in-out forwards');
                	$('.ani3').css('animation','ani2 2s 1s ease-in-out forwards');
                	$('.ani4').css('animation','ani2 2s 1.5s ease-in-out forwards');
                }
            })
	
});

