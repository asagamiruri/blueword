//尝试通过ajax请求，不造怎么获取换了行的字符串
/*$.ajax({
	type:"GET",
	// url:"http://mindfucking.blog.fc2blog.us/blog-entry-87.html?sp",
	url:"http://mindfucking.blog.fc2blog.us/page-0.html",
	success:function(data) {
		// var title = data.match(/strong>(\S*)<\/strong/);

		console.log(data);
	},
	error:function(err) {
		console.log(err);
	}
})*/

//直接通过页面的DOM来
$(document).ready(function(){
	var fragment = $('div.body');
	var titlelist = $('h3');
	var join = '';

	for(var i=0;i<fragment.length;i++){
		var body01 = fragment.eq(i).html().replace(/[\r\n]/g,"");//去掉所有空格
		var index = body01.indexOf('<div');//去掉后半部分
		var body = body01.slice(0,index).replace(/<br>/g,"\n");//<br>转成回车

		var title = '《' + titlelist.eq(i).text() + '》';

		join = join + title + '\r\n\r\n' + body + '\r\n\r\n';

		if(i == fragment.length-1){
			console.log(join)
		}
	}
})