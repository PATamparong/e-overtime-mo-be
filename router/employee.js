const employeeController = require("../controller/employee");

module.exports = (app) => {
  app.get("/api/getAllEmployees", employeeController.employeeGetAllMajorList);
  app.post("/api/insert", employeeController.insertEmployeeOvertimeToSheet);
};
