<template>
  <div>
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 mx-auto">
            <div class="mt-0">
              <!-- Form Header -->
              <h5 class="title text-center mb-4">Application Information</h5>
              <p class="paragraph mb-5">
                To complete your vendor application, please fill out all
                required fields below and upload requested documentation. If
                this process takes more than one sitting to complete, please
                click the "Save Application" button to save your progress. Once
                all required information has been filled out, click "Submit
                Application" to submit your vendor application for
                consideration. Please note that once your application has been
                submitted, you will not be able to update any provided
                information.
              </p>
              <div class="d-flex flex-column align-items-center mb-5">
                <p class="mb-4">Status: Not Submitted</p>
                <button @click="onSubmit">Save Application</button>
              </div>
              <!-- Form -->
              <div>
                <Form @submit="onSubmit" v-slot="{ errors }">
                  <!-- {{ errors }} -->
                  <!-- {{ sameAsPrimaryContact }} -->
                  <!-- 1.Forms: Information - Name, Last Name, Email, Title -->
                  <div v-for="(form, formName, index) in forms" :key="index">
                    <b>{{ formNames[index] }}</b>
                    <div class="d-flex align-items-center my-2" v-if="index">
                      <input
                        type="checkbox"
                        :id="formName"
                        :value="formName"
                        class="me-2"
                        v-model="sameAsPrimaryContact"
                      />
                      <label :for="formName">Same as Primary Contact</label>
                    </div>
                    <FormGroup
                      :formName="formName"
                      @updateForms="handleFormData"
                      :isDisabled="sameAsPrimaryContact.includes(formName)"
                      :formData="forms[formName]"
                    />
                  </div>
                  <!-- 2.Business Information -->
                  <FormBusiness @update:BusinessData="updateBusinessData" />
                  <!-- 3.Upload -->
                  <FormUpload
                    :error="filesIsChecked"
                    @upload:aplicationFile="handleUploadedData"
                  />
                  <!-- 4.Terms & Conditions -->
                  <FormTerms
                    :error="termIsChecked"
                    @update:termStatus="updateTermStatus"
                  />
                  <!-- 5.Actions -->
                  <div
                    class="d-flex justify-content-sm-evenly flex-column flex-sm-row align-items-center mb-5"
                  >
                    <button
                      class="cta mb-4 mb-sm-0"
                      @click.prevent="handleSaveApplication"
                    >
                      Save Application
                    </button>
                    <button class="cta my-4 my-sm-0 submit-btn" type="submit">
                      Submit Application
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Form } from 'vee-validate'
import data from '@/constants/ApplicationFormDummy.json'

// OnMounted
onMounted(() => {
  const route = useRoute()
  if (route.query.code === 'samplecode') {
    business.value = data.business
    delete data.business
    forms = data
    console.log(forms)
    return
  }
  const userDetails = useCookie('userDetails')

  if (userDetails.value) {
    const { firstName, lastName, email, phone, title } = userDetails.value
    forms.primary = { firstName, lastName, email, phone, title }
  }
})

/* 1.Four Same Form Group */
let forms = reactive({
  primary: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
  },
  sales: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
  },
  customerService: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
  },
  account: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    title: '',
  },
})

const formNames = reactive([
  'Primary Contact',
  'Customer Service Contact',
  'Sales Contact',
  'Accounts Receivable Contact',
])

function handleFormData(data) {
  forms[data.formName] = data.form
}

const sameAsPrimaryContact = ref([])
watch(sameAsPrimaryContact, (nValue, oldValue) => {
  // Add Primary Form Values To Other Form If Selected
  nValue.forEach((formName) => (forms[formName] = forms['primary']))
  // Reset Form Is
  let isDetached = oldValue.filter(function (obj) {
    return nValue.indexOf(obj) == -1
  })
  if (forms[isDetached])
    forms[isDetached] = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      title: '',
    }
})

/* 2.Business */
let business = ref([])

/* 3.File Upload */
const filesIsChecked = ref('')
const uploadedFileTypes = reactive([
  'Non-Disclosure Agreement',
  // 'Proposal',
  // 'Organizational Chart',
  // 'List of Locations',
  // 'W-9',
  // 'Certificate of Insurance',
  // 'Financials',
  // 'Business processes',
  // 'Customer support and approach to growth',
  // "Company Certifications \/ Licenses",
  // "Technology Interface / API Documentation",
])
let uploadedFiles = reactive([])
const errors = reactive({
  upload: false,
})

function updateBusinessData(data) {
  console.log(data)
  business = data
}
function validateUploadedFiles() {
  // Current Types
  let fileTypes = uploadedFiles.map((file) => file.documentType)
  // Check All Types Exists
  const isTypesExists = uploadedFileTypes.every((value) =>
    fileTypes.includes(value)
  )
  // Prop For Upload Component
  filesIsChecked.value = isTypesExists
}
function handleUploadedData(data) {
  uploadedFiles = data
}

/* 4.Terms */
const termIsChecked = ref('')
function validatTerms() {
  if (termIsChecked.value === '') termIsChecked.value = false
}
function updateTermStatus(termStatus) {
  termIsChecked.value = termStatus
}

/* 5. Save Application */
function handleSaveApplication() {
  const formData = useCookie('formData')
  formData.value = JSON.stringify({ ...forms, business })
}
/* 6. Form Submisson */
function onSubmit(validate) {
  // 1. Validate Files
  validateUploadedFiles()
  validatTerms()
  if (!filesIsChecked.value || !termIsChecked.value) return
  const router = useRouter()
  router.push('/form/submitted')
}
</script>
