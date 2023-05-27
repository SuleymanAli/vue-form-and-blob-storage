<template>
  <div class="row mb-5">
    <div
      class="pt-4"
      :class="index !== 4 ? 'col-lg-6' : 'col-lg-12'"
      v-for="(schema, index) in formFields"
      :key="schema.name"
    >
      <label v-if="schema.label" :for="schema.name" class="mb-2">
        {{ schema.label }}
      </label>
      <Field
        :as="schema.as"
        :id="schema.name"
        :name="schema?.name"
        :rules="schema.rules"
        :placeholder="schema.placeholder"
        :type="schema.type || 'text'"
        v-model="form[schema.nameShort]"
        :disabled="isDisabled"
        @input="$emit('updateForms', { formName, form })"
      />
      <ErrorMessage :name="schema.name" class="validationMessage" />
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'
import * as Yup from 'yup'

const props = defineProps({
  formName: {
    type: String,
    default: '',
  },
  formData: {
    type: Object,
    default: {},
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
})

let form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  title: '',
})

const formFields = [
  {
    placeholder: 'First Name',
    name: props.formName + '.firstName',
    nameShort: 'firstName',
    as: 'input',
    rules: Yup.string().required(),
  },
  {
    placeholder: 'Last Name',
    name: props.formName + '.lastName',
    nameShort: 'lastName',
    as: 'input',
    rules: Yup.string().required(),
  },
  {
    placeholder: 'Email',
    name: props.formName + '.email',
    nameShort: 'email',
    as: 'input',
    type: 'email',
    autocomplete: 'email',
    rules: Yup.string().email().required(),
  },
  {
    placeholder: 'Phone',
    name: props.formName + '.phone',
    nameShort: 'phone',
    as: 'input',
    rules: Yup.string().min(10).max(16).nullable().required(),
  },
  {
    placeholder: 'Title',
    name: props.formName + '.title',
    nameShort: 'title',
    as: 'input',
    rules: Yup.string().required(),
  },
]

watch(toRefs(props).formData, function (nValue, oldValue) {
  form = nValue
})
</script>
