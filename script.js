var adam = document.getElementsById('adam');
adam.addEventListener('click', function(){
	loadScript('library/manny/script.js');
	setTimeOut(function(){
		adam.innerHTML += blastoise.name;
	},400)
})

function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

