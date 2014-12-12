(function(document) {
    
var counters = document.querySelectorAll('.counter');

for (var i = 0; i < counters.length; i++) {
    var counter = counters[i];
    
    var minus = counter.querySelector('.minus');
    var plus = counter.querySelector('.plus');
    var result = counter.querySelector('.counter-input');
    
    

    plus.addEventListener('click', function (event) {
        event.preventDefault ();
        var val = parseInt(result.value, 10);
        var res = val;
        res = ++val;
        result.value = res;
        console.log(res);
    });

    minus.addEventListener('click', function (event) {
        event.preventDefault ();
        var val = parseInt(result.value, 10);
        var res = val;
        res = --val;
        result.value = res;
        console.log(res);
    });
    
    
    console.log(result);
};


    

    

    
    
    
    
    

//var minus = document.querySelector('.test .minus');
//var plus = document.querySelector('.test .plus');
//var result = document.querySelector('.test .counter-input');
//var val = parseInt(result.value, 10);
//var res = val;
//    
//plus.addEventListener('click', function (event) {
//    event.preventDefault ();
//    res = ++val;
//    result.value = res;
//    console.log(res);
//});
//    
//minus.addEventListener('click', function (event) {
//    event.preventDefault ();
//    res = --val;
//    result.value = res;
//    console.log(res);
//});
    

})(document);

