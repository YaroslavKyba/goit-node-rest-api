import contactsServices from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
  const result = await contactsServices.listContacts();
  res.json(result);
};

// listContacts, getContactById, removeContact, addContact;

export const getOneContact = (req, res) => {};

export const deleteContact = (req, res) => {};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
