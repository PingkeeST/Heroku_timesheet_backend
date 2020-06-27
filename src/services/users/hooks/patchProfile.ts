import { Hook, HookContext } from '@feathersjs/feathers';
import { checkContext } from 'feathers-hooks-common';

export const patchProfile: Hook = async (context: HookContext<any>) => {
    checkContext(context, 'after', [ 'patch' ], 'patchProfile');
    const { result, app } = context;
    // check if profile is touched.
    console.log('finding user: ', result);
    await app.service('profile').find({
        query: {
            userId: result._id,
            touch: false,
        },
    }).then((response: any) => {
        // update profile if user is untouch
        if (response.data.length > 0) {
            console.log('patching untouh: ', response.data.profileName);
            app.service('profile').patch(result._id, {
                profileName: result.profileName,
                gender: result.gender,
                ...result,
            })
        }
    });
    return context;
}

export default patchProfile;