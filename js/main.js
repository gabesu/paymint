$(document).ready(function(){
  $('.tab').on("click", function(){
    $('.tab').removeClass('active');
    $(this).addClass('active');
  });
  $('.cardpay').on("click", function(){
    $('.card-form').addClass('visible');
    $('.bank-form').removeClass('visible');
  });
  $('.bankpay').on("click", function(){
    $('.card-form').removeClass('visible');
    $('.bank-form').addClass('visible');
  });
  $('#cardnumber').keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g,'');
  });
  $('.pay-btn').on("click", function(){
    $('input').attr('disabled','disabled');
    $('.paymint-card').addClass('glow');
    setTimeout(function(){
      $('.card-success').show();
      $('.card-success').addClass('success');
      $('.paymint-card').removeClass('glow');
    }, 4000);
    setTimeout(function(){
    $('.card-success').removeClass('success');
    $('.card-success').fadeOut();
    $('input').removeAttr('disabled');
    $('input').val('');
  }, 7000);
  });
});
