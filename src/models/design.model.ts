import { Model, DataTypes, Optional } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // Importing 'v4' as 'uuidv4' for TypeScript
import sequelize from '../config/database';

interface DesignApplicationAttributes {
  id: string; // Add UUID field
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  yearsOfDesignExperience: '1-2 years' | 'Above 2 years';
  designSpecialization: 'Ux Design' | 'Graphics Design' | 'Ux Researcher';
  portfolioUrl?: string | null;
  careerGoal: string;
  commitmentForm: 'Yes' | 'No';
  getToKnowUs: 'GDSC OAU' | 'GDSC FUTA' | 'Code Plateau' | 'Akure Tech Hub' | 'GDSC Unilag' | 'GDSC Abuja';
}

interface DesignApplicationCreationAttributes
  extends Optional<DesignApplicationAttributes, 'id' | 'portfolioUrl'> {}

class DesignApplicationModel
  extends Model<
    DesignApplicationAttributes,
    DesignApplicationCreationAttributes
  >
  implements DesignApplicationAttributes {
  declare id: string; // Declare UUID field
  declare firstName: string;
  declare lastName: string;
  declare phoneNumber: string;
  declare city: string;
  declare yearsOfDesignExperience: '1-2 years' | 'Above 2 years';
  declare designSpecialization: 'Ux Design' | 'Graphics Design' | 'Ux Researcher';
  declare portfolioUrl?: string | null;
  declare careerGoal: string;
  declare commitmentForm: 'Yes' | 'No';
  declare getToKnowUs: 'GDSC OAU' | 'GDSC FUTA' | 'Code Plateau' | 'Akure Tech Hub' | 'GDSC Unilag' | 'GDSC Abuja';
}

DesignApplicationModel.init(
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
    yearsOfDesignExperience: {
      type: DataTypes.ENUM('1-2 years', 'Above 2 years'),
      allowNull: false,
    },
    designSpecialization: {
      type: DataTypes.ENUM('Ux Design', 'Graphics Design', 'Ux Researcher'),
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
  { sequelize, modelName: 'design_applications' } 
);

export default DesignApplicationModel;
