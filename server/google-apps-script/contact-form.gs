/**
 * Google Apps Script — Contact Form → Google Sheets (routed by inquiry type)
 *
 * Setup:
 * 1. Create a Google Sheet (one workbook). Tabs are created automatically on first submission:
 *    - General Query
 *    - Clinical Appointments
 *    - Course Enrollment
 * 2. Open Extensions → Apps Script, paste this file, save.
 * 3. Project Settings → Script properties → add CONTACT_FORM_SECRET (any long random string).
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL into GOOGLE_SHEETS_WEBHOOK_URL in your .env
 * 6. Put the same secret in GOOGLE_SHEETS_SECRET in your .env
 *
 * After updating this script, create a new deployment version so changes take effect.
 */

const HEADERS = ['Timestamp', 'Name', 'Phone', 'Email', 'Preferred Date', 'Message']

const SHEET_BY_INQUIRY_TYPE = {
  'general-inquiry': 'General Query',
  'clinical-appointment': 'Clinical Appointments',
  'course-enrollment': 'Course Enrollment',
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents)
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('CONTACT_FORM_SECRET')

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ success: false, error: 'Unauthorized' }, 401)
    }

    const inquiryTypeKey = payload.inquiryTypeKey || ''
    const sheetName = SHEET_BY_INQUIRY_TYPE[inquiryTypeKey]

    if (!sheetName) {
      return jsonResponse({ success: false, error: 'Invalid inquiry type.' }, 400)
    }

    const sheet = getOrCreateSheet(sheetName)
    sheet.appendRow([
      payload.timestamp || new Date().toISOString(),
      payload.name || '',
      payload.phone || '',
      payload.email || '',
      payload.preferredDate || '',
      payload.message || '',
    ])

    return jsonResponse({ success: true, sheet: sheetName })
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Server error' }, 500)
  }
}

function getOrCreateSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = spreadsheet.getSheetByName(sheetName)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName)
    sheet.appendRow(HEADERS)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }

  return sheet
}

function jsonResponse(body, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  )

  if (statusCode && statusCode >= 400) {
    Logger.log('Error response: ' + JSON.stringify(body))
  }

  return output
}
