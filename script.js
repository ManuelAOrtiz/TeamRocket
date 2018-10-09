var adam = document.getElementById('adam');
var picture = document.getElementById('pokemonImage')
// var background = document.getElementsByTagName('body')[0]

adam.addEventListener('click', loadScript('library/adam/index.js'))


function loadScript(url)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}

// window.addEventListener('load',function(){
//   background.style.backgroundImage = "url("+'library/images/pokegym.jpg'+")"
//   background.style.backgroundSize = '100% 100%'
//   background.style.position = 'relative'
//   background.style.zIndex = '-1'
// })
