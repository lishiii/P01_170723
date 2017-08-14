$(function() {
	$.goup({  
		trigger: 100,  
                bottomOffset: 40,       //距底部偏移量   
                locationOffset: 30,     //距右部偏移量  
                title: '',  
                titleAsText: true       //是否显示title  
    }); 

	$("#btn-like").click(function(){
		var like = $("#pro-like").text();
		like++;
		var unlike = Number($("#pro-unlike").text());
		var total = like + unlike;
		var like_width = Math.round(like / total * 10000) / 100.00 ;
		var unlike_width = 100 - like_width;
		$("#pro-like").text(like);
		$("#pro-unlike").text(unlike);
		$("#pro-like").attr("style","width: "+ like_width+ "%");
		$("#pro-unlike").attr("style","width: "+ unlike_width+ "%");
	});


	$("#btn-unlike").click(function(){
		var like = Number($("#pro-like").text());
		var unlike = Number($("#pro-unlike").text());
		unlike++;
		var total = like + unlike;
		var like_width = Math.round(like / total * 10000) / 100.00 ;
		var unlike_width = 100 - like_width;
		$("#pro-like").text(like);
		$("#pro-unlike").text(unlike);
		$("#pro-like").attr("style","width: "+ like_width+ "%");
		$("#pro-unlike").attr("style","width: "+ unlike_width+ "%");
	});
});