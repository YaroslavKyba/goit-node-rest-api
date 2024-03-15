import Contact from "../models/Contacts.js";

const listContacts = () => Contact.find({});

const getContactById = (id) => Contact.findById(id);

const removeContact = (id) => Contact.findByIdAndDelete(id);

const addContact = (data) => Contact.create(data);

const updateContactById = (id, data) => Contact.findByIdAndUpdate(id, data);

const updateContactFavoriteById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactFavoriteById,
};
