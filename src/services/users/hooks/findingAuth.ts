import { Hook, HookContext } from '@feathersjs/feathers';
import { checkContext } from 'feathers-hooks-common';

export const findingAuth: Hook = async (context: HookContext<any>) => {
    checkContext(context, 'after', [ 'find' ], 'findingAuth');
    const { result , params, service } = context;
    console.log('Query result: ', result);
    console.log('Query params: ', params);
    // console.log('Query service: ', service);
    return context;
}

export default findingAuth;