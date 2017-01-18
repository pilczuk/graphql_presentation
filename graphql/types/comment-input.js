import {
    GraphQLInputObjectType,
    GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'CommentInput',
    fields: {
        articleId: {type: GraphQLString},
        userId: {type: GraphQLString},
        text: {type: GraphQLString}
    }
});