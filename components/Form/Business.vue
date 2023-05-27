<template>
  <div>
    <!-- Company Contact Information -->
    <div class="row mb-5">
      <b>Company Headquarters Contact Information</b>

      <div
        v-for="(schema, index) in formFields.headquarters"
        :class="[0, 3, 4, 9].includes(index) ? 'col-lg-12' : 'col-lg-6'"
        :key="schema.name"
      >
        <FormInput
          :label="schema.label"
          :placeholder="schema.placeholder"
          :as="schema?.as"
          :id="schema?.name"
          :rules="schema.rules"
          :name="schema.name"
          :type="schema.type"
          v-model="data.headquarters[schema.nameShort]"
          class="mt-4"
        />
      </div>
    </div>
    <!-- Business Information -->
    <div class="mb-5">
      <b>Business Information</b>
      <div class="row">
        <div
          v-for="schema in formFields.business?.information"
          :key="schema.name"
          class="col-lg-6"
        >
          <FormInput
            :label="schema.label"
            :placeholder="schema.placeholder"
            :as="schema?.as"
            :id="schema?.name"
            :rules="schema.rules"
            :name="schema.name"
            :type="schema.type"
            v-model="data.business.information[schema.nameShort]"
            class="mt-4"
          />
        </div>
      </div>
    </div>
    <!-- Business Reference -->
    <div class="mb-5">
      <b>Business Reference</b>
      <div class="row">
        <div
          v-for="schema in formFields.business?.reference"
          :key="schema.name"
          class="col-lg-6"
        >
          <FormInput
            :label="schema.label"
            :placeholder="schema.placeholder"
            :as="schema?.as"
            :id="schema?.name"
            :rules="schema.rules"
            :name="schema.name"
            :type="schema.type"
            v-model="data.business.information[schema.nameShort]"
            class="mt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import * as yup from 'yup'

/* Validation */
const required = yup.string().required()
const email = yup.string().email('Email Not Valid').required()
const phone = yup
  .string()
  .min(10, 'Phone number must be at least 10 numbers')
  .max(16, 'Phone number cannot be more than 16 numbers')
  .required()
const integer = yup
  .string()
  .required()
  .matches(/^\d+$/, 'Please enter only numbers')

const formFields = {
  headquarters: [
    {
      placeholder: 'Company Name',
      name: 'headquarters.companyName',
      nameShort: 'companyName',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'Phone',
      name: 'headquarters.phone',
      nameShort: 'phone',
      as: 'input',
      rules: phone,
    },
    {
      placeholder: 'Website',
      name: 'headquarters.website',
      nameShort: 'website',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'Address Line 1',
      name: 'headquarters.addressOne',
      nameShort: 'addressOne',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'Address Line 2',
      name: 'headquarters.addressTwo',
      nameShort: 'addressTwo',
      as: 'input',
      rules: null,
    },
    {
      placeholder: 'City',
      name: 'headquarters.city',
      nameShort: 'city',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'State',
      name: 'headquarters.state',
      nameShort: 'state',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'Zip Code',
      name: 'headquarters.postal',
      nameShort: 'postal',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'Country',
      name: 'headquarters.country',
      nameShort: 'country',
      as: 'input',
      rules: required,
    },
    {
      placeholder: 'Email',
      name: 'headquarters.email',
      nameShort: 'email',
      as: 'input',
      rules: email,
      label: 'Send Purchase Orders to:',
    },
  ],
  business: {
    information: [
      {
        placeholder: 'Federal Tax ID',
        name: 'business.information.taxID',
        nameShort: 'taxID',
        as: 'input',
        rules: required,
      },
      {
        placeholder: 'D&B Number',
        name: 'business.information.dAndbNumber',
        nameShort: 'dAndbNumber',
        as: 'input',
        rules: required,
      },
      {
        placeholder: 'Annual Sales Dollars',
        name: 'business.information.annualSales',
        nameShort: 'annualSales',
        as: 'input',
        rules: integer,
      },
      {
        placeholder: 'Number of Locations',
        name: 'business.information.locationCount',
        nameShort: 'locationCount',
        as: 'input',
        rules: integer,
      },
      {
        placeholder: 'Number of Active Customers',
        name: 'business.information.activeCustomerCount',
        nameShort: 'activeCustomerCount',
        as: 'input',
        rules: integer,
      },
      {
        placeholder: 'Number of Employees',
        name: 'business.information.employeeCount',
        nameShort: 'title',
        as: 'input',
        rules: integer,
      },
    ],
    reference: [
      {
        placeholder: 'Contact First Name',
        name: 'business.reference.contactFirstName',
        nameShort: 'taxID',
        as: 'input',
        rules: required,
      },
      {
        placeholder: 'Contact Last Name',
        name: 'business.reference.contactLastName',
        nameShort: 'dAndbNumber',
        as: 'input',
        rules: required,
      },
      {
        placeholder: 'Title',
        name: 'business.reference.title',
        nameShort: 'annualSales',
        as: 'input',
        rules: required,
      },
      {
        placeholder: 'Company Name',
        name: 'business.reference.companyName',
        nameShort: 'locationCount',
        as: 'input',
        rules: required,
      },
      {
        placeholder: 'Phone Number',
        name: 'business.reference.phone',
        nameShort: 'activeCustomerCount',
        as: 'input',
        rules: phone,
      },
      {
        placeholder: 'Email',
        name: 'business.reference.email',
        nameShort: 'title',
        as: 'input',
        rules: email,
      },
    ],
  },
}

/* Data */
const data = reactive({
  headquarters: {
    companyName: '',
    phone: '',
    website: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    postal: '',
    country: '',
    email: '',
  },
  business: {
    information: {
      annualSales: '',
      taxID: '',
      dAndbNumber: '',
      locationCount: '',
      activeCustomerCount: '',
      employeeCount: '',
    },
    reference: {
      contactFirstName: '',
      contactLastName: '',
      title: '',
      companyName: '',
      phone: '',
      email: '',
    },
  },
})

onMounted(() => {
  const userDetails = useCookie('userDetails')
  // data.headquarters.companyName = data.business.reference.companyName = company
  data.headquarters.companyName = userDetails.value?.company
})

const emit = defineEmits(['update:BusinessData'])
watch(
  () => data,
  (newValue, oldValue) => emit('update:BusinessData', newValue),
  { deep: true }
)
</script>
