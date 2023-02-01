function getStudentsByLocation(students, city) {
  return studentList.filter((students) => students.location === city);
}

export default getStudentsByLocation;
