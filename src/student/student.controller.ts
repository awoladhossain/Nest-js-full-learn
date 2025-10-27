import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAll() {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  getOneStudent(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }
  // post
  @Post()
  createAstudent(@Body() body: { name: string; age: number }) {
    return this.studentService.createStudent(body);
  }
  // put
  @Put(':id')
  updateFullData(
    @Param('id') id: string,
    @Body() body: { name: string; age: number },
  ) {
    return this.studentService.updateStudent(Number(id), body);
  }
  // patch
  @Patch(':id')
  updatePatchStudnet(
    @Param('id') id: string,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), body);
  }

  // delete
  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
