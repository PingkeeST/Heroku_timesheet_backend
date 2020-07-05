import { Hook, HookContext } from '@feathersjs/feathers';
import { checkContext } from 'feathers-hooks-common';

export const checkUserCreation: Hook = async (context: HookContext<any>) => {
    checkContext(context, 'before', [ 'create', 'patch' ], 'checkUserCreation');
    const { data, app } = context;
    if (!data.location) {
        // console.log('location is null: ', data.location);
        data.location = [{name: ''}]
    }
    return context;
}

export default checkUserCreation;