var inputTel = $('#inputTel');
var inputYZM = $('#inputYZM');
var inputUser = $('#inputUser');
var inputAge = $('#inputAge');
var inputYCQ = $('#inputYCQ');
var inputYiyuan = $('#inputYiyuan');

// 获取短信验证码
function message(){
  console.log(123);
  $.ajax({
       url: 'register.html' ,
       type: 'POST',
       data: 'massage',
       async: false,
       cache: false,
       contentType: false,
       processData: false,
       success: function (returndata) {
          var send_massage = $('#send_massage');
          var time = 80;
          send_massage.attr('disabled','disabled');
          send_massage.text(time + '秒后重新获取');
          var B = setInterval(function(){
            time--;
            send_massage.text(time + '秒后重新获取');
            if (time == 0) {
              clearInterval(B);
              send_massage.removeAttr('disabled');
              send_massage.text('获取验证码');
            }
          },1000);
       },
       error: function (returndata) {
         alert('发送失败!');
       }
  });
}


// 立即注册按钮点击事件
$('#register').on('click',function (){
  var inputArr = $('input');
  for (var i = 0; i < inputArr.length; i++) {
    if ($($('input')[i]).val() == '' || $($('input')[i]).val() == ' ') {
      if (i== 0) {
        inputTel.focus();
        return false;
      } if (i== 1) {
        inputYZM.focus();
        return false;
      } if (i== 2) {
        inputUser.focus();
        return false;
      }if (i== 3) {
        inputAge.focus();
        return false;
      }if (i== 4) {
        inputYCQ.focus();
        return false;
      }if (i== 5) {
        inputYiyuan.focus();
        return false;
      }
    }
  }
  $.ajax({
       url: 'register.html' ,
       type: 'POST',
       data: {
         "tel": inputTel.val(),
         "yzm": inputYZM.val(),
         "user": inputUser.val(),
         "age": inputAge.val(),
         "ycq": inputYCQ.val(),
         "yiyuan": inputYiyuan.val(),
       },
       async: false,
       cache: false,
       contentType: false,
       processData: false,
       success: function (data) {
          alert('注册成功');
       },
       error: function (returndata) {
         alert('发送失败!');
       }
  });
});
// 验证input内容
$('#inputTel').blur(function () {
    var inputVal = $(this).val();
    if ($(this).attr("id") == 'inputTel') {
      if(!(/^1[34578]\d{9}$/.test(inputVal))){
        $(this).addClass('shadow');
        return false;
      } else {
        $(this).removeClass('shadow');
        return false;
      }
    }
  })
