$('button').on('click', () => {
	var user = $('input').val()
	var url = 'https://api.github.com/users/' + user + '/repos'
	$.ajax({
		url: url
	}).then(function(data){
		console.log(data)
		data.forEach(function(obj,index){
			$('#profile-pic').attr('src', obj.owner.avatar_url)
			$('#profile-userName').text(obj.owner.login)
			$('.jumbotron.row').append('<div class = "col-sm-6 col-md-3"><a href = ' + obj.clone_url+ ' class = "thumbnail">' + obj.name + '<img id="logo_lenguage' +index + '" width="25px" heigth="25"></img></a></div>')
			if(obj.language === "JavaScript"){
				$(`#logo_lenguage${index}`).attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png')
			}else if(obj.language === "HTML"){
				$(`#logo_lenguage${index}`).attr('src', 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png')
			}else{
				$(`#logo_lenguage${index}`).attr('src', 'http://keithmackay.com/images/picture.jpg')
			}
			var followers = obj.owner.followers_url
			$.ajax({
				url: followers
			}).then(function(oData){
				var nFollows = oData.length
				$('.col-sm-4 p').text('Followers 👥: ' + nFollows)
			})
		})
	})
})