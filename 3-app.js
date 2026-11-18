const tabs=[...document.querySelectorAll('section.tab')],btns=[...document.querySelectorAll('nav button')];
function show(id){if(!tabs.some(t=>t.id===id))id='inicio';tabs.forEach(t=>t.classList.toggle('on',t.id===id));btns.forEach(b=>b.setAttribute('aria-selected',b.dataset.t===id));}
btns.forEach(b=>b.onclick=()=>{location.hash=b.dataset.t;});
addEventListener('hashchange',()=>{show(location.hash.slice(1));scrollTo(0,0)});show(location.hash.slice(1));
