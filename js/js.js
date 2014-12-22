(function (document) {
	
	var counters = document.querySelectorAll('.ordering-form__counter-action');
	
	for (var i = 0; i < counters.length; i++) {		
		var counter = counters[i];
		
		counter.addEventListener('click', function (event) {
			event.preventDefault();
			var inp = this.parentNode.querySelector('.ordering-form__input--number');
            var val = parseInt(inp.value, 10);
			if (isNaN(val)) {
				val = 0;
				}
			
            if (this.classList.contains('plus')) {
				inp.value = ++val;
            } else if (this.classList.contains('minus')){
				if ((this.parentNode.classList.contains('ordering-form__counter--children') & val > 0) || (val > 1)) {
					inp.value = --val;
				}            
            }
		});
	}
	
	var results = document.querySelectorAll('.ordering-form__input--number');

	var getChar = function (event) {
		if (event.which == null) {
			if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode) // IE
		}

		if (event.which!=0 && event.charCode!=0) {
			if (event.which < 32) return null;
			return String.fromCharCode(event.which)   // остальные
		}

		return null; // специальная клавиша
	}

	for (var i = 0; i < results.length; i++) {
		var result = results[i];
		result.onkeypress = function(e) {
			e = e || event;
			var chr  = getChar(e);

			if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
			if (chr < '0' || chr > '9') return false;
		}
		
		
	}
	

})(document);

(function (document) {
	var open = document.querySelector('.menu__btn');
	var close = document.querySelector('.menu__list-close');
	var menu = document.querySelectorAll('.menu__list-part');
	
	close.addEventListener('click', function(event) {
		event.preventDefault();
		for (var i = 0; i < menu.length; i++) {
			menu[i].classList.add('hide');
		}
		close.classList.add('hide');
	});
	
	open.addEventListener('click', function(event) {
		event.preventDefault();
		for (var i = 0; i < menu.length; i++) {
			menu[i].classList.remove('hide');
		}
		close.classList.remove('hide');
	});	
})(document);






//(function (document) {
//
//
//var form = document.querySelector('.response');
//
//var data = new FormData(form);	
//var xhr = new XMLHttpRequest ();
//	
////xhr.open('post', '/echo?' + (new Date()).getTime());
////	
////xhr.onreadystatechange = function () {
////	if (xhr.readyState == 4) {
////		console.log(xhr.responseText);
////	}
////};
////	
////xhr.send(data);
//
//
//var area = document.querySelector('.photo-area');
////var queue = [];
//	
//form.querySelector('.pictures').addEventListener('change', function () {
//	var files = this.files;
//		
//	previewImages (files);		
//});
//						  
//function previewImages (files) {
//	for (var i = 0; i < files.length; i++) {
//		var file = files[i];
//		
//		if (file.type.match(/image.*/)) {
//			var reader = new FileReader();
//				
//			reader.onload = function (event) {
//				var container = document.createElement('div');
//				container.classList.add('photo');
//				area.appendChild(container);
//				
//				var del = document.createElement('a');
//				del.classList.add('delete-photo');
//				container.appendChild(del);
//				
//				var img = document.createElement('img');
//				img.src = event.target.result;
//				img.alt = '';
//				container.appendChild(img);
//			};
//				
//			reader.readAsDataURL(file);
//		}
//	}	
//}	
//	
//	
//	
//	
//	
//	
//	
//})(document);
