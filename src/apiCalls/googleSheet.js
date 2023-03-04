const { GoogleSpreadsheet } = require("google-spreadsheet");

export const saveResponse = async (data) => {
  try {
    const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
    });
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0];
    const addRowResponse = await sheet.addRow(data);
    if (addRowResponse?._rowNumber) return true;
  } catch (error) {
    console.log("Unable to save form data", error);
  }
};
