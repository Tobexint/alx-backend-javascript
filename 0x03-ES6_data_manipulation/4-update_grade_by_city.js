function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((std) => std.location === city).map((std) => {
    std.grade = 'N/A'; // eslint-disable-line no-param-reassign
    for (const grd of newGrades) {
      if (grd.studentId === std.id) {
        std.grade = grd.grade; // eslint-disable-line no-param-reassign
      }
    }
    return std;
  });
}

export default updateStudentGradeByCity;
