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
			res = --val;
			result.value = res;
		});
	} (i);
};


})(document);

