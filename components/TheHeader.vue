<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="header__wrapper d-flex align-items-center justify-content-between my-3 flex-wrap"
          >
            <div class="mr-3 mr-lg-0">
              <nuxt-link to="/">
                <img
                  class="img-fluid"
                  :src="'/logos/logo-main.png'"
                  alt="Atria Senior Living logo"
                />
              </nuxt-link>
            </div>
            <div>
              <img
                class="img-fluid"
                :src="'/logos/logo-coterie.png'"
                alt="Coterie Senior Living logo"
              />
            </div>
            <div>
              <img
                class="img-fluid"
                :src="'/logos/logo-atria-signature.png'"
                alt="Atria Signature logo"
              />
            </div>
            <div>
              <img
                class="img-fluid"
                :src="'/logos/logo-asl.png'"
                alt="Atria Senior Living logo"
              />
            </div>
            <div>
              <img
                class="img-fluid"
                :src="'/logos/logo-atria-park.png'"
                alt="Atria Park logo"
              />
            </div>
            <div>
              <img
                class="img-fluid header__image--holiday"
                :src="'/logos/logo-holiday.svg'"
                alt="Holiday by Atria logo"
              />
            </div>
            <div>
              <img
                class="img-fluid header__image--retirement"
                :src="'/logos/logo-atria-retirement2.png'"
                alt="Atria Retirement Canada logo"
              />
            </div>
            <!-- <div>
              <img class="img-fluid" :src="'/logos/logo-gladwell.png'" alt="" />
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: #ffffff;
  box-shadow: 0px 6px 8px rgba(83, 83, 83, 0.25);
  position: relative;
  z-index: 10;
  transform: translate(0, 0, 10px);

  &__image {
    &--holiday {
      width: 94px;
    }
    &--retirement {
      width: 157px;
    }
  }

  &__wrapper {
    & > div {
      @media screen and (max-width: 1200px) and (min-width: 768px) {
        margin: 5px 20px;
      }

      @media screen and (max-width: 768px) {
        &:nth-child(1) {
          display: flex;
          flex-basis: 100%;
          justify-content: center;
        }
      }

      @media screen and (max-width: 576px) {
        flex-basis: 50%;
        margin: 6px 0;

        &:nth-child(odd) {
          display: flex;
          justify-content: end;
        }
        &:nth-child(1) {
          flex-basis: 100%;
          justify-content: center;
        }
      }
    }
  }
}
</style>
