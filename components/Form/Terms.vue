<template>
  <div class="col-lg-12 mb-5">
    <h1 class="text-center mb-4">Terms & Conditions</h1>
    <p class="mb-3">
      Atria has certain terms and conditions that must be met by all vendors.
      These terms include the following:
    </p>

    <ul>
      <li>Net 90 or 3% discount avg 30</li>
      <li>Atria's required invoicing and reporting requirements (linked)</li>
      <li>
        Insurance minimums:
        <ul>
          <li>30 day termination with or without cause</li>
          <li>Kentucky is the state of jurisdiction</li>
          <li>General Liability - $1MM occurence / $3MM aggregate</li>
          <li>Professional Liability - $1MM occurence / $3MM aggregate</li>
          <li>Auto Insurance - $1MM occurence / $3MM aggregate</li>
          <li>Workers' Compensation - $1MM occurence / statutory aggregate</li>
        </ul>
      </li>
    </ul>
    <div v-if="error === false" class="validationMessage mb-2">
      Please Select Checkbox Below
    </div>
    <div class="d-flex align-items-center">
      <input
        type="checkbox"
        name=""
        id="terms"
        class="me-3"
        v-model="termIsChecked"
      />
      <label for="terms">
        I confirm that my organization will meet the required terms and
        conditions outlined above to become a vendor with Atria
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['error'])
const emit = defineEmits(['update:termStatus'])
const termIsChecked = ref('')
watch(termIsChecked, (newV, oldV) => {
  emit('update:termStatus', newV)
})
</script>
