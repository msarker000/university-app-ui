import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

//graphql
const URI = 'http://localhost:4000/graphql';


const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(
        {
            headers: {
                authorization: localStorage.getItem('id_token'),
            }
        }
    )
    return forward(operation);
})

const httpLink = new HttpLink({ uri: URI})
const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
};

// Create the apollo client
export const APPLLO_CLIENT = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
});


export default APPLLO_CLIENT;

