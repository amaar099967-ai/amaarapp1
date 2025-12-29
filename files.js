async function loadFiles(){
 const list = document.getElementById('fileList');
 const projects = await getAll('projects');
 list.innerHTML='';
 projects.forEach(p=>{
  const li=document.createElement('li');
  li.innerHTML = `📁 ${p.name || 'مشروع'} 
   <button onclick="openFile(${p.id})">فتح</button>
   <button onclick="deleteFile(${p.id})">حذف</button>`;
  list.appendChild(li);
 });
}

function openFile(id){
 localStorage.setItem('openProject', id);
 location.href='../project.html';
}

async function deleteFile(id){
 if(!confirm('حذف المشروع؟')) return;
 const tx=db.transaction('projects','readwrite');
 tx.objectStore('projects').delete(id);
 tx.oncomplete=loadFiles;
}

openDB().then(loadFiles);