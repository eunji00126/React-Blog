import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri:"https://react-blog-three.vercel.app/"
});

export default client;