function toggleActive(ele) {
	document.getElementsByClassName("active")[0].className="";
	document.getElementById(ele).className="active";
}

function toggleDiv(openDiv) {
	var ele = document.getElementById(openDiv);
	if (ele.className == 'dnone') {
		document.getElementById(openDiv).className = 'dblock';
		var eleAry = ele.previousElementSibling.children;
		for(i = 0; i < eleAry.length; i++) {
			if (eleAry[i].className.indexOf('fa-angle-right') != -1) {
				eleAry[i].className=eleAry[i].className.replace('fa-angle-right', 'fa-angle-down');
			}
			if (eleAry[i].className.indexOf('fa-plus-square-o') != -1) {
				eleAry[i].className=eleAry[i].className.replace('fa-plus-square-o', 'fa-minus-square-o');
			}
		}
	} else {
		document.getElementById(openDiv).className = 'dnone';
		var eleAry = ele.previousElementSibling.children;
		for(i = 0; i < eleAry.length; i++) {
			if (eleAry[i].className.indexOf('fa-angle-down') != -1) {
				eleAry[i].className=eleAry[i].className.replace('fa-angle-down', 'fa-angle-right');
			}
			if (eleAry[i].className.indexOf('fa-minus-square-o') != -1) {
				eleAry[i].className=eleAry[i].className.replace('fa-minus-square-o', 'fa-plus-square-o');
			}
		}
	}
}