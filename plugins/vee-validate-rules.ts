import { defineRule } from 'vee-validate'
import {
  required,
  email,
  min_value,
  max_value,
  integer,
  between,
} from '@vee-validate/rules'
// import * as rules from '@vee-validate/rules'

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min_value', min_value)
  defineRule('max_value', max_value)
  defineRule('integer', integer)
  defineRule('between', between)
  // Object.keys(rules)
  //   .filter((k) => k !== 'default')
  //   .forEach((rule) => {
  //     defineRule(rule, rules[rule])
  //     //   console.log(rule);
  //   })
})
