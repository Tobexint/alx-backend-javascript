export default function createIteratorObject(report) {
  /* eslint-disable no-unused-vars */
  const employee = [];
  for (const [dept, emply] of Object.entries(report.allEmployees)) {
    for (const em of emply) {
      employee.push(em);
    }
  }

  return employee;
}
