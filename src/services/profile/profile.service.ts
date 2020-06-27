// Initializes the `profile` service on path `/profile`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Profile } from './profile.class';
import createModel from '../../models/profile.model';
import hooks from './profile.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'profile': Profile & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/profile', new Profile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('profile');

  service.hooks(hooks);
}
