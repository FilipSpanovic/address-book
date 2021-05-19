import { v4 as uuidv4 } from "uuid";

import { db } from "../../firebase";

const contactPath = "/contacts";

export const ContactsAPI = {
  createContact: async function (value, cb) {
    const valueCopy = { ...value };
    valueCopy.id = uuidv4();
    await db.ref(contactPath).push(valueCopy);
    cb();
  },

  fetchContacts: async function (cb) {
    await db.ref(contactPath).on("value", function (snapshot) {
      if (!snapshot.val()) {
        cb([]);
        return;
      }
      cb(snapshot.val());
    });
  },
  deleteContact: function (key, cb) {
    return async function preventDefault(e) {
      e.preventDefault();
      await db.ref(contactPath).child(key).remove();
    };
  },
  updateContact: async function (key, obj, cb) {
    await db.ref(contactPath).child(key).set(obj);
    if (typeof cb === "function") {
      cb();
    }
  },
};
