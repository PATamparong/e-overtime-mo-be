const { google } = require(`googleapis`);
const SPREADSHEET_ID = `1MRjP3J2hQEg_BkK7LxymqUMQVveVI_-qabvOHYOk37g`;
const authorized = require("./index");

async function listMajors(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `Class Data!A2:F`,
  });

  return res.data;
}

async function insertEmployeeOvertimeToSheet(
  auth,
  employeeId,
  employeeName,
  branch,
  position,
  overtimeSpecification,
  dateFiled
) {
  const sheets = google.sheets({ version: "v4", auth });
  console.log(
    {
      employeeId,
      employeeName,
      branch,
      position,
      overtimeSpecification,
      dateFiled,
    },
    "PAYLOAD"
  );
  return sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: `Employee Data!A2:F`,
    valueInputOption: `USER_ENTERED`,
    insertDataOption: `INSERT_ROWS`,
    resource: {
      values: [
        [
          employeeId,
          employeeName,
          branch,
          position,
          overtimeSpecification,
          dateFiled,
        ],
      ],
    },
  });
}

module.exports = {
  getAllMajorList: authorized(listMajors),
  insertEmployeeOvertimeToSheet: async () =>
    authorized(insertEmployeeOvertimeToSheet),
};
