import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Abul Bhai',
      age: 29,
    },
    {
      id: 2,
      name: 'Kabul Bhai',
      age: 30,
    },
  ];
  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException('student not found');
    }
    return student;
  }
  // post
  createStudent(data: { name: string; age: number }) {
    const newStudnet = {
      id: this.students.length + 1,
      ...data,
    };
    this.students.push(newStudnet);
    return newStudnet;
  }
  // PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException('student not found');
    }
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  // patch
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }
  // delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException('student not found');
    }
    const studentDeleted = this.students.splice(index, 1);
    return { mesaage: 'student deleted', studentDeleted };
  }
}
