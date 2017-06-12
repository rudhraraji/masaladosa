$(document).ready(function(){
	var winWidth = $(window).width();
var winHeight = $(window).height();

	
     
	$(window).scroll(function(){
		
		var top = $("body").scrollTop()||$("html").scrollTop();
		
		if(top > 50){
			$(".menu-mask").addClass("current02");
			$(".upStream").addClass("active01");
			
			}
			else{
				$(".menu-mask").removeClass("current02");
				$(".upStream").removeClass("active01");
				}
				 if(winWidth <=767){
			$(".menu-mask").removeClass("current02");
			$(".upStream").removeClass("active01");
			}
			
		});
		
	$(".wholeErrorMask").click(function(){
						//alert("hello");
						//console.log("error");
						$(".wholeErrormask").css("display", "none");
					});
	var docHeight = $(".bg__foo").height();
	$("#one_half").height(winHeight);
	
	/* ****************** Query for Home page slide left and Right Effect ********************** */
	
	
	$("#half_one, .new_york").hover(function(){
		$(".inner_mask").toggleClass("slideAnimation");
		$("li.half_one").toggleClass("orange");
	 });
	$("#half_two, .new_delhi").hover(function(){
		$(".inner_masktwo").toggleClass("slideAnimationtwo");
		$("li.half_two").toggleClass("orange");
	});
	//$(".loc li ").hover(function(){
		//var className = $(this).attr('class').split(' ')[0];
		//var classToId = "#"+className;
		//$(classToId+" .inner_mask").toggleClass("slideAnimation");
	//});
	
	/* ****************** Query for Image hover Description slideInUp Effect ********************** */
	$(".img_container").hover(function(){
		$(this).find(".desc").toggle(20);
		$(this).find(".plus").toggle(20);
		$(this).find(".desc").toggleClass("animated slideInUp");
		//$(this).find(".plus").toggleClass("animated slideInUp");		
	});
	$(".img_container_menu").hover(function(){
		//$(this).find(".desc").toggle(20);
		$(this).find(".plus").toggle(20);
		//$(this).find(".desc").toggleClass("animated test");
		//$(this).find(".plus").toggleClass("animated slideInUp");		
	});
	

	/* ****************** Query for Mask menu Open ********************** */
	
	$(".actBread").click(function(){
		$(".menuItem.left,.reserv-part").css("width","156px")
		
		if(winWidth<=767){
			$(".menuItem.left,.reserv-part").css("width","100%")
			$(".menuItem").addClass("active")
	           $(".pipe,.menu_toggle").hide();
	     $(".pipe,.menu_toggle").css("display","none");
	
		};
		$(window).scroll(function(){
		var top = $("body").scrollTop()||$("html").scrollTop();
		
		if(top > 50){
			$(".upStream").removeClass("active01");
			}
		});
		$(".menu_toggle,.pipe").hide();
		$(".upStream").removeClass("active01");
		$(".menu-mask").addClass("current");
		$(".menu-mask-inner").addClass("slideAnimationPositive");
		$(".menu-mask-inner").removeClass("slideAnimationNegative");
		//$(".menu-mask").css("width","100%");
		$("span.long").css("display","none");
		$("span.med").css("display","none");
		$("span.small").css("display","none");
		$(".close").addClass("slideAnimationtwoopacity");
		$(".reservation a").addClass("rgb128");
		//$(".navigation").toggle(900);
		$(".home").fadeIn(500);
		$(".reservation").css("bottom","20px");
		var w = $(".menu-mask-inner").width();
		 setTimeout( function(){
			$('ul.menuMask ').css('border-left','2px solid #fff');
			$('ul.menuMask').css('border-right','2px solid #fff');
       },2000);
	   if(winWidth<=767){
		   
		    setTimeout( function(){
			$('ul.menuMask ').css('border-left','none');
			$('ul.menuMask').css('border-right','none');
       },2000);
		   }
		  
	});
	if(winWidth <= 767){
		$(".actBread").click(function(){
		$(".reservation").css("bottom","0px");
		});
		$(".actBread").click(function(){
		$(".upStream").removeClass("active01");
		});
		$(".close").click(function(){
		$(".upStream").removeClass("active");
		});
		}
	
	/* ****************** Query for Mask menu Close ********************** */
	
	$(".close").click(function(){
		$(".menuItem.left,.reserv-part").css("width","300px")
		if(winWidth<=767){
			$(".menuItem").removeClass("active");
			$(".menuItem.left").css("width","100%");
		}
		
	
		$(window).scroll(function(){
		
		var top = $("body").scrollTop()||$("html").scrollTop();
		
		if(top > 50){
			$(".upStream").addClass("active");
			
			}
		});
		
		$(".menu_toggle,.pipe").show();
		$(".upStream").addClass("active01");
		$(".menu-mask").removeClass("current");
		$(".menu-mask-inner").addClass("slideAnimationNegative");
		$(".menu-mask-inner").removeClass("slideAnimationPositive");
		//$(".menu-mask").css("width","0px");
		$("span.long").css("display","block");
		$("span.med").css("display","block");
		$("span.small").css("display","block");
		$(".close").removeClass("slideAnimationtwoopacity");
		$(".reservation a").removeClass("rgb128");
		$(".home").fadeOut(500);
		$(".reservation").css("bottom","0px");
		//$(".navigation").toggle(900);
		setTimeout( function(){
			$('ul.menuMask ').css('border-left','0px solid #fff');
			$('ul.menuMask').css('border-right','0px solid #fff');
       },2);
	});
	
	/* ****************** Query for Reservation Hover ********************** */
	
	
	$('.reservation').mouseenter(function(event) {
	if(!$('body').hasClass('showMenu')){
		$(".reserv").addClass("display");
	}
	$('body').toggleClass('showMenu');
		$(".reserv").addClass("display");
		if(!$('body').hasClass('showMenu')){
            $('.reserv').removeClass("display");
        } 
    });
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
        $(".reservation").addClass("gray");
		$(".breadcrumb").addClass("gray");
		$(".breadcrumb").addClass("gray");
		$(".breadcrumb").addClass("gray");
		$(".close").addClass("gray");
		$(".pipe").addClass("gray");
		$(".scroll_up").fadeIn(150);
		} 
		else {
			$(".reservation").removeClass("gray");
			$(".breadcrumb").removeClass("gray");
			$(".breadcrumb").removeClass("gray");
			$(".breadcrumb").removeClass("gray");
			$(".close").removeClass("gray");
			$(".pipe").removeClass("gray");
			$(".scroll_up").fadeOut(50);
		}
		 if(winWidth <=767){
			$(".breadcrumb").removeClass("gray");
			}
	});
	
	/* ****************** Query for Animating from top to windows height ********************** */
	
	$(".mouseDown").on("click", function () {
		//$('html, body').animate({scrollTop:$("#mouseDown").offset().top - 120}, 1600);
		 if(winWidth <=767){
			$('html, body').animate({scrollTop:$("#mouseDown").offset().top -85}, 1600);
			}
			else{
				$('html, body').animate({scrollTop:$("#mouseDown").offset().top - 110}, 1600);
				}
	});
	$(".scroll_up").on("click", function () {
		$('html, body').animate({scrollTop: "0px"}, 1600);
	});
	/* ****************** Switch to redirect website from Delhi to NY ********************** */
	
	var xPos =0;var finalPos=0;
	var p = $( "#dragThis" );
	var pLength = p.length;
	if(pLength > 0){
	var offset = p.offset();
	var initPos=offset.left;
	//console.log(initPos);
	$('#dragThis').draggable(
		{
			containment: "parent",
			drag: function(event, ui) {
            var offset = $(this).offset();
				xPos = offset.left;
				var yPos = offset.top;
				var x=$('#posX').text('x: ' + xPos);
				$('#posY').text('y: ' + yPos);
				finalPos = xPos - initPos;
				if(finalPos == -20.5 || finalPos == -19.5 || finalPos == -19 || finalPos == -20 || finalPos ==-22 ){
					window.location="http://indianaccent.com/newyork/index.html";
				}
				if(finalPos < -0.5){
					
				}
				console.log(finalPos);
			}
		
    });	
	}
	var xPosl =0;var finalPosl=0;
	var pl = $( "#dragTh" );
	var pLengthl = pl.length;
	if(pLengthl > 0){
	var offsetl = pl.offset();
	var initPosl=offsetl.left;
	//console.log(initPos);
	$('#dragTh').draggable(
		{
			containment: "parent",
			drag: function(event, ui) {
            var offsetl = $(this).offset();
				xPosl = offsetl.left;
				var yPosl = offsetl.top;
				var xl=$('#posX').text('x: ' + xPosl);
				$('#posY').text('y: ' + yPosl);
				finalPosl = xPosl - initPosl;
				if(finalPosl > 18 ){
					
					window.location="http://indianaccent.com/newyork/index.html";
				}
				if(finalPosl < -0.5){
					window.location="http://indianaccent.com/newyork/index.html";
				}
				console.log(finalPosl);
			}
		
    });	
	}
	
	/* ****************** Reservation Form (Query for reservation type) ********************** */
	
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
	var pair = vars[i].split("=");
	
	if(pair[1] == "lunch"){
		$('select.reservationType option[value=lunch]').attr('selected','selected');
		//alert(pair[1]);					
	}
	if(pair[1] == "dinner"){
		//alert("pvt");
		$('select.reservationType option[value=dinner]').attr('selected','selected');
							
	}
	if(pair[1] == "chefs-table"){
		$('select.reservationType option[value=chefs-table]').attr('selected','selected');
	}
	if(pair[1] == "undefined" || pair[1] == ""){
		$('select.reservationType option[value=lunch]').attr('selected','selected');
	}
	 
	}
	
	/**************** Subscribe Form Validation *************************/
	$(".subscribeFormContainer form").submit(function(event){
		var subscribe = $( "input[name='subscribe']" ).val();
		if(subscribe == ""){
			alert("please enter email address");
			event.preventDefault();
		}
		if(subscribe != ""){
			var re = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			var is_email=re.test(subscribe);
			if(is_email){
				//input.removeClass("invalid");$(".error.invEmail").fadeOut();
			}
			else{
					alert("Please enter valid email address");
					event.preventDefault();
					//erro_free += 1;
				}
		}/* here we go */
	});
				   
	/* ****************** Form Validation Reservation ********************** */
	
	$(".form_conatiner form").submit(function(event){
		var error_free=0;
		var fullName = $("#fullName").val();
		var date = $("#date").val();
		var phoneNo = $("#phoneNo").val();
		var emailAddress = $("#emailAddress").val();
		var reservationFor = $("#reservationFor").val();
		var creditCardNumber = $("#creditCardNumber").val();
		var month = $("#month").val();
		var year = $("#year").val();
		var creditcvv = $("#creditcvv").val();
		if(reservationFor > 7){
					if(month == "def"){
						$("#month").addClass("invalid");$(".error.month").fadeIn(300);
						event.preventDefault();
					}
					if(month !="def"){
						$("#month").removeClass("invalid");$(".error.month").fadeOut();
						
					}
					if(year == "def"){
						$("#year").addClass("invalid");$(".error.year").fadeIn(300);
						event.preventDefault();
					}
					if(year != "def")
					{
						$("#year").removeClass("invalid");$(".error.month").fadeOut();
					}
					if(creditcvv == ""){
						$("#creditcvv").addClass("invalid");$(".error.creditcvv").fadeIn(300);
						event.preventDefault();
					}
					if(creditCardNumber == ""){
						//alert("hello");
						$("#creditCardNumber").addClass("invalid");$(".error.creditCard").fadeIn(300);
						event.preventDefault();
					}
		}
		if(reservationFor == "def"){
			$("#reservationFor").addClass("invalid");$(".error.reservFor").fadeIn(300);
			event.preventDefault();
		}
		if(reservationFor != "def"){
			$("#reservationFor").removeClass("invalid");$(".error.reservFor").fadeOut(300);
		}
		if(fullName == ""){
			$("#fullName").addClass("invalid");$(".error.fullName").fadeIn(300);
			event.preventDefault();
		}
		if(emailAddress == ""){
			$("#emailAddress").addClass("invalid");$(".error.emailAddress").fadeIn(300);
			event.preventDefault();
		}	
		if(date == ""){
			$("#date").addClass("invalid");$(".error.date").fadeIn(300);
			event.preventDefault();
		}
		if(phoneNo == ""){
			$("#phoneNo").addClass("invalid");$(".error.phoneNo").fadeIn(300);
			event.preventDefault();
		}	
		$('#fullName').on('input', function() {
			var input=$(this);
			var is_name=input.val();
			if(is_name == ""){
				input.addClass("invalid");$(".error.fullName").fadeIn(300);
				event.preventDefault();
			}
			else{input.removeClass("invalid");$(".error.fullName").fadeOut();
			}
		});
		$('#phoneNo').on('input', function() {
			var input=$(this);
			var is_name=input.val();
			if(is_name == ""){
				input.addClass("invalid");$(".error.phoneNo").fadeIn(300);
				event.preventDefault();
			}
			if(is_name.length <10){
						input.addClass("invalid");$(".error.phoneNoSize").fadeIn(300);
						event.preventDefault();
					}
			if(is_name.length == 10){
						input.removeClass("invalid");$(".error.phoneNoSize").fadeOut();
					}
			if(is_name !=''){input.removeClass("invalid");$(".error.phoneNo").fadeOut();
				$("#phoneNo").on("keypress keyup blur",function (eventx) {    
					$(this).val($(this).val().replace(/[^\d].+/, ""));
					if ((eventx.which < 48 || eventx.which > 57)) {
							//input.addClass("invalid");$(".error.phoneNo").fadeIn(300);
							eventx.preventDefault();
							event.preventDefault();
					}
					
					
				});
								
			}
		});
		$('#date').on('input', function() {
			var input=$(this);
			var is_name=input.val();
			if(is_name == ""){
				input.addClass("invalid");$(".error.date").fadeIn(300);
				event.preventDefault();
			}
			else{input.removeClass("invalid");$(".error.date").fadeOut();
			}
		});
		//<!--Email must be an email -->
		$('#emailAddress').on('input', function() {
			var input=$(this);
			var re = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			var is_nameX=input.val();
			if(is_nameX == ""){
				input.addClass("invalid");$(".error.emailAddress").fadeIn(300);
				event.preventDefault();
			}
			else{input.removeClass("invalid");$(".error.emailAddress").fadeOut();
				var is_email=re.test(input.val());
				if(is_email){input.removeClass("invalid");$(".error.invEmail").fadeOut();
				}
				else{input.addClass("invalid");$(".error.emailAddress").fadeOut();
					$(".error.invEmail").fadeIn();
					event.preventDefault();
				}
			}
		});
		
		$("#reservationFor").change(function(){
			var value = $(this).find("option:selected").val();
			if(value > 7){
				
				
				
				$(".credit").fadeIn(300);
				$("textarea#comment").css("height","480px");
				var creditCardNumber = $("#creditCardNumber").val();
				var month = $("#month").val();
				var year = $("#year").val();
				var creditcvv = $("#creditcvv").val();
				
				$('#creditCardNumber').on('input', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == ""){
						input.addClass("invalid");$(".error.creditCard").fadeIn(300);
						event.preventDefault();
					}
					else{
						
						if(is_name.length < 16){
							input.addClass("invalid");$(".error.creditCard").fadeIn(300);
							event.preventDefault();
						}
						if(is_name.length > 16){
							input.addClass("invalid");$(".error.creditCard").fadeIn(300);
							event.preventDefault();
						}
						if(is_name.length==16){
							input.removeClass("invalid");$(".error.creditCard").fadeOut();
						}
						
					}
				});
				$('#creditcvv').on('input', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == ""){
						input.addClass("invalid");$(".error.creditcvv").fadeIn(300);
						event.preventDefault();
					}
					else{
						if(is_name.length < 3){
							input.addClass("invalid");$(".error.creditcvv").fadeIn(300);
							event.preventDefault();
						}
						if(is_name.length > 3){
							input.addClass("invalid");$(".error.creditcvv").fadeIn(300);
							event.preventDefault();
						}
						if(is_name.length==3){
							input.removeClass("invalid");$(".error.creditcvv").fadeOut();
						}
						
					}
					
				});
				
				$('#month').on('change', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == "def"){
						input.addClass("invalid");$(".error.month").fadeIn(300);
						event.preventDefault();
					}
					else{input.removeClass("invalid");$(".error.month").fadeOut();
					}
				});
				$('#year').on('change', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == "def"){
						input.addClass("invalid");$(".error.year").fadeIn(300);
						event.preventDefault();
					}
					else{input.removeClass("invalid");$(".error.year").fadeOut();
					}
				});
				
			}
			else {
				
				$(".credit").fadeOut(300);
				$("textarea#comment").css("height","280px");
			}
		});
		
	});/* form click event end */
		$("#reservationFor").change(function(){
			var value = $(this).find("option:selected").val();
			if(value =="def"){
				$("#reservationFor").addClass("invalid");$(".error.reservFor").fadeIn(300);
				$('#reservationFormSubmit').preventDefault();
			}
			if(value != "def"){
				$("#reservationFor").removeClass("invalid");$(".error.reservFor").fadeOut();
			}
			if(value > 7){
				
				$(".credit").fadeIn(300);
				$("textarea#comment").css("height","480px");
				var creditCardNumber = $("#creditCardNumber").val();
				var month = $("#month").val();
				var year = $("#year").val();
				var creditcvv = $("#creditcvv").val();
				
				$('#creditCardNumber').on('input', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == ""){
						input.addClass("invalid");$(".error.creditCard").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						//erro_free += 1;
					}
					else{
						
						if(is_name.length < 16){
							input.addClass("invalid");$(".error.creditCard").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						}
						if(is_name.length > 16){
							input.addClass("invalid");$(".error.creditCard").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						}
						if(is_name.length==16){
							input.removeClass("invalid");$(".error.creditCard").fadeOut();
						}
						
					}
				});
				$('#creditcvv').on('input', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == ""){
						input.addClass("invalid");$(".error.creditcvv").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						//erro_free += 1;
					}
					else{
						if(is_name.length < 3){
							input.addClass("invalid");$(".error.creditcvv").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						}
						if(is_name.length > 3){
							input.addClass("invalid");$(".error.creditcvv").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						}
						if(is_name.length==3){
							input.removeClass("invalid");$(".error.creditcvv").fadeOut();
						}
						
					}
				});
				
				$('#month').on('change', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == "def"){
						input.addClass("invalid");$(".error.month").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						//erro_free += 1;
					}
					else{input.removeClass("invalid");$(".error.month").fadeOut();
					}
				});
				$('#year').on('change', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name == "def"){
						input.addClass("invalid");$(".error.year").fadeIn(300);$('#reservationFormSubmit').preventDefault();
						//erro_free += 1;
					}
					else{input.removeClass("invalid");$(".error.year").fadeOut();
					}
				});
				
			}
			else {
				
				$(".credit").fadeOut(300);
				$("textarea#comment").css("height","280px");
			}
		});
	$('#fullName').on('input', function() {
			var input=$(this);
			var is_name=input.val();
			if(is_name == ""){
				input.addClass("invalid");$(".error.fullName").fadeIn(300);$('#reservationFormSubmit').preventDefault();
				//erro_free += 1;
			}
			else{input.removeClass("invalid");$(".error.fullName").fadeOut();
			}
		});
		$('#phoneNo').on('input', function() {
			var input=$(this);
			var is_name=input.val();
			if(is_name == ""){
				input.addClass("invalid");$(".error.phoneNo").fadeIn(300);
				//erro_free += 1;
			}
			if(is_name.length <10){
						input.addClass("invalid");$(".error.phoneNoSize").fadeIn(300);
					}
			if(is_name.length == 10){
						input.removeClass("invalid");$(".error.phoneNoSize").fadeOut();
					}
			if(is_name !=''){input.removeClass("invalid");$(".error.phoneNo").fadeOut();
				$("#phoneNo").on("keypress keyup blur",function (event) {    
					$(this).val($(this).val().replace(/[^\d].+/, ""));
					if ((event.which < 48 || event.which > 57)) {
							//input.addClass("invalid");$(".error.phoneNo").fadeIn(300);
							event.preventDefault();
					}
					
					
				});
								
			}
		});
		$('#date').on('input', function() {
			var input=$(this);
			var is_name=input.val();
			if(is_name == ""){
				input.addClass("invalid");$(".error.date").fadeIn(300);
				//erro_free += 1;
			}
			else{input.removeClass("invalid");$(".error.date").fadeOut();
			}
		});
		//<!--Email must be an email -->
		$('#emailAddress').on('input', function() {
			var input=$(this);
			var re = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			var is_nameX=input.val();
			if(is_nameX == ""){
				input.addClass("invalid");$(".error.emailAddress").fadeIn(300);
				//erro_free += 1;
			}
			else{input.removeClass("invalid");$(".error.emailAddress").fadeOut();
				var is_email=re.test(input.val());
				if(is_email){input.removeClass("invalid");$(".error.invEmail").fadeOut();
				}
				else{input.addClass("invalid");$(".error.emailAddress").fadeOut();
					$(".error.invEmail").fadeIn();
					//erro_free += 1;
				}
			}
		});
		
		
		if(winWidth<=767){
			$(".menuItem").removeClass("active")
	$(".pipe,.menu_toggle").hide();
	$(".pipe,.menu_toggle").css("display","none");
	$(".close").click(function(){
		$(".pipe,.menu_toggle").css("display","none");
		});
		$("#one_half").height(winHeight)/2;
		$(".bg__foo").height()/2;
		$(window).scroll(function(){
		var top = $("body").scrollTop()||$("html").scrollTop();
		
		if(top > 50){
			$(".logo_container").addClass("current");
			}
			else{
				$(".logo_container").removeClass("current");
				}
			
		});
		}
       else{
		    
			$(".pipe,.menu_toggle").show();
	$(".pipe,.menu_toggle").css("display","inine-block");
	$(".close").click(function(){
		$(".pipe,.menu_toggle").css("display","inine-block");
		});
		   }
		
		$("#reservationType").change(function(){
			var value = $(this).find("option:selected").val();
			if(value=="lunch"){
				$("#time").css("display","block");
				$("#timeDinner").css("display","none");
			}
			if(value=="dinner"){
				$("#time").css("display","none");
				$("#timeDinner").css("display","block");
			}
		});
		
	
});

