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
      if (!snapshot.val()) {
        cb([]);
        return;
      }
      cb(snapshot.val());
    });
  },
  deleteContact: function (key) {
    return async function preventDefault(e) {
      e.preventDefault();
      await db.ref("/contacts").child(key).remove();
    };
  },
  updateContact: async function (key, obj) {
    await db.ref("/contacts").child(key).set(obj);
  },

};
