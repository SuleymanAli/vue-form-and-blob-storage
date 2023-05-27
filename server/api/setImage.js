// const fs = require('fs')
// const { BlobServiceClient } = require('@azure/storage-blob')
// import { readFiles } from 'h3-formidable'
import { Blob } from 'buffer'
import Busboy from 'busboy'
// import useFiles from '~~/composables/useFiles'
import {
  defineEventHandler,
  defineNodeMiddleware,
  readMultipartFormData,
} from 'h3'
// import { BlobServiceClient } from '@azure/storage-blob/dist-esm/storage-common'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  // const { file, fields } = await useFiles(event)
  const d = await readMultipartFormData(event)
  return 'ready'
  // only files
  // const files = await readFiles(event)
  // return { file: files.file[0], blob: new Blob([files.file[0]]) }
  return { file, fields }
  // return {
  //   files,
  // }

  // const query = getQuery(event)
  /* Request */
  var myHeaders = new Headers()
  myHeaders.append('x-ms-blob-type', 'BlockBlob')
  myHeaders.append('Content-Type', 'application/octet-stream')
  myHeaders.append('Content-Length', files.file[0].size)
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    redirect: 'follow',
    body: files.file[0],
  }
  return fetch(
    'https://storageaccountatriadmftp.blob.core.windows.net/vendor-intake/sample2?sp=rwl&st=2023-02-22T03:36:33Z&se=2024-02-29T11:36:33Z&spr=https&sv=2021-06-08&sr=c&sig=khqF5Jv4BPtxQI6k2QgX7ojc3Yv5VBxwDPxxp3C9QSk%3D',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return {
        api: 'works',
        body: files.file[0],
        message: result,
      }
    })
    .catch((error) => console.log('error', error))
})

// return
//   const AZURE_STORAGE_CONNECTION_STRING =
//     'https;AccountName=storageaccountatriadmftp;AccountKey=KhpFXJN+10I+kGy6UK+wXkGnvKF9Xjl7SvrstaCD0mHwzyDa0m/H5irFrxb7gEIuhTvPIMr25qtc+AStQjn3FQ==;EndpointSuffix=core.windows.net'

//   if (!AZURE_STORAGE_CONNECTION_STRING) {
//     throw Error('Azure Storage Connection string not found')
//   }

//   /* 1. Init - Create the BlobServiceClient object with connection string */
//   const blobServiceClient = BlobServiceClient.fromConnectionString(
//     AZURE_STORAGE_CONNECTION_STRING
//   )

//   /* 2. Get Container */
//   const containerName = 'vendor-intake'
//   // Get a reference to a container
//   const containerClient = blobServiceClient.getContainerClient(containerName)

//   /* 3. Upload */

//   // await blockBlobClient.upload(
//   //   fileContentsAsString,
//   //   fileContentsAsString.length,
//   //   uploadOptions
//   // )

//   const blockBlobClient = containerClient.getBlockBlobClient('sample2')

//   console.log(
//     `\nUploading to Azure storage as blob\n\tname: ${'sample2'}:\n\tURL: ${
//       blockBlobClient.url
//     }`
//   )
//   console.log(files.file[0])
//   /* Upload File Methods */
//   const uploadBlobResponse = await blockBlobClient.uploadData(
//     Buffer.from(files.file[0], 'base64')
//   )
//   // const uploadBlobResponse = await blockBlobClient.uploadFile(req.file.path)
//   // const uploadBlobResponse = await blockBlobClient.syncUploadFromURL(
//   //   req.file.path
//   // )

//   // const contents = fs.readFileSync(req.file.path)
//   const buffedInput = Buffer.from(files[0].file.filepath, 'base64')

//   console.log(
//     `Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`
//   )

//   res.json({
//     file: req.file,
// })
// })
