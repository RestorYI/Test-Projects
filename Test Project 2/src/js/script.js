const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css"
    ],
    zIndex: 10,
    lang: "ru-RU",
    format: "DD MMM YYYY",
    plugins: [
        "RangePlugin"
    ]
})

$('.input-number-increment').click(function() {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  $input.val(val + 1);
});

$('.input-number-decrement').click(function() {
  var $input = $(this).parents('.input-number-group').find('.input-number');
  var val = parseInt($input.val(), 10);
  if(val > $input.attr('min')){
    $input.val(val - 1);
  } else {
    $input.val(0);
  }
})


$('.input-number-increment2').click(function() {
  var $input = $(this).parents('.input-number-group2').find('.input-number2');
  var val = parseInt($input.val(), 10);
  $input.val(val + 1);
});

$('.input-number-decrement2').click(function() {
  var $input = $(this).parents('.input-number-group2').find('.input-number2');
  var val = parseInt($input.val(), 10);
  if(val > $input.attr('min')){
    $input.val(val - 1);
  } else {
    $input.val(0);
  }
})

