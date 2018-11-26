$(function(){
  const NSG_TEXT_MAX = '20文字以内で入力してください';
  const NSG_EMPTY = '入力必須です';
  const NSG_EMAIL_TYPE = 'Emailの形式ではありません';
  const NSG_TEXTAREA_MAX = '100文字以内で入力してください';
  $(".valid-text").keyup(function(){
    var form_g = $(this).closest('.form-group');
    if($(this).val().length > 20){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(NSG_TEXT_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
  $('.valid-email').keyup(function(){
    var form_g =$(this).closest('.form-group');
    if($(this).val().length == 0){
      form_g.removeClass('has-sucsess').addClass('has-error');
      form_g.find('.help-block').text(NSG_EMPTY);
    }else if($(this).val().length >50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(NSG_EMAIL_TYPE);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
  $('.valid-textarea').keyup(function(){
    var form_g = $(this).closest('.form-group');
    if($(this).val().length == 0){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(NSG_EMPTY);
    }else if($(this).val().length >100){
      form_g.removeClass('has-success').addClass('has-error');
      form_g.find('.help-block').text(NSG_TEXTAREA_MAX);
    }else{
      form_g.removeClass('has-error').addClass('has-success');
      form_g.find('.help-block').text('');
    }
  });
});
