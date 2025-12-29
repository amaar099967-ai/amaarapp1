// Save & load projects
async function saveProject(data){
 data.id = Date.now();
 await save('projects', data);
 alert('تم حفظ المشروع');
}

async function loadProjects(){
 return await getAll('projects');
}
