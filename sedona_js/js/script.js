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