import Dexie from 'dexie';

export const db = new Dexie('TaskDatabase');
db.version(1).stores({
  tasks: '++id, name', // Primary key and indexed props
});
