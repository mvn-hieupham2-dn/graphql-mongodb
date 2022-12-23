import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Query((_returns) => StudentType)
  lesson(@Args('id') id:string,) {
   return this.studentService.getStudent(id)
  }
  @Query(_returns => [StudentType])
  lessons(){
    return this.studentService.getStudents()
  }
  @Mutation((_returns) => StudentType) 
  createStudent(
  @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput)
  }
  
}
