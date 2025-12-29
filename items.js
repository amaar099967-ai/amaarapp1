// Fixed items shared across projects
async function addItem(name){
 await save('items',{name});
 alert('تم حفظ البند');
}

async function loadItems(){
 const items = await getAll('items');
 return items;
}
