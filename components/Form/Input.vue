<template>
  <div>
    <template v-if="schema">
      <label v-if="schema.label" :for="schema.name" class="mb-2">{{
        schema.label
      }}</label>
      <Field
        :as="schema.as"
        :id="schema.name"
        :name="schema.name"
        :rules="schema.rules"
        :placeholder="schema.placeholder"
        :type="schema.type || 'text'"
      />
      <ErrorMessage :name="schema.name" class="validationMessage" />
    </template>
    <template v-else>
      <label v-if="label" :for="name" class="mb-2">{{ label }}</label>
      <Field
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :as="as"
        :id="name"
        :rules="rules"
        :type="type || 'text'"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <ErrorMessage :name="name" class="validationMessage" />
    </template>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'
/* Two Way Binding For Parent Component */
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  schema: {
    type: Object,
  },
  name: {
    type: String,
    default: '',
  },
  as: {
    type: String,
    default: 'input',
  },
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: Object,
  },
  rules: {
    type: Object,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>
