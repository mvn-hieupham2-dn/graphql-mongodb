import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput as CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-student.input';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((_returns) => LessonType)
  lesson(@Args('id') id:string,) {
   return this.lessonService.getLesson(id)
  }
  @Query(_returns => [LessonType])
  lessons(){
    return this.lessonService.getLessons()
  }
  @Mutation((_returns) => LessonType)
  createLesson(
  @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput)
  }
  @Mutation((_returns) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput') assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
  
}
