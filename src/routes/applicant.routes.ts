import express, { Router } from 'express';
import SoftwareEngineerApplicationController from '../controllers/softwareEngineerApplicationController';
import {
    createProductManagementApplication,
    getProductManagementApplications,
} from '../controllers/softwareEngineerApplicationController';


const router: Router = express.Router();

// Create Software Engineer Application
router.post('/applications', SoftwareEngineerApplicationController.createSoftwareEngineerApplication);

// Get all applications
router.get('/applications', SoftwareEngineerApplicationController.getApplications);

// Add other routes for update and delete operations as needed



// Create Product Management Application
router.post('/product/applications', createProductManagementApplication);

// Get all Product Management Applications
router.get('/product/applications', getProductManagementApplications);

export default router;
