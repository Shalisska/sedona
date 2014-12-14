(function (document) {

	
	
var counters = document.querySelectorAll('.counter');
    
for (var i = 0; i < counters.length; i++) {
    	
	var count = function (j) {
		var counter = counters[j];
		
		var minus = counter.querySelector('.minus');
		var plus = counter.querySelector('.plus');
		var result = counter.querySelector('.counter-input');
		
		var val = parseInt(result.value, 10);
		var res = val;
		
		plus.addEventListener('click', function (event) {
			event.preventDefault ();
			res = ++val;
			result.value = res;
		});

		minus.addEventListener('click', function (event) {
			event.preventDefault ();
			
			if (result.classList.contains('children-count') & val > 0) {
				res = --val;
				result.value = res;
			} else if (val > 1) {
				res = --val;
				result.value = res;
			};
		});
		
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

		result.onkeypress = function(e) {
			e = e || event;
			var chr  = getChar(e);

			if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
			if (chr < '0' || chr > '9') return false;
		}
	} (i);
};
	

})(document);

//<form>
//<input type="button" value="- 1" onClick="javascript:this.form.numeric.value--;">
//<input type="text" name="numeric" size="4" value="555">
//<input type="button" value="+ 1" onClick="javascript:this.form.numeric.value++;">
//</form>

(function (document) {


var form = document.querySelector('.response');

var data = new FormData(form);	
var xhr = new XMLHttpRequest ();
	
//xhr.open('post', '/echo?' + (new Date()).getTime());
//	
//xhr.onreadystatechange = function () {
//	if (xhr.readyState == 4) {
//		console.log(xhr.responseText);
//	}
//};
//	
//xhr.send(data);


var area = document.querySelector('.photo-area');
//var queue = [];
	
form.querySelector('.pictures').addEventListener('change', function () {
	var files = this.files;
		
	previewImages (files);		
});
						  
function previewImages (files) {
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		
		if (file.type.match(/image.*/)) {
			var reader = new FileReader();
				
			reader.onload = function (event) {
				var container = document.createElement('div');
				container.classList.add('photo');
				area.appendChild(container);
				
				var del = document.createElement('a');
				del.classList.add('delete-photo');
				container.appendChild(del);
				
				var img = document.createElement('img');
				img.src = event.target.result;
				img.alt = '';
				container.appendChild(img);
			};
				
			reader.readAsDataURL(file);
		}
	}	
}	
	
	
	
	
	
	
	
})(document);



















