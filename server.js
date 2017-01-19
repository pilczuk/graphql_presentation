import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

const mongodb = mongoose.connect(
    'mongodb://localhost:27017/graphQl-test'
);

const app = express();
app.use('/graphql', graphqlHTTP(async () => ({
    schema: schema,
    graphiql: true,
    pretty: true,
    context: {
        mongodb: await mongodb,
    },
    formatError: error => ({
        message: error.message,
        locations: error.locations,
        stack: error.stack
    })
})));

app.use('/', express.static('static'))

let server = app.listen(3000, () => {
    console.log('Running a GraphQL API server at http://localhost:3000/graphql');
});
