<template>
  <!-- <Form @submit="submit" :validation-schema="simpleSchema"> -->
  <!-- <Form @submit="submit"> -->
  <!-- <Field name="email" rules="email" />
    <ErrorMessage name="email" />
    <Field name="password" type="password" rules="password" />
    <ErrorMessage name="password" /> -->
  <!-- <testInput rules="required|between:3,12" name="abc" />
    <button>Submit</button> -->
  <!-- </Form> -->
  <Form @submit="onSubmit">
    <!-- <DynamicForm :schema="formSchema" /> -->
    <div v-for="(schema, index) in fields" :key="schema.name">
      <DynamicForm
        :schema="schema"
        v-model="form[index].value"
        @update:chans="handleChange"
      />
    </div>
    <Field :name="'ads'" type="text" v-slot="{ field }">
      <input @input="test(field.value)" />
    </Field>
    <button>Submit</button>
  </Form>
</template>

<script setup>
import DynamicForm from '~~/pages/test/DynamicForm.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'
function handleChange(data) {
  console.log({ data })
}
function test(value) {
  console.log(value)
}
const fields = [
  {
    label: 'Your Name',
    name: 'name',
    as: 'input',
    rules: Yup.string().required(),
  },
  {
    label: 'Your Email',
    name: 'email',
    as: 'input',
    type: 'email',
    autocomplete: 'email',
    rules: Yup.string().email().required(),
  },
  {
    label: 'Your Password',
    name: 'password',
    as: 'input',
    type: 'password',
    rules: Yup.string().min(6).required(),
  },
]

const form = reactive([
  {
    value: '',
  },
  {
    value: '',
  },
  {
    value: '',
  },
])

function onSubmit(values) {
  // console.log(values)
  console.log(form)
}
</script>
