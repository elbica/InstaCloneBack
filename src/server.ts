import {PrismaClient} from '@prisma/client';
import {ApolloServer, gql} from 'apollo-server';

const client = new PrismaClient();

const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    year: Int
    genre: String
    createdAt: String
    updatedAt: String
  }
  type Query {
    hello: String
    movies: [Movie]
    movie(id: Int!): Movie
  }
  type Mutation {
    createMovie(title: String!, year: Int!, genre: String!): Movie
  }
`;
const resolvers = {
  Query: {
    hello: () => 'world',
    movies: () => client.movie.findMany(),
    movie: (_, {id}) => client.movie.findUnique({where: {id}}),
  },
  Mutation: {
    createMovie: (_, {title, year, genre}) =>
      client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log('running on http://localhost:4000/');
});
