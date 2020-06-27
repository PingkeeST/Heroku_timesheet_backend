import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import createProfile from './hooks/createProfile';
import patchProfile from './hooks/patchProfile';
import findingAuth from './hooks/findingAuth';
import checkUserCreation from './hooks/checkUserCreation';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [ authenticate('jwt')],
    get: [ authenticate('jwt') ],
    create: [ hashPassword('password'),
    checkUserCreation,
    ],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt'),
    checkUserCreation,
    ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [
      //findingAuth
    ],
    get: [],
    create: [
      createProfile,
    ],
    update: [],
    patch: [
      patchProfile,
    ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
