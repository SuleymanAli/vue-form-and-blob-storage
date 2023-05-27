<template>
  <div>
    <label :for="schema.name">{{ schema.label }}</label>
    <!-- <Field :name="schema.name" v-slot="{ field }">
      <input
        type="text"
        v-bind="field"
        :as="schema.as"
        :id="schema.name"
        :rules="schema.rules"
      />
    </Field> -->
    <!-- <Field :name="schema.name" v-slot="{ field, handleChange }">
      <input
        @change="$emit('updateChans', handleChange)"
        v-model="field.value"
      />
    </Field> -->
    <Field v-slot="{ field, handleChange }" :name="schema.name">
      <input @change="handleChange" :value="field.value" />
    </Field>
    <ErrorMessage :name="schema.name" />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
  },
})

console.log(props)
</script>
