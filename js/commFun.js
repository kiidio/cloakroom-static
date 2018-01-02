/*
  *系统里的通用方法*
  1. 通用alert弹框
*/
function CustomAlert(mess) {
	// mess-- 提示的信息
	var el = $('<div class="popLayer alert-pop"><div class="alert-cnt"><div class="alert-close"></div><div class="alert-content-wrap"><div class="alert-content"><p>' + mess + '</p></div></div></div></div>');
	$('body').append(el);
}

$(function () {
	// 通用 alert弹框关闭事件
	$('body').on('click','.alert-cnt .alert-close',function(){
	    $('.alert-pop').remove();
	})
})