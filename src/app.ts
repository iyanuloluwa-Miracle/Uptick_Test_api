import express from 'express';
import softwareEngineerApplicationRoutes from '../src/routes/applicant.routes';
import sequelize from "./config/database";
import config from "./config/config";



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the Software Engineer Application routes
app.use('/api', softwareEngineerApplicationRoutes);

const port: number = config.port || 3000;

// Load all the models to the db, check connection and start app
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error: Error) => console.log(`error connecting: ${error.message}`));