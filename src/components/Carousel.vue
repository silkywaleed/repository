<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <img @click="prevSlide" src="@/assets/Left Arrow.png" class="cursor-pointer" alt="">
      </div>
      <div class="toggle-page right">
        <img @click="nextSlide" src="@/assets/Right Arrow.png" class="cursor-pointer" alt="">
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagintationEnabled" class="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
    const pagintationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(props.navigation === undefined ? true : props.navigation);

    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    // autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };

    if (autoPlayEnabled.value) {
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      pagintationEnabled,
      navEnabled,
    };
  },
};
</script>

<style lang="css">
.navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigate .toggle-page {
    display: flex;
    flex: 1;
  }

  .navigate .right {
    justify-content: flex-end;
  }

  .navigate svg {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    color: #fff;
  }

.pagination {
  position: absolute;
  bottom: 80px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  left: 45%;
    width: auto;
}

.pagination span {
    cursor: pointer;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .pagination .active {
    background-color: #11E3AB;
    width: 35px;
    border-radius: 10px;
  }
</style>
