import { Request, Response } from 'express';
import SoftwareEngineerApplicationModel from '../models/applicant.model';
import ProductManagementApplicationModel from '../models/productManagement';




//Software Engineering
export const createSoftwareEngineerApplication = async (req: Request, res: Response) => {
  try {
    const application = await SoftwareEngineerApplicationModel.create(req.body);
    return res.status(201).json(application);
  } catch (error) {
    console.error('Error creating software engineer application:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getApplications = async (_req: Request, res: Response) => {
  try {
    const applications = await SoftwareEngineerApplicationModel.findAll();
    return res.status(200).json(applications);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Product Management Application controller
export const createProductManagementApplication = async (req: Request, res: Response) => {
  try {
    const application = await ProductManagementApplicationModel.create(req.body);
    return res.status(201).json(application);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getProductManagementApplications = async (_req: Request, res: Response) => {
  try {
    const applications = await ProductManagementApplicationModel.findAll();
    return res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  createSoftwareEngineerApplication,
  getApplications,
  createProductManagementApplication,
  getProductManagementApplications
};
