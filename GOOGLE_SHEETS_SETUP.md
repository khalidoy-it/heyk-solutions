# Google Sheets Integration - Complete Setup Guide

Follow these steps to set up Google Sheets to automatically receive and store all contact form messages.

## Step 1: Create a Google Sheet (2 minutes)

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Name it: **"Heyk-Solutions Contact Messages"**
4. In row 1, add these headers:
   - **Column A**: `Timestamp`
   - **Column B**: `Name`
   - **Column C**: `Email`
   - **Column D**: `Message`
5. Format row 1 as **Bold** (optional but recommended)
6. **Save the spreadsheet**

## Step 2: Set up Google Apps Script (5 minutes)

1. In your Google Sheet, click **Extensions** → **Apps Script**
   - (If you don't see "Extensions", click the three horizontal lines ☰ menu)
2. Delete any default code in the editor
3. **Copy and paste** this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Extract form data
    const name = data.name || '';
    const email = data.email || '';
    const message = data.message || '';
    
    // Add row to spreadsheet
    sheet.appendRow([timestamp, name, email, message]);
    
    // Send email notification to hello@heyk-solutions.com
    try {
      MailApp.sendEmail({
        to: 'hello@heyk-solutions.com',
        subject: 'New Contact Form Submission - ' + name,
        body: `New message from Heyk-Solutions contact form:\n\n` +
              `Name: ${name}\n` +
              `Email: ${email}\n` +
              `Message:\n${message}\n\n` +
              `---\n` +
              `View all messages in Google Sheets: https://sheets.google.com`
      });
    } catch (emailError) {
      // Email failed but still save to sheet
      console.log('Email notification failed:', emailError);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: 'Message saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
5. Name your project: **"Heyk-Solutions Contact Form"** (optional)

## Step 3: Deploy as Web App (3 minutes)

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Contact Form Handler" (optional)
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (important!)
5. Click **Deploy**
6. **Authorize the script**:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** - it looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
   ⚠️ **IMPORTANT**: Save this URL - you'll need it in the next step!

## Step 4: Update Your Website (1 minute)

1. Open `index.html` in your code editor
2. Find this line (around line 1186):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL'` with your Web App URL from Step 3:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file
5. Upload to GitHub Pages

## Step 5: Test It! (1 minute)

1. Go to your website
2. Fill out the contact form
3. Submit it
4. Check your Google Sheet - you should see a new row with the message!
5. Check your email - you should receive a notification

## Viewing Messages

### Option 1: Google Sheets (Recommended)
- Open your Google Sheet: **"Heyk-Solutions Contact Messages"**
- All messages appear in real-time
- You can:
  - Sort by date
  - Filter by name/email
  - Search messages
  - Export to CSV/Excel
  - Share with team members

### Option 2: Email Notifications
- You'll receive an email to `hello@heyk-solutions.com` for each submission
- Email includes all form data

## Troubleshooting

### Messages not appearing in Google Sheets?

1. **Check the Web App URL**:
   - Make sure it's correct in `index.html`
   - URL should end with `/exec`

2. **Check Google Apps Script**:
   - Go to Apps Script → Check for errors (red text)
   - Make sure deployment is set to "Anyone" can access

3. **Check browser console**:
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for any error messages

4. **Test the script manually**:
   - In Apps Script, click **Run** → Select `doPost`
   - Check for errors

### Email notifications not working?

- Make sure you authorized the script to send emails
- Check spam folder
- Verify email address: `hello@heyk-solutions.com`

## Security Notes

- The Web App URL is public (needed for form submission)
- Only authorized users can view the Google Sheet
- Consider adding rate limiting for production use
- The script validates and sanitizes input automatically

## Advanced: Add More Fields

If you want to add more fields to the form:

1. **Add column headers** in Google Sheet (e.g., "Phone", "Company")
2. **Update the form** in `index.html` to include new fields
3. **Update the script** to include new fields:
   ```javascript
   const phone = data.phone || '';
   sheet.appendRow([timestamp, name, email, phone, message]);
   ```

## Need Help?

- Check Google Apps Script documentation: https://developers.google.com/apps-script
- Google Sheets API: https://developers.google.com/sheets/api

---

**Quick Checklist:**
- [ ] Google Sheet created with headers
- [ ] Apps Script code pasted and saved
- [ ] Web App deployed with "Anyone" access
- [ ] Web App URL copied
- [ ] URL added to `index.html`
- [ ] Form tested and working
- [ ] Messages appearing in Google Sheet ✅
