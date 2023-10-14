"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactByAlphabet = exports.getContactsByType = exports.deleteOneContact = exports.updateOneContact = exports.readOneContact = exports.readAllContacts = exports.createContact = void 0;
const contactModel_1 = __importDefault(require("../model/contactModel"));
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phoneNumber, type } = req.body;
        const ContactService = yield contactModel_1.default.create({
            name,
            phoneNumber,
            type
        });
        return res.status(201).json({
            message: "contact created",
            data: ContactService
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating user"
        });
    }
});
exports.createContact = createContact;
const readAllContacts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Contacts = yield contactModel_1.default.find();
        return res.status(201).json({
            message: "get all contact",
            data: Contacts
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error reading All contacts"
        });
    }
});
exports.readAllContacts = readAllContacts;
const readOneContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Contact = yield contactModel_1.default.findById(id);
        return res.status(201).json({
            message: "get one contact",
            data: Contact
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error reading contact"
        });
    }
});
exports.readOneContact = readOneContact;
const updateOneContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, phoneNumber, type } = req.body;
        const avatar = yield name.charAt().toUpperCase();
        const updateContact = yield contactModel_1.default.findByIdAndUpdate(id, {
            name,
            phoneNumber,
            type,
        });
        if (!updateContact) {
            return res.status(404).json({
                message: "Invalid contact"
            });
        }
        else {
            const contact = yield contactModel_1.default.findByIdAndUpdate(id, {
                type,
                phoneNumber,
                name,
                contactAvatar: avatar
            }, { new: true });
            return res.status(201).json({
                message: "contact updated",
                data: contact
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error updating contact"
        });
    }
});
exports.updateOneContact = updateOneContact;
const deleteOneContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Contactdelete = yield contactModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Contact deleted",
            data: Contactdelete
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error deleting contact"
        });
    }
});
exports.deleteOneContact = deleteOneContact;
const getContactsByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type } = req.params;
        const contacts = yield contactModel_1.default.find({ type })
            .sort({ name: 1 });
        return res.status(200).json({
            message: "Get contacts by type",
            data: contacts,
        });
    }
    catch (error) {
        return res.status(404).json({ message: "Error getting contacts by type" });
    }
});
exports.getContactsByType = getContactsByType;
const getContactByAlphabet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { contactAvatar } = req.params;
        const alphabet = yield contactAvatar.toUpperCase();
        const user = yield contactModel_1.default
            .find({ contactAvatar: alphabet })
            .sort({ name: 1 });
        return res.status(200).json({
            message: "View all contacts under  category",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `Error requesting for a user: ${error.message}`,
            error,
        });
    }
});
exports.getContactByAlphabet = getContactByAlphabet;
