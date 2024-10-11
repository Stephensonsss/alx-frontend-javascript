// 2-get_students_by_loc.js

function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}

module.exports = getStudentsByLocation;

