import { UseGuards } from '@nestjs/common';
import {
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { EnrollmentsService } from '../../../services/enrollments.service';
import { StudentsService } from '../../../services/students.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
// import { AuthUser, CurrentUser } from '../../auth/current-user';
import { Student } from '../models/student';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  // Não é mais necessário pois a informação vem de purchases authUserId
  // @Query(() => Student)
  // @UseGuards(AuthorizationGuard)
  // me(@CurrentUser() user: AuthUser) {
  //   return this.studentsService.getStudentByAuthUserId(user.sub);
  // }

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents();
  }

  @ResolveField()
  enrollments(@Parent() student: Student) {
    return this.enrollmentsService.listEnrollmentsByStudent(student.id);
  }

  @ResolveReference()
  resolveReference(reference: { authUserId: string }) {
    return this.studentsService.getStudentByAuthUserId(reference.authUserId);
  }
}
