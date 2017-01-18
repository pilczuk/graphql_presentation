import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import articleType from '../../types/article';
import ArticleModel from '../../../models/article';

export default {
    type: new GraphQLList(articleType),
    args: {
        userId: {
            name: 'userId',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
        return ArticleModel
            .find({
                userId: params.userId
            })
            .exec();
    }
};