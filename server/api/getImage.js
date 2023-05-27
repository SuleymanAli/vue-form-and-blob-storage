import { Blob } from 'buffer'
import fs from 'node:fs'
import { sendStream } from 'h3'
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  var myHeaders = new Headers()
  myHeaders.append('x-ms-blog-type', 'BlockBlob')
  myHeaders.append('Accept', 'application/json')

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    encoding: null,
  }
  return fetch(
    // 'https://storageaccountatriadmftp.blob.core.windows.net/vendor-intake/sample?sp=rwl&st=2023-02-22T03:36:33Z&se=2024-02-29T11:36:33Z&spr=https&sv=2021-06-08&sr=c&sig=khqF5Jv4BPtxQI6k2QgX7ojc3Yv5VBxwDPxxp3C9QSk%3D',
    'https://fastly.picsum.photos/id/283/200/300.jpg?hmac=HVbRBUPQVx2vypDRbrSdilx6LhDFbU9jsqNdlKR9J9I',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      // const body = result.toString('base64')
      // const body = new Blob([result])
      // console.log(body)
      return {
        api: 'works',
        query: query,
        body: result,
      }

      return sendStream(event, fs.createReadStream('/public/test.png'))
    })
    .catch((error) => console.log('error', error))
})
