import {
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import commentType from '../../types/comment';
import CommentModel from '../../../models/comment';

export default {
    type: new GraphQLList(commentType),
    args: {
        articleId: {
            name: 'articleId',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve (root, params, options) {
        return CommentModel
            .find({
                articleId: params.articleId
            })
            .exec();
    }
};