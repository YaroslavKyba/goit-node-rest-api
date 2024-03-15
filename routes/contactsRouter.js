import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = contactsControllers;

import isValidId from "../middlewares/isValidId.js";

import validateBody from "../decorators/validateBody.js";
import {
  createContactSchema,
  updateContactFavoriteSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateContactFavoriteSchema),
  updateStatusContact
);

export default contactsRouter;
