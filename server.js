const express = require('express')
const cookieParser = require('cookie-parser');
const { ApolloServer } = require('apollo-server-express')
const configs = require('./gql-schema/vs')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



const server = new ApolloServer({
    typeDefs: configs.schema, resolvers: configs.resolvers, tracing: false, context: async ({ req }) => {

        return { 'obj': Date.now() };
    }
})

server.applyMiddleware({ app, path: "/graphql", });



app.listen(3001, () => {
    console.log('server started at 3001')
})

module.exports = { server }