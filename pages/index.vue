<template>
  <section class="login">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="login__image">
            <img class="img-fluid" src="showcase3.jpeg" alt="" />
          </div>
        </div>

        <div class="col-xl-8 mx-auto">
          <div class="login__form">
            <h1 class="h5 title text-center mb-4">Vendor Application</h1>
            <p class="paragraph mb-md-5">
              Atria Senior Living offers much more than a place for older people
              to live. We build vibrant senior assisted living communities that
              give seniors companionship, comfort and a wide choice of
              activities that match individual interests. When people come to
              Atria, they lead a richer life. They move from isolation to
              community. You can learn more about us at
              <a href="https://www.atriaseniorliving.com/"
                >www.atriaseniorliving.com</a
              >. <br /><br />
              This application is required to become a national or regional
              vendor for any of the Atria brands. The Purchasing team will reach
              out once complete and let you know if we have an immediate need, a
              future need or are not interested at this time. There is not a
              guarantee of contact or interest on behalf of Atria.
            </p>

            <div
              class="d-flex justify-content-sm-evenly flex-column flex-sm-row align-items-center"
            >
              <NuxtLink to="/form/create">
                <button class="cta my-4 my-sm-0">
                  Start New <br />
                  Application
                </button>
              </NuxtLink>
              <NuxtLink to="/form/continue">
                <button class="cta my-4 my-sm-0">
                  Continue <br />
                  Application
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.login__image {
  height: 550px;

  img {
    overflow: hidden;
    height: 100%;
    object-fit: cover;
    object-position: top;
    width: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}
</style>
