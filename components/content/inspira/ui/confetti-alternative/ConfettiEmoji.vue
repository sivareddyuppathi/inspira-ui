<template>
  <div>
    <UiButton @click="handleClick">
      <slot></slot>
    </UiButton>
  </div>
</template>
<script lang="ts" setup>
import confetti from "canvas-confetti";

const scalar = 2;

const unicorn = confetti.shapeFromText({ text: "🦄", scalar });

const defaults = {
  spread: 360,
  ticks: 60,
  gravity: 0,
  decay: 0.96,
  startVelocity: 20,
  shapes: [unicorn],
  scalar,
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
