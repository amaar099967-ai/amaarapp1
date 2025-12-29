// IndexedDB basic wrapper
const DB_NAME = 'accounting_app';
const DB_VERSION = 1;
let db;

function openDB(){
 return new Promise((res,rej)=>{
  const req = indexedDB.open(DB_NAME, DB_VERSION);
  req.onupgradeneeded = e => {
   db = e.target.result;
   if(!db.objectStoreNames.contains('projects'))
    db.createObjectStore('projects',{keyPath:'id'});
   if(!db.objectStoreNames.contains('items'))
    db.createObjectStore('items',{keyPath:'name'});
  };
  req.onsuccess = e => {db=e.target.result; res(db);};
  req.onerror = e => rej(e);
 });
}

function save(store,data){
 return new Promise(async res=>{
  if(!db) await openDB();
  const tx=db.transaction(store,'readwrite');
  tx.objectStore(store).put(data);
  tx.oncomplete=res;
 });
}

function getAll(store){
 return new Promise(async res=>{
  if(!db) await openDB();
  const tx=db.transaction(store,'readonly');
  const req=tx.objectStore(store).getAll();
  req.onsuccess=()=>res(req.result);
 });
}
