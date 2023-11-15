import { Model, DataTypes, Optional } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // Importing 'v4' as 'uuidv4' for TypeScript
import sequelize from '../config/database';

interface ProductManagementApplicationAttributes {
  id: string; // Add UUID field
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  yearsOfExperience: '1-2 years' | 'Above 2 years';
  productManagementSkills: 'Product Strategy' | 'Agile Development' | 'Market Research' | 'Project Management' | 'Others';
  portfolioUrl?: string | null;
  careerGoal: string;
  commitmentForm: 'Yes' | 'No';
  getToKnowUs: 'GDSC OAU' | 'GDSC FUTA' | 'Code Plateau' | 'Akure Tech Hub' | 'GDSC Unilag' | 'GDSC Abuja';
}

interface ProductManagementApplicationCreationAttributes
  extends Optional<ProductManagementApplicationAttributes, 'id' | 'portfolioUrl'> {}

class ProductManagementApplicationModel
  extends Model<
    ProductManagementApplicationAttributes,
    ProductManagementApplicationCreationAttributes
  >
  implements ProductManagementApplicationAttributes {
  declare id: string; // Declare UUID field
  declare firstName: string;
  declare lastName: string;
  declare phoneNumber: string;
  declare city: string;
  declare yearsOfExperience: '1-2 years' | 'Above 2 years';
  declare productManagementSkills: 'Product Strategy' | 'Agile Development' | 'Market Research' | 'Project Management' | 'Others';
  declare portfolioUrl?: string | null;
  declare careerGoal: string;
  declare commitmentForm: 'Yes' | 'No';
  declare getToKnowUs: 'GDSC OAU' | 'GDSC FUTA' | 'Code Plateau' | 'Akure Tech Hub' | 'GDSC Unilag' | 'GDSC Abuja';
}

ProductManagementApplicationModel.init(
  {
    id: {
      type: DataTypes.UUID, // Set the type to UUID
      defaultValue: () => uuidv4(), // Set default value to generate UUID
      primaryKey: true, // Set as primary key
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearsOfExperience: {
      type: DataTypes.ENUM('1-2 years', 'Above 2 years'),
      allowNull: false,
    },
    productManagementSkills: {
      type: DataTypes.ENUM('Product Strategy', 'Agile Development', 'Market Research', 'Project Management', 'Others'),
      allowNull: false,
    },
    portfolioUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    careerGoal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commitmentForm: {
      type: DataTypes.ENUM('Yes', 'No'),
      allowNull: false,
    },
    getToKnowUs: {
      type: DataTypes.ENUM(
        'GDSC OAU',
        'GDSC FUTA',
        'Code Plateau',
        'Akure Tech Hub',
        'GDSC Unilag',
        'GDSC Abuja'
      ),
      allowNull: false,
    },
  },
  { sequelize, modelName: 'product_management_applications' } 
);

export default ProductManagementApplicationModel;
