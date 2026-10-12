(()=>{
 'use strict';
 const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#mobile-menu');
 const setMenu=open=>{toggle?.setAttribute('aria-expanded',String(open));if(menu)menu.hidden=!open;document.body.classList.toggle('menu-open',open);};
 toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
 menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){setMenu(false);toggle.focus();}
  if(e.key==='Tab'&&toggle?.getAttribute('aria-expanded')==='true'){
   const controls=[toggle,...menu.querySelectorAll('a')];const first=controls[0],last=controls.at(-1);
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
 });
 const mq=matchMedia('(min-width:768px)');mq.addEventListener('change',e=>{if(e.matches)setMenu(false);});
 const dialog=document.querySelector('.lightbox');
 if(dialog&&typeof dialog.showModal==='function'){
  const close=()=>dialog.close();
  document.querySelectorAll('.gallery-link').forEach(link=>link.addEventListener('click',e=>{
   e.preventDefault();const image=document.createElement('img');image.src=link.href;image.alt=link.dataset.caption;dialog.querySelector('figure').prepend(image);
   dialog.querySelector('figcaption').textContent=link.dataset.caption;dialog.showModal();document.body.classList.add('lightbox-open');
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click',close);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('lightbox-open');dialog.querySelector('figure img')?.remove();});
 }
 document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{
  const scope=button.closest('.model-compare');scope.querySelectorAll('[data-view]').forEach(b=>{const active=b===button;b.setAttribute('aria-pressed',String(active));b.classList.toggle('selected',active);});scope.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==button.dataset.view);
 }));
})();
