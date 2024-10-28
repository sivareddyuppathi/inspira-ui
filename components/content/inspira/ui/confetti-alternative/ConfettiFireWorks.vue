<template>
  <div>
    <UiButton @click="handleClick">
      <slot></slot>
    </UiButton>
  </div>
</template>
<script lang="ts" setup>
import confetti from "canvas-confetti";

const handleClick = () => {
  // default values declaration
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  const { pause, isActive } = useIntervalFn(() => {
    const timeLeft = animationEnd - Date.now();

    const particleCount = 100 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });

    // Stop the interval when time is up
    if (timeLeft <= 0) {
      pause(); // Clear the interval
    }
  }, 250);
};
</script>
