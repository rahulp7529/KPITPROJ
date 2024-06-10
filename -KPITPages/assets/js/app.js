$(".validation-status a").click(function () {
    $(".validation-status a").toggleClass("active");
});

var checkInput = (e) => {
  const content = $(".form-group input").val().trim();
  $('.my-button').prop('disabled', content === '');
}; 
$(document).on('keyup', 'input', checkInput);

$(document).ready(function(){
  $('.next-btn a').attr('disabled',true);
  $('.user-input').keyup(function(){
      if($(this).val().length !=0)
          $('.next-btn a').attr('disabled', false);            
      else
          $('.next-btn a').attr('disabled',true);
  })
});

$(document).ready(function(){
  $('.validation-status a').attr('disabled',true);
  $('.user-input').keyup(function(){
      if($(this).val().length !=0)
          $('.validation-status a').attr('disabled', false);            
      else
          $('.validation-status a').attr('disabled',true);
  })
});