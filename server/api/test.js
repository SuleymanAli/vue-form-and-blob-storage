import SendEmail from '../../utils/sendEmail.js'

export default defineEventHandler((event) => {
  SendEmail([], '', true)
  return {
    message: 'code404',
  }
})
