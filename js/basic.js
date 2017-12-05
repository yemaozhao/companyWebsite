		//显示元素标签
		function showobj(id)
		{
			var obj= document.getElementById(id);
			obj.style.display="";
		}
		//隐藏元素标签
		function hiddenobj(id)
		{
			var obj= document.getElementById(id);
			obj.style.display="none";
		}

		//实例化一个数组
		var arr = new Array;
		arr[0] = "images/banner1.jpg";
		arr[1] = "images/banner2.jpg";
		arr[2] = "images/banner3.jpg";
		arr[3] = "images/banner4.jpg";
		var count=0;
		// 切换图片的功能
		function autoPlayer()
		{
			if (arr.length==count)
				{count=0;}
			
			document.getElementById("banner1").src=arr[count];
			count++;
		}

		var Timer = setInterval(autoPlayer,2000);
		// 清除定时器对象
		function clearTimer()
		{
			clearInterval(Timer);
		}
		//鼠标悬停时候指定播放的图片
		function showbannerbyid(num)   //匿名类型
		{
			clearTimer();
			var index=parseInt(num);
			document.getElementById("banner1").src=arr[index-1];
			count= index;
		}

		// 鼠标离开恢复自动播放效果
		function btnMouseOut()
		{
			Timer = setInterval(autoPlayer,2000);
		}

		// 实现浮动咨询的特效
		function changehight()
		{
			var qq=document.getElementById("zixunbox");
			qq.style.top=document.documentElement.scrollTop+document.body.scrollTop+200+"px";
		}

		window.onscroll=changehight;


		function isok()
		{
			if (document.getElementById("username").value=="" || document.getElementById("username").value==NaN) 
			{
				alert("用户名不能为空");
				return false;
			}
			
			var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			if (document.getElementById("email").value=="" || document.getElementById("email").value==NaN) 
			{
				alert("电子邮箱不能为空");
				return false;
			}

			if (!document.getElementById("email").value.match(email)) 
			{
				alert("电子邮箱格式错误");
				// document.getElementById("email").onfocus();
				return false;
			}	

			if (document.getElementById("content").value=="" || document.getElementById("content").value==NaN) 
			{
				alert("提交内容不能为空");
				return false;
			}	

			var mobile = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}|15\d{9}$/ ;
			if (!document.getElementById("mobile").value.match(mobile)) 
			{
				alert("手机号码格式错误");
				return false;
			}

			if (document.getElementById("content").value.length>50) 
			{
				alert("不能超过50个字符");
				return false;
			}




			 return true;
			
		}