import { Hook, HookContext } from '@feathersjs/feathers';
import { checkContext } from 'feathers-hooks-common';

export const createProfile: Hook = async (context: HookContext<any>) => {
    checkContext(context, 'after', [ 'create' ], 'createProfile');
    const { result, app } = context;
    // console.log('creating profile: ', result.location);
    app.service('profile').create({
        userId: result._id,
        profileName: result.profileName,
        ...result,
    });
    // if (!result.location) {
    //     app.service('USER').patch(result._id, {
    //         location: [{name: ''}],
    //     })
    // }
    
    return context;
}

export default createProfile;