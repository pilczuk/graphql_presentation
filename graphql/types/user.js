import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

import articleType from './article';
import ArticleModel from '../../models/article';


export default new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        username: {
            type: GraphQLString
        },
        avatar: {
            type: GraphQLString
        },
        birthDate: {
            type: GraphQLString
        },
        articles: {
            type: new GraphQLList(articleType),
            resolve ( user) {

                return ArticleModel
                    .find({
                        userId: user._id
                    })
                    .then(res => res);
            }
        }
    })
});
