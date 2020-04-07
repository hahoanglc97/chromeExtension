var div = document.createElement('div');
div.style = "position: fixed; bottom: 0; right: 0; z-index:9999";
div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xCkcSL3zfJk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
 
document.body.appendChild(div);