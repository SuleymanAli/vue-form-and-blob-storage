// import * as formidable from 'formidable'
// import { createApp, useBase, defineEventHandler } from 'h3'

// const form = formidable({ multiples: true })

// app.use('/upload', async (req, res) => {
//   form.parse(req, (err, fields, files) => {
//     // do something
//   })

//   // return {
//   //   message: 'hellox',
//   // }
// })

// export default useBase('/api/hello', router.handler)
//
export default defineEventHandler(async (event) => {
  const d = await readMultipartFormData(event)

  var myHeaders = new Headers()
  myHeaders.append('x-ms-blob-type', 'BlockBlob')
  myHeaders.append('Content-Type', 'application/octet-stream')
  console.log(d[0].data)
  // myHeaders.append('Content-Length', files.file[0].size)
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    redirect: 'follow',
    body: d[0].data,
  }
  return fetch(
    'https://storageaccountatriadmftp.blob.core.windows.net/vendor-intake/sample2?sp=rwl&st=2023-02-22T03:36:33Z&se=2024-02-29T11:36:33Z&spr=https&sv=2021-06-08&sr=c&sig=khqF5Jv4BPtxQI6k2QgX7ojc3Yv5VBxwDPxxp3C9QSk%3D',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return {
        api: 'works',
        body: d[0].data,
        message: result,
      }
    })
    .catch((error) => console.log('error', error))

  return {
    message: d,
  }
})
