import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
export const ContactsAPI = {
  createContact: async function (value) {
    const valueCopy = { ...value };
    valueCopy.id = uuidv4();
    await db.ref("/contacts").push(valueCopy);
  },

  fetchContacts: async function (cb) {
    await db.ref("/contacts").on("value", function (snapshot) {
      cb(snapshot.val());
    });
  },
  deleteContact: async function (id) {
    await db.ref("/contacts").child(id).remove();
  },
  updateContact: async function (id, obj) {
    await db.ref("/contacts").child(id).set(obj);
  },
};
