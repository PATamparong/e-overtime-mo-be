let Employee = require("../model/employee");

module.exports = {
  employeeGetAllMajorList: async (_, res) => {
    const employee = await Employee.employeeGetAllMajorList;

    return res.status(200).send(
      employee.values?.map((item) => {
        return {
          name: item[0],
          gender: item[1],
          classLevel: item[2],
          homeState: item[3],
          major: item[4],
          extraCurricular: item[5],
        };
      })
    );
  },
  insertEmployeeOvertimeToSheet: async (req, res) => {
    const {
      employeeId = "1234",
      employeeName = "1234",
      branch = "1234",
      position = "1234",
      overtimeSpecification = "1234",
      dateFiled = "1234",
    } = req.body;
    console.log(typeof Employee.insertEmployeeOvertimeToSheet, "PRECIOUS");

    await Employee.insertEmployeeOvertimeToSheet(
      employeeId,
      employeeName,
      branch,
      position,
      overtimeSpecification,
      dateFiled
    );

    return res.status(200).send({ error: false, message: "success" });
  },
};
