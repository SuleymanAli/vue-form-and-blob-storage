const sgMail = require('@sendgrid/mail')

const data = 'purchasinghelp@atriaseniorliving.com'

// Load env variables
const recipients = process.env.EMAIL_RECIPIENTS
  ? process.env.EMAIL_RECIPIENTS.split(',').map((n) => n.trim())
  : 'jesse.hazel@atriaseniorliving.com'
// Setup relevant dependencies
sgMail.setApiKey(
  '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'
)
/**
 * Send's a POST body to a pre-determined email
 */
module.exports = async function (payload, meta = {}, test = false) {
  console.log(11)
  // Set our return payload
  let output = { status: 400, msg: 'Invalid body' }
  // Format a date
  const d = meta.timestamp ?? new Date()
  const timestamp = d.toLocaleString('en-US', {
    timeZone: 'America/Kentucky/Louisville',
  })
  // Check to see if a failure reason was included in the meta
  let failureReason = meta.msg ?? 'could not determine reason'
  // Generate message body
  let message = `We've detected a possible failure for a lead submission into Active Campaign.<br><br>
    Date of submission: <i>${timestamp}</i><br>
    Cause of failure: <i>${failureReason}</i><br><br>
    Please verify if the following lead made it into the database properly.<br><br>
    <table>
    <tbody>`
  // Format body as a key/value table
  for (key in payload) {
    message += `<tr><td>${key}</td><td>${payload[key]}</td></tr>`
  }
  message += `</tbody>
                </table>`
  // Provide response for dev testing
  let subjectPrepend = ''
  if (test) {
    subjectPrepend = '*DEV TEST*'
    message = `<div style="color: red;font-weight: bold;">DEV TEST - this notification is part of development testing. </div><br>${message}`
  }
  // Create new email object
  const msg = {
    to: 'johndavisreview76@gmail.com',
    from: 'DoNotReply@atriaseniorliving.com',
    subject: `${subjectPrepend} Active Campaign form submission failure`,
    text: message,
    html: message,
  }
  // Send the message
  try {
    const response = await sgMail.send(msg)
    if (response[0].statusCode !== 202) throw 'Sendgrid unable to send email'
    output.status = 200
    output.msg = 'Email sent to: ' + recipients.join(',')
  } catch (e) {
    output.status = 400
    output.msg = e
  }
  console.log(output)
  return output
}
