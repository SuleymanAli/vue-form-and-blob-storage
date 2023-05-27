<template>
  <section class="legal-footer">
    <div class="container-fluid py-5 legal-footer__container">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-8">
            <ul div class="d-flex flex-wrap mx-lg-0 footer-nav-container">
              <li class="list_items">
                <a
                  class="footer-nav-link pages"
                  href="https://www.atriaseniorliving.com/california-privacy-notice"
                  >California Privacy Notice</a
                >
              </li>
              <!-- <li class="list_items">
                <a
                  class="footer-nav-link pages"
                  aria-label="Link to Unsubscribe"
                  href="/unsubscribe"
                  >Unsubscribe</a
                >
              </li> -->
              <li class="list_items">
                <a
                  class="footer-nav-link pages"
                  aria-label="Link to Privacy Policy"
                  href="https://www.atriaseniorliving.com/privacy-policy"
                  >Privacy Policy</a
                >
              </li>
              <li class="list_items">
                <a
                  class="footer-nav-link pages"
                  aria-label="Link to Accessibility Policy"
                  href="https://www.atriaseniorliving.com/accessibility"
                  >Accessibility</a
                >
              </li>
              <li class="list_items">
                <a
                  class="footer-nav-link pages"
                  aria-label="Link to Terms of Use"
                  href="https://www.atriaseniorliving.com/terms-of-use"
                  >Terms of Use</a
                >
              </li>
              <!-- <li class="list_items">
                <a
                  class="footer-nav-link pages"
                  aria-label="Link to the Site Map"
                  href="/site-map"
                  >Site Map</a
                >
              </li> -->
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <div class="stacked_logo">
              <a href="/" aria-label="Atria Logo that links to the home page">
                <IconLogo />
              </a>
            </div>
          </div>
        </div>
        <div
          class="rowlegal-footer__container justify-content-start align-items-center"
        >
          <div class="col col-md-2">
            <ul div class="row justify-content-between align-items-center">
              <li class="list_items mr-md-4 d-md-flex align-items-center">
                &copy; 2000-{{ new Date().getFullYear() }} Atria Senior Living,
                Inc.
                <span
                  class="invert_color px-1 d-none d-md-flex align-items-center icon-container"
                >
                  <IconEqualHousing />
                </span>
                <span
                  class="fonta_icons d-none d-md-inline-flex align-items-center"
                >
                  <i class="fab fa-accessible-icon"></i>
                </span>
                <!-- <span
                  class="fonta_icons d-none d-md-inline-flex align-items-center"
                  ><i class="fas fa-hands-asl-interpreting"></i
                ></span> -->
              </li>
              <li
                class="text-center pt-1 d-flex d-md-none justify-content-center align-items-center"
              >
                <span class="invert_color p-1 icon-container"
                  ><IconEqualHousing
                /></span>
                <span class="fonta_icons p-1 icon-container"
                  ><i class="fab fa-accessible-icon"></i
                ></span>
                <!-- <span class="fonta_icons p-1 icon-container"
                  ><i class="fas fa-hands-asl-interpreting"></i
                ></span> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-auto col-md-9 col-lg-8 col-xl-7">
            <ul>
              <li class="ally-statement list_items text-left mx-sm-5 mx-md-0">
                If you are vision-impaired or have another impairment and you
                wish to discuss potential accommodations related to using this
                website, please contact us at
                <a
                  class="pages mailto-link"
                  href="mailto:accessibility@atriaseniorliving.com"
                  >accessibility@atriaseniorliving.com.</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fa-hands-asl-interpreting::before {
  content: "\f2a3";
}
.container-fluid {
  background: $gray;
}

.legal-footer__container {
  background: $gray;
  justify-content: space-between;
  color: #fff;

  ul {
    list-style: none;
    padding: 0;
    li {
      // font-family: $brandon-grotesque;
      // font-size: 1.6rem;
      white-space: nowrap;
    }
    li.ally-statement {
      white-space: normal;
      line-height: 22.88px;
      @media screen and (min-width: 768px) {
        margin-top: 3.6rem;
        text-align: left;
      }
    }
  }

  .fonta_icons {
    font-size: 27px;
    margin-right: 8px;
  }

  .invert_color {
    filter: brightness(0) invert(1);
    margin-right: 8px;
  }

  .stacked_logo svg {
    max-width: 185px;
  }

  .list_items {
    text-align: center;
    &:not(:last-child) {
      padding-bottom: 16px;
    }
    @include mq(md) {
      text-align: left;
      padding-bottom: 0;
    }
  }

  li.col:nth-child(6) {
    @include mq(lg) {
      margin-right: 60%;
    }
    @include mq(xl) {
      margin-right: 0;
    }
  }
}

a.pages {
  position: relative;
  color: white;
  text-decoration: none;
  // font-size: 1.6rem;
  line-height: 22.88px;
}

a.pages:hover {
  color: white;
}

a.pages::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

a.pages:hover::before {
  transform: scaleX(1);
}

.icon-container {
  margin-left: 8px;
}

.stacked_logo {
  text-align: center;
  margin: 30px auto;
}

.footer-nav-link {
  margin-right: 24px;
}

.footer-nav-container {
  justify-content: center;
}

.mailto-link {
  text-decoration: underline !important;
}

.mailto-link::before {
  display: none !important;
}

@include mq(md) {
  .stacked_logo {
    text-align: right;
  }

  .footer-nav-container {
    justify-content: left;
  }
}
</style>
