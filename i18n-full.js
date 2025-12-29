
async function loadLang(lang){
 const res = await fetch('data/lang-'+lang+'.json');
 const t = await res.json();
 document.documentElement.lang = lang;
 document.documentElement.dir = lang==='ar'?'rtl':'ltr';
 document.querySelectorAll('[data-i18n]').forEach(e=>{
  e.innerText = t[e.dataset.i18n] || e.innerText;
 });
}
