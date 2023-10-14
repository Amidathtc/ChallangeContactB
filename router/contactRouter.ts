import { Router } from "express";
import {
  createContact,
  deleteOneContact,
  getContactByAlphabet,
  getContactsByType,
  readAllContacts,
  readOneContact,
  updateOneContact,
} from "../controller/contactController";

const router = Router();
router.route("/:contactAvatar/view-alpha").get(getContactByAlphabet);

router.route("/:type/get-types").get(getContactsByType);
router.route("/create").post(createContact);
router.route("/:id/delete").delete(deleteOneContact);
router.route("/:id/update").patch(updateOneContact);
router.route("/:id/get-one").get(readOneContact);
router.route("/get-all").get(readAllContacts);

export default router;
