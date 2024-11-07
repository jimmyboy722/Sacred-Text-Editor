import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // OPENING A CONNECTION TO THE DATABASE
  const db = await openDB("jate", 1);
  // STARTING A NEW TRANSACTION AND SPECIFYING THE DATA PRIVILEGES
  const tx = db.transaction("jate", "readwrite");
  // ACCESSING THE OBJECT STORE
  const store = tx.objectStore("jate");
  // ADDING CONTENT WITH THE PUT METHOD
  const request = store.put({ id: 1, value: content });
  // GETTING CONFIRMATION OF THE REQUEST
  const result = await request;
  console.log("data has been saved to the database", result.value);
};
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // OPENING A CONNECTION TO THE DATABASE
  const db = await openDB("jate", 1);
  // STARTING A NEW TRANSACTION AND SPECIFYING THE DATA PRIVILEGES
  const tx = db.transaction("jate", "readonly");
  // ACCESSING THE OBJECT STORE
  const store = tx.objectStore("jate");
  // GETTING ALL THE RECORDS FROM THE OBJECT STORE
  const request = store.getAll();
  // GETTING CONFIRMATION OF THE REQUEST
  const result = await request;
  console.log("Data retrieved", result);
  return result;
};
initdb();
