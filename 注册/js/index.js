		//点击清空input内容
		$(document).ready(function(e) {
			/*点击删除 清空输入框的内容*/
			$('.yz_btn0').click(function() {
				$('.s1 input').val('');
			});
			$('.yz_btn1').click(function() {
				$('.s2 input').val('');
			});
		});
		
				//	手机验证码
				var sms_code_btn = document.getElementById("sms_code_btn");
				var count = 50;
				var timer = null;
				sms_code_btn.onclick = function() {
					clearInterval(timer);
					this.disabled = true;
					var that = this;
					timer = setInterval(sendTextMessage, 1000);
		
					function sendTextMessage() {
						count--;
						if(count >= 0) {
							that.innerHTML = count + "秒";
						} else {
							that.innerHTML = "获取验证码";
							that.disabled = false;
							clearInterval(timer);
							count = 50;
						}
					}
				}
		
		
		function deng() {
			var ming = $("#ming").val();
			var mi = $("#mi").val();
			$("#ming").val("");
			$("#mi").val("");

			$.ajax({
				url: 'http://127.0.0.1/denglu.php',
				async: true,
				type: 'POST',
				data: {
					"ming": ming,
					"mi": mi
				},
				success: function(res) {
					console.log(res);
					if(res==1){
						alert("登陆成功");
					}else if(res==2){
						alert("密码错误");
					}else if(res==3){
						alert("用户名不存在");
					}
				}
			});
		};