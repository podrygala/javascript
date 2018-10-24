let p1 = document.getElementsByClassName('main-text');
let p2 = document.querySelectorAll('.main-text');

p2.forEach(function(el,ind){
    console.log(p2);
})

//console.log(p1);
//console.log(p2);

//p1.forEach(function(el, ind){
//    console.log(el);
//})  -- to nie zadziala


//
//var dlugosc = p1.length;
//for(let i=0; i<dlugosc; i++)
//    console.log(p1[i].id); -- to zadziala


//sposob 1 for
//for(let i=0; i<10; i++){
//    console.log(i);
//    break;
//}

// sposob 2 operator spread ES6 - nie zadziala na IE
//
//[...p1].forEach(function(el,ind){
//    console.log(el);
//})


//sposb 3 call
//
//[].forEach.call(p1, function(el, ind){
//    console.log(el);
//})

//sposob 4 - nie zadziala na IE

//Array.from(p1, function(el){
//    console.log(el);
//});
