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
      cb(Object.values(snapshot.val()));
    });
  },
};
