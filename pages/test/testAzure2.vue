<template>
  <div class="container">
    <div>
      <label
        >File
        <input
          type="file"
          ref="image"
          multiple
          @change="handleImageUpload($event)"
        />
      </label>
      <br />
      <br />
      <button v-on:click="submitFile()">Submit</button>
    </div>
    <button @click="test">sd</button>
  </div>
</template>

<script setup>
import axios from 'axios'
import { getBase64 } from '@/utils/helpers'
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

const handleImageUpload = async (evt) => {
  const target = evt.target

  if (target.files) {
    const fileObj = target.files[0]

    const upload = {
      // path: id(memberName(store.selected), '-'),
      name: fileObj.name,
      file: await getBase64(fileObj),
      type: fileObj.type,
    }

    console.log('data from client', upload)
    try {
      const { data, error } = await useFetch('/api/setImage', {
        headers: { 'Content-type': 'multipart/form-data' },
        method: 'POST',
        body: upload,
      })

      console.log('data from server', data.value)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
