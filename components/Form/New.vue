<template>
  <section class="login my-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 mx-auto">
          <div class="login__form mt-0">
            <h5 class="title text-center mb-4">New Account</h5>
            <p class="paragraph mb-4">
              To start a new vendor application, please fill out the information
              below for a primary contact and create a new account. Once you
              have created and verified your account, you will be asked to fill
              out additional details about your company and upload the required
              documents.
            </p>

            <div class="col-lg-8 mx-auto d-flex justify-content-center"></div>
            <Form
              class="d-flex flex-column align-items-center mb-5"
              @submit="onSubmit"
            >
              <!-- Form Group -->
              <div class="row mb-4">
                <div
                  v-for="schema in fields"
                  :key="schema.name"
                  class="col-lg-6 pt-4"
                >
                  <FormInput :schema="schema" />
                </div>
              </div>
              <!-- Recapthca -->
              <div class="mb-4">
                <VueRecaptcha
                  :sitekey="siteKey"
                  :load-recaptcha-script="true"
                  @verify="handleSuccess"
                  @error="handleError"
                  @expired="expiredMethod"
                  :class="{ recaptchaError: validateRecaptcha === false }"
                ></VueRecaptcha>
              </div>
              <!-- CTA -->
              <!-- :class="{ disabled: form.errors.recaptcha }" -->
              <button class="submit-btn lg" type="submit">
                Create Account
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import { VueRecaptcha } from 'vue-recaptcha'

const fields = [
  {
    placeholder: 'First Name',
    name: 'firstName',
    as: 'input',
    rules: Yup.string().required(),
  },
  {
    placeholder: 'Last Name',
    name: 'lastName',
    as: 'input',
    rules: Yup.string().required(),
  },
  {
    placeholder: 'Email',
    name: 'email',
    as: 'input',
    type: 'email',
    autocomplete: 'email',
    rules: Yup.string().email().required(),
  },
  {
    placeholder: 'Phone',
    name: 'phone',
    as: 'input',
    rules: Yup.string().min(10).max(16).required(),
  },
  {
    placeholder: 'Title',
    name: 'title',
    as: 'input',
    rules: Yup.string().required(),
  },
  {
    placeholder: 'Company Name',
    name: 'company',
    as: 'input',
    rules: Yup.string().required(),
  },
]

/* Recaptcha */
const siteKey = computed(() => '6Lda19AdAAAAABeAiFdtD5WMwOGO9RH7PksvBbre')
const validateRecaptcha = ref('')
const handleError = () => console.log('error')
const expiredMethod = () => (validateRecaptcha.value = false)
const handleSuccess = (response) => (validateRecaptcha.value = true)

/* Form Submittion And Validation */
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: null,
  title: '',
  company: '',
})

const formStatus = reactive({
  errors: {
    all: false,
    recaptcha: true,
    network: '',
  },
  submitted: false,
})

/* Form Submittion */
function onSubmit(values) {
  console.log(values)
  // Validate Recaptcha
  if (validateRecaptcha.value) {
    // store in user
    const userDetails = useCookie('userDetails')
    userDetails.value = values
    console.log(userDetails.value, values)
    // redirect
    const router = useRouter()
    router.push({ path: '/form' })
  } else {
    validateRecaptcha.value = false
  }
}

// export default {
//   methods: {
//     /* Recaptcha */
//     recaptchaSuccess(token) {
//       this.form.errors.recaptcha = false
//     },
//     recaptchaExpired() {
//       this.form.errors.recaptcha = true
//     },
//     recaptchaError() {
//       this.form.errors.recaptcha = true
//     },
//     validateRecaptcha() {
//       this.form.errors.recaptcha = true
//       this.$recaptcha
//         .getResponse()
//         .then(() => {
//           this.form.errors.recaptcha = false
//         })
//         .catch((e) => {
//           this.form.errors.recaptcha = true
//         })
//     },
//   },
// }
</script>

<style lang="scss" scoped>
button {
  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>
