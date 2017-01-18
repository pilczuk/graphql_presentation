import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

import articleType from '../../types/article';
import ArticleModel from '../../../models/article';

export default {
    type: articleType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
        return ArticleModel
            .findById(params.id)
            .exec();
    }
};