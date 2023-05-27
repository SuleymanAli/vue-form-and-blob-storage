<template>
  <div class="field">
    <div class="label is-normal">
      <label class="label">{{ label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <Field :name="name" :rules="rules" v-slot="{ field, meta, errors }">
            <input
              v-bind="field"
              class="input"
              :class="{
                'is-success': meta.valid && meta.touched,
                'is-danger': !meta.valid && meta.touched,
              }"
              :placeholder="placeholder"
              :type="type"
            />
            <span class="icon is-small is-left">
              <i class="fas" :class="leftIcon"></i>
            </span>
            <span
              class="icon is-small is-right"
              v-if="meta.valid && meta.touched"
            >
              <i class="fas fa-check has-text-success"></i>
            </span>
            <span
              class="icon is-small is-right"
              v-else-if="!meta.valid && meta.touched"
            >
              <i class="fas fa-x has-text-danger"></i>
            </span>
            <!-- <template v-if="Object.keys(errors).length">
                <ul>
                  <li
                    v-for="(message, field) in errors"
                    :key="field"
                    class="help is-danger"
                  >
                    {{ message }}
                  </li>
                </ul>
              </template> -->
            <ErrorMessage :name="name" as="div" class="help is-danger" />
            <div class="debug" v-if="debug">
              <pre>{{ errors }}</pre>
              <pre>{{ meta }}</pre>
            </div>
          </Field>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  rules: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  leftIcon: {
    type: String,
    default: '',
  },
  debug: {
    type: Boolean,
    default: false,
  },
})
</script>

<style></style>
