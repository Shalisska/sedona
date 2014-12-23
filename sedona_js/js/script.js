//(function (document) {
//
//	
//	
//var counters = document.querySelectorAll('.counter');
//    
//for (var i = 0; i < counters.length; i++) {
//    	
//	var count = function (j) {
//		var counter = counters[j];
//		
//		var minus = counter.querySelector('.minus');
//		var plus = counter.querySelector('.plus');
//		var result = counter.querySelector('.counter-input');
//		
//		var val = parseInt(result.value, 10);
//		var res = val;
//		
//		plus.addEventListener('click', function (event) {
//			event.preventDefault ();
//			res = ++val;
//			result.value = res;
//		});
//
//		minus.addEventListener('click', function (event) {
//			event.preventDefault ();
//			
//			if (result.classList.contains('children-count') & val > 0) {
//				res = --val;
//				result.value = res;
//			} else if (val > 1) {
//				res = --val;
//				result.value = res;
//			};
//		});
//		
//		var getChar = function (event) {
//			if (event.which == null) {
//				if (event.keyCode < 32) return null;
//				return String.fromCharCode(event.keyCode) // IE
//			}
//
//			if (event.which!=0 && event.charCode!=0) {
//				if (event.which < 32) return null;
//				return String.fromCharCode(event.which)   // остальные
//			}
//
//		return null; // специальная клавиша
//		}
//
//		result.onkeypress = function(e) {
//			e = e || event;
//			var chr  = getChar(e);
//
//			if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
//			if (chr < '0' || chr > '9') return false;
//		}
//	} (i);
//};
//	
//
//})(document);

(function (document) {


	var form = document.querySelector('.response');
	var queue = [];

	var data = new FormData(form);
	queue.forEach(function (element) {
		data.append('pictures', element.file);
	});

	var xhr = new XMLHttpRequest();
	
//xhr.open('post', '/echo?' + (new Date()).getTime());
//	
//xhr.onreadystatechange = function () {
//	if (xhr.readyState == 4) {
//		console.log(xhr.responseText);
//	}
//};
//	
//xhr.send(data);


	form.querySelector('.pictures').addEventListener('change', function () {
		var files = this.files;
		previewImages(files);
		
		this.value = '';
	});

	function previewImages(files) {
		for (var i = 0; i < files.length; i++) {
			var file = files[i];

			if (file.type.match(/image.*/)) {
				var reader = new FileReader();

				reader.onload = function (event) {
//					var container = document.createElement('div');
//					container.classList.add('photo');
//					area.appendChild(container);
//
//					var del = document.createElement('a');
//					del.classList.add('delete-photo');
//					del.href = '#';
//					del.textContent = 'Удалить';
//					container.appendChild(del);
//
//					var img = document.createElement('img');
//					img.src = event.target.result;
//					img.alt = '';
//					container.appendChild(img);
				
				
				
					var area = document.querySelector('.photo-area');
					var template = document.querySelector('#photo-template').innerHTML;
				
					var html = Mustache.render(template, {
						photo: event.target.result,
						name: file.name
					});
					
					var div = document.createElement('div');
					div.classList.add('photo');
					div.innerHTML = html;
					
					area.appendChild(div);
					
					var img = div.querySelector('img');
				
					queue.push ({file: file, img: img});
				};

				reader.readAsDataURL(file);
			}
		}	
	}
	
	function removePreview(link) {
		var img = link.nextSibling;
		queue = queue.filter(function(element) {
			return element.img != img;
		});
		img.parentNode.parentNode.removeChild(img.parentNode);
	};
	
	
	
	
	
	
	
})(document);


















