$(function() {
	$("img").imgLoad({
		time: 10000000, //设置足够大 须等待图片载入完成，但是404的时候就杯具了...  
		callback: function() {
			$('.lodingBox').hide();
			$('.page-load').css({
				'opacity': 1
			})
		}
	});
	$(window).on("load", function() {
		var hash = location.hash;
		switch (hash) {
			case '#page1':
				$('.section1').addClass('active');
				break;
			case '#page2':
				$('.section2').addClass('active');
				break;
		}
		$(".nav-li").on("click", function() {
			$(this).addClass("activeli").siblings().removeClass("activeli");
		});

//		$("#fullPage").fullpage({
//			menu: true,
//			scrollOverflow: true,
//			verticalCenter: false,
//			anchors: ['page1', 'page2'],
//			autoScrollling:true,
//			afterLoad: function(link, index) {
//				console.log(link);
//				console.log(index);
//				switch (index) {
//					case 1:
//						$(".nav-li").eq(0).addClass("activeli").siblings().removeClass("activeli");		
//						break;
//					case 2:
//						$(".nav-li").eq(1).addClass("activeli").siblings().removeClass("activeli");
//						$(".line-box").addClass("show-line-box");
//						$(".line").addClass("show-line");
//						$(".contact-block").addClass("show-contact-block");
//						break;
//				}
//			},
//			onLeave: function(link, index) {
//				console.log(link);
//				console.log(index);
//				switch (link) {
//					case 1:
//						$(".nav-li").removeClass("activeli");
//						break;
//					case 2:
//						$(".nav-li").removeClass("activeli");
//						break;
//				}
//			},
//		});


	})
});