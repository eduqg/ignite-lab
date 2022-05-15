import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Enrollment } from './enrollment';

// Diretiva extends porque complementa user que ja vem de purchases, purchases é a aplicação Main para representar o usuário
@ObjectType('User')
@Directive('@extends')
@Directive('@key(fields: "authUserId")')
export class Student {
  id: string;

  @Field(() => ID)
  @Directive('@external')
  authUserId: string;

  @Field(() => [Enrollment])
  enrollments: Enrollment[];
}
