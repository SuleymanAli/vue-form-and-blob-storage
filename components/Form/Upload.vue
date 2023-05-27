<template>
  <div class="mb-5">
    <!-- Info -->
    <div>
      <h1 class="text-center mb-4">Application Information</h1>
      <p class="mb-3">
        To properly vet your application, Atria requires several documents,
        listed below.
      </p>

      <ul>
        <li>Non-Disclosure Agreement (download here)</li>
        <li>
          Proposal - this should outline the services your company provides and
          why Atria should work with you as a vendor
        </li>
        <li>Organizational Chart</li>
        <li>List of Locations - Name, Address, Phone, Coverage Area</li>
        <li>W-9</li>
        <li>Certificate of Insurance (COI)</li>
        <li>Financials - 2 years' audited statements</li>
        <li>Business processes (from order through payment confirmation)</li>
        <li>Customer support and approach to growth</li>
        <li>(Optional) Company Certifications / Licenses</li>
        <li>(Optional) Technology Interface / API Documentation</li>
      </ul>
    </div>
    <!-- List -->
    <div class="my-5">
      <p class="fw-bold mb-4" v-if="documents.lenght > 0">Documents List</p>
      <div
        class="d-flex justify-content-between p-4 border mb-3"
        v-for="(doc, index) in documents"
        :key="index"
      >
        <div>
          <b class="d-block title">{{ doc.file.name }}</b>
          <i class="type">
            {{ doc.documentType }}
          </i>
        </div>
        <div class="d-flex align-items-center">
          <a :href="doc.file.src" target="_blank">
            <button class="me-2 px-3 py-2" type="button">View</button>
          </a>
          <button class="px-3 py-2" @click="deleteFile(index)">Delete</button>
        </div>
      </div>
    </div>
    <!-- Upload -->
    <div class="row g-0 my-5 border border-success rounded p-4">
      <div v-if="error === false" class="validationMessage">
        Please Add For All File Types
      </div>
      <div class="col-lg-6 d-flex">
        <label for="upload-photo" class="mb-3 my-lg-auto">
          Select Document
          <input
            type="file"
            ref="file"
            placeholder="file"
            id="upload-photo"
            @change="chooseFile"
          />
        </label>
        <!-- <p class="my-auto">Select Docoment</p> -->
      </div>
      <div class="col-lg-6">
        <select name="" id="" v-model="documentType">
          <option value="" disabled selected>Select Document</option>

          <option class="type">Non-Disclosure Agreement</option>
          <option class="type">Proposal</option>
          <option class="type">Organizational Chart</option>
          <option class="type">List of Locations</option>
          <option class="type">W-9</option>
          <option class="type">Certificate of Insurance</option>
          <option class="type">Financials</option>
          <option class="type">Business processes</option>
          <option class="type">Customer support and approach to growth</option>
          <option class="type">Company Certifications / Licenses</option>
          <option class="type">Technology Interface / API Documentation</option>
        </select>
      </div>
      <!-- <img :src="this.file?.src" alt="" /> -->
      <div class="col-lg-4 mx-auto">
        <button
          class="w-100 p-3 mt-5"
          @click.prevent="uploadFile"
          :disabled="!(file && documentType)"
        >
          Upload Document
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data: () => ({
    file: null,
    documentType: '',
    documents: [],
  }),
  methods: {
    chooseFile() {
      this.file = this.$refs.file.files[0]
      // Set Url For Preview
      if (this.file) console.log(this.file)
      this.file.src = (window.URL ? URL : webkitURL).createObjectURL(this.file)
    },
    uploadFile() {
      // Push To Documents Data
      this.documents.push({ file: this.file, documentType: this.documentType })
      // Reset File Input
      this.$refs.file.value = ''
      this.file = null
      this.documentType = ''
      this.$emit('upload:aplicationFile', this.documents)
    },
    deleteFile(index) {
      this.documents.splice(index, 1)
    },
  },
}
</script>
