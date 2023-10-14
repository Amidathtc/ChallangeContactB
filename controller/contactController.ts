import { Request, Response } from "express";
import contactModel from "../model/contactModel";


export const createContact = async (req:Request, res:Response): Promise<Response> => {
     try {

        const {name, phoneNumber, type} = req.body;

        const ContactService = await contactModel.create ({
            name, 
            phoneNumber, 
            type
        })
         return res.status(201).json({
            message : "contact created",
            data : ContactService
         })
     } catch (error) {
        return res.status(404).json({
            message : "Error creating user"
         })
    
     }
}



export const readAllContacts = async (req:Request, res:Response): Promise<Response> => {
    try {
       const Contacts = await contactModel.find( )
        return res.status(201).json({
           message : "get all contact",
           data : Contacts
        })
    } catch (error) {
       return res.status(404).json({
           message : "Error reading All contacts"
        })
   
    }
}


export const readOneContact = async (req:Request, res:Response): Promise<Response> => {
    try {

        const {id} = req.params

       const Contact = await contactModel.findById(id )
        return res.status(201).json({
           message : "get one contact",
           data : Contact
        })
    } catch (error) {
       return res.status(404).json({
           message : "Error reading contact"
        })
   
    }
}


export const updateOneContact = async (req:Request, res:Response): Promise<Response> => {
    try {

        const {id} = req.params
  const {name, phoneNumber, type} = req.body
   const avatar = await  name.charAt().toUpperCase()
  const  updateContact = await contactModel.findByIdAndUpdate(id, {
        name,
        phoneNumber,
        type,
        
       } )

if(!updateContact) {
    return res.status(404).json({
        message : "Invalid contact"
     });
} else {
const contact =  await contactModel.findByIdAndUpdate(id,
    {
        type,
        phoneNumber,
        name,
        contactAvatar:avatar
        
    },
    {new: true},
    )

        return res.status(201).json({
           message : "contact updated",
           data : contact
        }) 
    }
    } catch (error) {
       return res.status(404).json({
           message : "Error updating contact"
        })
   
    }
}


export const deleteOneContact = async (req:Request, res:Response): Promise<Response> => {
    try {

        const {id} = req.params

       const Contactdelete = await contactModel.findByIdAndDelete(id )
        return res.status(200).json({
           message : "Contact deleted",
           data : Contactdelete
        })
    } catch (error) {
       return res.status(404).json({
           message : "Error deleting contact"
        })
   
    }
}

export const getContactsByType = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { type } = req.params;
  
      const contacts = await contactModel.find({ type })
      .sort({name:1});
  
      return res.status(200).json({
        message: "Get contacts by type",
        data: contacts,
      });
    } catch (error) {
      return res.status(404).json({ message: "Error getting contacts by type" });
    }
  }


  export const getContactByAlphabet = async (req: Request, res: Response) => {
    try {
      const { contactAvatar } = req.params;
  
      const alphabet = await contactAvatar.toUpperCase();
  
      const user = await contactModel
        .find({ contactAvatar: alphabet })
        .sort({ name: 1 });
  
      return res.status(200).json({
        message: "View all contacts under  category",
        data: user,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: `Error requesting for a user: ${error.message}`,
        error,
      });
    }
  };


