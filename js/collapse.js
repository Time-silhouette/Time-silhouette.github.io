$(document).ready(function() {

	function foldAll(){
		for (var i = 0; i < $('#buttom-menu > ul > li > h3').length; i++){
			$('#buttom-menu > ul > li > h3')[i].className = 'hide';
		}
		for (var j = 0; j < $('#buttom-menu > ul > li > ul').length; j++){
			$('#buttom-menu > ul > li > ul')[j].className = 'hide';
		}
	}

	foldAll();

	for (var i = 0; i < $('#buttom-menu > ul > li > h3').length; i++){
		$('#buttom-menu > ul > li > h3')[i].onclick = function(){
			collapse(this);
		}
	}

	function collapse(obj){
		var targclass;
		if (obj.className==='hide') {
			targclass = '';
		}else{
			targclass = 'hide';
		}
	//	foldAll();
		obj.parentNode.getElementsByTagName('ul')[0].className = targclass;
		obj.className = targclass;
	}

});
