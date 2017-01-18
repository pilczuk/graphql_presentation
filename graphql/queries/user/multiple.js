import {
    GraphQLList
} from 'graphql';

import userType from '../../types/user';
import UserModel from '../../../models/user';

export default {
    type: new GraphQLList(userType),
    args: {},
    resolve (root, params, options) {

        return UserModel
            .find()
            .exec();
    }
};