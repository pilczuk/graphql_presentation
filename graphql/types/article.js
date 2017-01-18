import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID
} from 'graphql';

import commentType from './comment';
import CommentModel from '../../models/comment';

export default new GraphQLObjectType({
    name: 'Article',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        comments: {
            type: new GraphQLList(commentType),
            args: {
                first: {
                    type: GraphQLInt,
                    defaultValue: 20
                }
            },
            resolve (article, args) {

                return CommentModel
                    .find({
                        articleId: article._id
                    })
                    .sort({
                        created_at: -1
                    })
                    .limit(args.first || 20)
                    .then(res => res);
            }
        }
    }
});
