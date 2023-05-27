<template>
  <div>
    <section class="login">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 mx-auto">
            <div class="login__form mt-5">
              <h5 class="title text-center mb-4">Continue Application</h5>
              <p class="paragraph mb-4">
                To continue your application, please enter your application code
                in the field below or click on the link in the email provided
                when you first registered. If you do not have an application
                code or have not started an application,
                <NuxtLink to="/form/create" class="link"
                  >click here to start a new application</NuxtLink
                >.
              </p>

              <div class="">
                <form
                  @submit.prevent="handleCodeForm"
                  method="GET"
                  class="d-flex flex-column"
                >
                  <div class="form-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      name="sampleCode"
                      placeholder="Application Code"
                      v-model="code"
                    />
                    <div class="mt-2 validationMessage">
                      <!-- <p v-if="errors.length > 0">
                                Error: Please enter your email address using the
                                following format: example@domain.com.
                              </p> -->
                    </div>
                  </div>

                  <div class="d-flex">
                    <button class="cta m-auto">
                      Continue <br />
                      Application
                    </button>
                    <!-- <IconSpinner :loading="form.loading" /> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')

function handleCodeForm() {
  if (code.value) {
    const router = useRouter()

    router.push({
      name: 'form',
      query: { code: 'samplecode' },
    })
  }
}
</script>
