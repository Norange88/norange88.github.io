	$('#callback_ajax').click(function() {
		$('#callback_ajax').attr("disabled", true);
		$.ajax({
			type: 'POST',
			headers: { 'Accept': 'application/json' },
			url: 'https://lk.rn-card.ru/api/other/v1/LandingForm',
			data: {
			"name": $("#callback_name").val(), // RAISE_ERROR
			"phone": $("#callback_phone").val(),
			"Url" : $("#page_name").val(),
            "Email": $("#callback_email").val(),
            "Inn": $("#callback_inn").val(),
            "Region": $("#callback_region").val(),
			"type": "call",
            "testemail": "dr90@mail.ru"
		    },
		    success: function (response) {
		    	console.log(response['Code']);
		    	console.log(response['Message']);
		    	if (response['Code'] == 0) {
		    		$(".callback_ajax_success").removeClass('text-error');
		    		$(".callback_ajax_success").text('Заявка успешно отправлена!');
		    		$('.callback_ajax_success').fadeIn(300).delay(1000).fadeOut(400);
		    		$('#callback').delay(1500).fadeOut(400);
		    	}
		    	else {
			    	$(".callback_ajax_success").addClass('text-error');
			    	$(".callback_ajax_success").text(response['Message']);
			    	$('.callback_ajax_success').fadeIn(300).delay(1000).fadeOut(400);	
		    	}
		    },
		    error: function (error) {
		    	console.log(error);
		    }
		});
		setTimeout(function(){
			$('#callback_ajax').attr("disabled", false);
		}, 5000);
	});
	$('#form_ajax').click(function() {
		$('#form_ajax').attr("disabled", true);
		$.ajax({
			type: 'POST',
			headers: { 'Accept': 'application/json' },
			url: 'https://lk.rn-card.ru/api/other/v1/LandingForm',
			data: {
			 "Name": $("#form_name").val(),
             "Phone": $("#form_phone").val(),
             "Email": $("#form_email").val(),
             "Inn": $("#form_inn").val(),
             "Region": $("#form_region").val(),
             "Company": $("#form_company_name").val(),
             "Volume": $("#expected").val(),
             "Url" : $("#page_name").val(),
             "type": "reg",
             "testemail": "dr90@mail.ru"
		    },
		    success: function (response) {
		    	console.log(response['Code']);
		    	console.log(response['Message']);
		    	if (response['Code'] == 0) {
		    		$(".form_ajax_success").removeClass('text-error');
		    		$('.form_ajax_success').text('Заявка успешно отправлена!');
		    		$('.form_ajax_success').fadeIn(300).delay(1000).fadeOut(400);
		    		$('#contract').delay(1500).fadeOut(400);
		    	}
		    	else {
			    	$(".form_ajax_success").addClass('text-error');
			    	$(".form_ajax_success").text(response['Message']);
			    	$('.form_ajax_success').fadeIn(300).delay(1000).fadeOut(400);	
		    	}

		    },
		    error: function (error) {
		    	console.log(error);
		    }
		});
		setTimeout(function(){
			$('#form_ajax').attr("disabled", false);
		}, 5000);
	});
	/*$('#form_ajax_offer').click(function() {
		$('#form_ajax_offer').attr("disabled", true);
		$.ajax({
			type: 'POST',
			headers: { 'Accept': 'application/json' },
			url: 'https://lk.rn-card.ru/api/other/v1/LandingForm',
			data: {
			 "Name": $("#form_name_offer").val(),
             "Phone": $("#form_phone_offer").val(),
             "Email": $("#form_email_offer").val(),
             "Inn": $("#form_inn_offer").val(),
             "Region": $("#form_region_offer").val(),
             "Url" : $("#page_name").val(),
             "type": "call",
             "testemail": "dr90@mail.ru"
		    },
		    success: function (response) {
		    	console.log(response['Code']);
		    	console.log(response['Message']);
		    	if (response['Code'] == 0) {
		    		$(".form_ajax_success_offer").removeClass('text-error');
		    		$('.form_ajax_success_offer').text('Заявка успешно отправлена!');
		    		$('.form_ajax_success_offer').fadeIn(300).delay(1000).fadeOut(400);
		    		$('#callback_offer').delay(1500).fadeOut(400);
		    	}
		    	else {
			    	$(".form_ajax_success_offer").addClass('text-error');
			    	$(".form_ajax_success_offer").text(response['Message']);
			    	$('.form_ajax_success_offer').fadeIn(300).delay(1000).fadeOut(400);	
		    	}

		    },
		    error: function (error) {
		    	console.log(error);
		    }
		});
		setTimeout(function(){
			$('#form_ajax_offer').attr("disabled", false);
		}, 5000);
	});*/