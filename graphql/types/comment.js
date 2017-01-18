import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

import userType from './user';
import UserModel from '../../models/user';

export default new GraphQLObjectType({
    name: 'Comment',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        articleId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        text: {
            type: GraphQLString
        },
        user: {
            type: userType,
            resolve ( comment) {
                return UserModel
                    .findById(comment.userId)
                    .then(res => res);
            }
        }
    }
});