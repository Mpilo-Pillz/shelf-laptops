<template>
  <div>
    <app-jumbotron />

    <main>
      <div>
        <div class="laptop-description marginia">
          <div class="laptop__image-container">
            <img
              src="https://slickdeals.net/blog/wp-content/uploads/2019/09/19-dell-xps-15-17.jpg"
              alt="Dell XPS 15"
            />
          </div>

          <div class="laptop__info">
            <h1 class="laptop__name">
              Dell XPS 15
            </h1>
            <h2 class="laptop__subtitle">
              For the Power User
            </h2>
            <p class="laptop__text">
              Excellent for power intensive tasks such as video & photo
              editing,editing, web and mobile development. Excellent Laptop for
              making music.
            </p>
          </div>
        </div>

        <div class="laptop-description marginia">
          <div class="laptop__info">
            <h1 class="laptop__name">
              Apple MacBook Pro 16
            </h1>
            <h2 class="laptop__subtitle">
              For the Creative User
            </h2>
            <p class="laptop__text">
              Excellent for the Content Creators, Creative, and IOS Developers.
              Render Videos, Make Music, Edit Pictues in teh Apple Eco system
            </p>
          </div>

          <div class="laptop__image-container">
            <img
              src="https://cdn.mos.cms.futurecdn.net/ekTkF2ggXT4Srr27rQAiVj-1200-80.jpg"
              alt="Apple MacBook Pro 16"
            />
          </div>
        </div>

        <div class="laptop-description marginia">
          <div class="laptop__image-container">
            <img
              src="https://atbusinesssolutions.co.za/wp-content/uploads/2019/01/HP-Elitebook-820-laptop-special-angle.jpeg"
              alt="HP Elitebook 820"
            />
          </div>

          <div class="laptop__info">
            <h1 class="laptop__name">
              HP Elitebook 820
            </h1>
            <h2 class="laptop__subtitle">
              For Business Office user
            </h2>
            <p class="laptop__text">
              Excellent for day to day admin task on the go such as email, 
              web browsing, basic productivity and excell spread sheets.
            </p>
          </div>
        </div>

        <div class="laptop-description marginia">
          <div class="laptop__info">
            <h1 class="laptop__name">
              Lenovo ThinkPad Yoga 370
            </h1>
            <h2 class="laptop__subtitle">
              For office user on the go
            </h2>
            <p class="laptop__text">
              Excellent for University Students on the Go. View lecture slides, complete assignmets, 
              learn programming, take notes during lectures.
            </p>
          </div>

          <div class="laptop__image-container">
            <img
              src="https://i.ytimg.com/vi/vl5R-cjqDEQ/maxresdefault.jpg"
              alt="Lenovo ThinkPad Yoga 370"
            />
          </div>
        </div>
      </div>
    </main>

    <!-- <div class="about-video">
            <h2 class="about-heading">Search Laptop Model</h2>
              <input class="form-control" type="text" placeholder="Search">
        </div> -->
  </div>
</template>

<script>
import appJumbotron from "../../src/components/Shared/Jumbotron";
export default {
  name: "Home",
  components: {
    appJumbotron
  },
  methods: {
    goToLaptops: () => {
      //   this.$router.push('laptops')
      console.log("learn more");
    }
  }
};
</script>

<style scoped>
.marginia {
  margin: 30px;
}
.space-for-stylin {
  height: 50px;
  display: block;
}
.jumbo--text {
  color: #ffffff;
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.jumbotron {
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 520px;
}

.jumbotron__bg-img {
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0.2)),
      to(rgba(0, 0, 0, 0.7))
    ),
    url("../assets/sl-cover.jpg");
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
    url("../assets/sl-cover.jpg");
}

.white-space {
  height: 100px;
  width: 100%;
  background-color: #ffffff;
}

.more-about {
  width: 40%;
}

.about-video {
  width: 40%;
}

.section-about {
  display: flex;
  justify-content: space-between;
  padding: 50px;
}

.about-heading {
  padding-bottom: 20px;
}

.about-heading__border {
  border-bottom: 2px solid #333333;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.hero-text-box {
  position: absolute;
  width: 1140px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main {
  padding-top: 2.5rem;
}
</style>
