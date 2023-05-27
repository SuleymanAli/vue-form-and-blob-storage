<template>
  <div id="app" class="container">
    <!-- :validation-schema="{
      email: 'required|email',
      title: 'required|integer',
      description: 'required|integer',
    }" -->
    <!-- <Form @submit="onSubmit" class="row my-5" :validation-schema="schema">
      <div class="mb-4">
        <Field
          type="email"
          name="email"
          v-model="form.email"
          placeholder="Email..."
        />
        <ErrorMessage name="email" class="text-danger" />
      </div>
      <div class="mb-4">
        <Field
          type="text"
          name="title"
          v-model="form.title"
          placeholder="Title..."
          rules="required"
        />
        <ErrorMessage name="title" class="text-danger" />
      </div>
      <div>
        <Field
          as="textarea"
          name="description"
          v-model="form.description"
          placeholder="Description..."
          class="mb-4"
        />
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <button>Sign up for newsletter</button>
    </Form> -->
    <Form
      @submit="onSubmitW"
      :validation-schema="schemaComputed"
      class="flex flex-col items-start mt-4 mb-5"
      @invalid-submit="onInvalidSubmit"
    >
      <Field
        name="password"
        placeholder="Password"
        type="password"
        v-slot="{ meta, field }"
      >
        <span
          class="bg-red-500 text-white rounded-md px-3 py-2 mb-3"
          v-if="meta"
        >
          Meta - {{ meta }}
        </span>
        <input
          class="border-teal-800 px-3 py-2 rounded-md mb-2 w-full"
          v-bind="field"
        />
      </Field>

      <ErrorMessage name="password" class="mb-4" />
      <div class="flex justify-between">
        <button @click="passwordLength++" class="mr-4">
          Current passwordLength - {{ passwordLength }}
        </button>
        <button>Submit</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ErrorMessage, Form, Field } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email(),
  title: yup.string().required(),
  description: yup.string().required(),
})

const passwordLength = ref(8)

const schemaComputed = computed(() => {
  return yup.object({
    password: yup
      .string()
      .min(
        passwordLength.value,
        `Password Length Must Be Higher Than ${passwordLength.value}`
      )
      .required(),
  })
})

// console.log(toRaw(schema))
const form = reactive({
  email: '',
  title: '',
  description: '',
})

function validateEmail(value) {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}

function onSubmit(values) {
  console.log(toRaw(form))
  console.log('Submitted', values)
}
function onSubmitW(values) {
  console.log('Submitted', values)
}
function onInvalidSubmit({ values, errors, results }) {
  console.log(values) // current form values
  console.log(errors) // a map of field names and their first error message
  console.log(results) // a detailed map of field names and their validation results
}
</script>
