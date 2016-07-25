// Checking page title
//if (document.title.indexOf("Facebook") != -1) {
	var funcLoad = function(e) {
		var elems = document.getElementsByClassName("_5pcq" );
		for(var i=0; i<elems.length; i++)
                {
                    var element = elems[i];
				if (element.innerHTML.indexOf('Севастополь')!=-1 ||
				element.innerHTML.indexOf('Sebastopol')!=-1 ||
				element.innerHTML.indexOf('Sevastopol')!=-1){
				  element.innerHTML = element.innerHTML.replace('Украина','Россия').replace('Ukraine','Russia');
				}
		};
	};
	document.addEventListener('DOMSubtreeModified', funcLoad);
	funcLoad();
//}