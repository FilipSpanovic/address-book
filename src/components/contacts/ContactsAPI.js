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
      const keys = Object.keys(snapshot.val());
      const values = Object.values(snapshot.val());
      const mapKeys = values.map((element, index) => {
        return { ...element, key: keys[index] };
      });
      cb(mapKeys);
    });
  },

  deleteContact: function (key, cb) {
    return async function preventDefault(e) {
      e.preventDefault();
      await db.ref(contactPath).child(key).remove();
      if (typeof cb === "function") {
        cb();
      }
    };
  },
  updateContact: async function (key, obj, cb) {
    await db.ref(contactPath).child(key).set(obj);
    if (typeof cb === "function") {
      cb();
    }
  },
};
