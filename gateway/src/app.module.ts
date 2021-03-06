import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        cors: true,
        context: ({ req }) => {
          return { headers: req.headers };
        },
      },
      gateway: {
        // Para ele entender qual o schema graphql deve chamar
        supergraphSdl: new IntrospectAndCompose({
          // Cria um supergrafo dos schemas dos dois servicos
          subgraphs: [
            { name: 'purchases', url: 'http://localhost:3331/graphql' },
            { name: 'classroom', url: 'http://localhost:3334/graphql' },
          ],
        }),
        buildService: ({ url }) => {
          return new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request.http.headers.set(
                'authorization',
                context?.['headers']?.['authorization'],
              );
            },
          });
        },
      },
    }),
  ],
})
export class AppModule {}
