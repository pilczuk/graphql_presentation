import {
    GraphQLList
} from 'graphql';

import articleType from '../../types/article';
import ArticleModel from '../../../models/article';

export default {
    type: new GraphQLList(articleType),
    args: {},
    resolve (root, params, options) {
        return ArticleModel
            .find()
            .exec();
    }
};