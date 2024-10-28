<template>
  <div>
    <UiButton @click="handleClick">
      <slot></slot>
    </UiButton>
  </div>
</template>
<script lang="ts" setup>
import confetti from "canvas-confetti";

const triangle = confetti.shapeFromPath({
  path: "M0 10 L5 0 L10 10z",
});
const square = confetti.shapeFromPath({
  path: "M0 0 L10 0 L10 10 L0 10 Z",
});
const coin = confetti.shapeFromPath({
  path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z",
});
const tree = confetti.shapeFromPath({
  path: "M5 0 L10 10 L0 10 Z",
});

const scalar = 2;

const defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 20,
  scalar,
  shapes: [triangle, square, coin, tree],
};

let timeouts: ReturnType<typeof useTimeoutFn>[] = [];

const handleClick = () => {
  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 30,
    });

    confetti({
      ...defaults,
      particleCount: 5,
    });

    confetti({
      ...defaults,
      particleCount: 15,
      scalar: scalar / 2,
      shapes: ["circle"],
    });
  };

  // Schedule shoots with useTimeoutFn
  const delays = [0, 100, 200];
  timeouts = delays.map((delay) => useTimeoutFn(shoot, delay));
};

onUnmounted(() => {
  timeouts && timeouts.forEach(({ stop }) => stop());
});
</script>
