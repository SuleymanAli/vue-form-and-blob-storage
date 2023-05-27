<template>
  <div class="container">
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
    <button @click="test">sd</button>
  </div>
</template>

<script setup>
import axios from 'axios'

async function handleFileUpload(e) {
  let formdata = new FormData()
  formdata.appent(e.tar)
  const file = e

  if (!file) return

  const readData = (f) => console.log(f)
  new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(f)
  })
  const data = await readData(file)
  this.previewFiles = data
}
</script>
