import {
    GraphQLInputObjectType,
        GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'UserInput',
    fields: {
        username: {type: GraphQLString},
        avatar: {type: GraphQLString},
        birthDate: {type: GraphQLString}
    }
});