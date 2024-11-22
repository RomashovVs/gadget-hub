'use server';

import {User} from '@/models';

const addUser = async (user: {login: string; password: string}) => {
    const newUser = new User(user);

    await newUser.save();

    return;
};

export {addUser};
