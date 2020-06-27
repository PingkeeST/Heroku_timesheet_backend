// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const modelName = 'users';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
  
    auth0Id: { type: String },
  
    googleId: { type: String },
  
    facebookId: { type: String },
  
    githubId: { type: String },

    username: { type: String, unique: true, lowercase: true },
    profileName: { type: String },
    gender: { type: String, lowercase: true },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
    location: { type: Array, default: [{name: ''}] },
    dob: { type: String },
    friends: { type: Array },
    status: { type: Boolean },
  
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
}
