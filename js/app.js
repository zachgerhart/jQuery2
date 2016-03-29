
$('#add-todo').click(function() {
    TweenMax.to(".add-todo-button",.5, {x: -345, ease:Power1.easeInOut});
    TweenMax.to(".complete-todo-button",.45, {opacity:1,scale:1,x: -345, ease:Power1.easeInOut});
    TweenMax.to(".bottom-form-container",.5, {y: -345, ease:Power1.easeInOut});

});

$('#complete-todo').click(function() {
    TweenMax.to(".add-todo-button",.5, {x: 0, ease:Power1.easeInOut});
    TweenMax.to(".complete-todo-button",.4, {opacity:1,scale:1,x: 0, ease:Power1.easeInOut});
    TweenMax.to(".bottom-form-container",.5, {y: 345, ease:Power1.easeInOut});
});