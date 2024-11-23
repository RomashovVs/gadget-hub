'use server';

import {User} from '@/models';

const authenticationUser = async (user: {login: string; password: string}) => {
    const userDb = await User.findOne({login: user.login, password: user.password});

    if (!userDb) {
        return false;
    }

    return true;
};

export {authenticationUser};
