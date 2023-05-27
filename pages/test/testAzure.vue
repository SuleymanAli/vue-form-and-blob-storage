<template>
  <div class="container my-6">
    <div>
      <label
        >File
        <input
          type="file"
          ref="image"
          multiple
          @change="handleFileUpload($event)"
        />
      </label>
      <br />
      <br />
      <button v-on:click="submitFile()">Submit</button>
    </div>
    <button class="my-4" @click="testLegacy">Test</button>
    <button @click="test" class="flex">get image</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { getBase64 } from '@/utils/helpers'

async function testLegacy() {
  const { data, error } = await fetch('/api/test')
  try {
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

const fileInput = ref(null)
const image = ref('')
async function handleFileUpload(e) {
  const file = e.target.files[0]
  image.value = file
  if (image.value)
    image.value.src = (window.URL ? URL : webkitURL).createObjectURL(
      image.value
    )
  const img = await getBase64(image.value)
  console.log(image.value)
  console.log(img)
  image.value.base64 = img
}

function test() {
  useFetch('/api/getImage').then((res) => console.log(res))
}

async function submitFile(e) {
  const formdata = new FormData()
  try {
    formdata.append('file', image.value)
    console.log('image.value', image.value)
    const { data, error } = await axios.post('/api/hello', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log('server', data)
  } catch (error) {
    console.log(error)
  }
  //   const { data, error } = await useFetch('/api/setImage', formdata, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     method: 'POST',
  //   })
  //   console.log('data from server', data.value)
  // } catch (error) {
  //   console.log(error)
  // }
  /* 3 */
  // let imageFile = e.target.files[0]
  // const fileReader = new FileReader()
  // fileReader.readAsArrayBuffer(imageFile)
  // fileReader.onload = () => {
  //   const imageBlob = new Blob([fileReader.result], { type: imageFile.type })
  //   console.log(
  //     1,
  //     imageBlob.text().then((res) => res)
  //   )
  //   axios
  //     .post('/api/setImage', imageBlob, {
  //       headers: {
  //         'Content-Type': imageFile.type,
  //       },
  //       method: 'POST',
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
}

// async function handleFileUpload(e) {
//   // uploadFile.value = await getBase64(e.target.files[0])
//   uploadFile.value = e.target.files[0]
//   // console.log(uploadFile.value)
//   // console.log(new Blob([uploadFile.value]))
// }

// async function onSubmit() {
//   const formdata = new FormData()
//   formdata.append('file', uploadFile.value)
//   try {
//     const { data } = await axios.post(
//       'http://localhost:8000/api/v1/tests/upload',
//       formdata,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     )
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
</script>
