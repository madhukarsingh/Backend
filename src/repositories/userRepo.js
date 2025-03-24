import user from '../schema/user.js';

export const findUserByEmail = async (email) => {
    try {
        const user = await user.findOne({email});
    } catch (error) {
        console.log(error)
    }
}


export const findAllUsers = async () => {
    try {
        const users = await user.find();
        return users;
    } catch (error) {
        console.log(error)
    }
}