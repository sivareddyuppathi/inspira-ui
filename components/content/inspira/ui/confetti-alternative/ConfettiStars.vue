<template>
  <div>
    <UiButton @click="handleClick">
      <slot></slot>
    </UiButton>
  </div>
</template>
<script lang="ts" setup>
import confetti from "canvas-confetti";

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
};

// Cleanup refs for timeouts
let timeouts: ReturnType<typeof useTimeoutFn>[] = [];

const handleClick = () => {
  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  };

  // Timeouts for shooting confetti at intervals
  const intervals = [0, 100, 200];
  timeouts = intervals.map((delay) => useTimeoutFn(shoot, delay));
};

onUnmounted(() => {
  timeouts && timeouts.forEach(({ stop }) => stop());
});
</script>
