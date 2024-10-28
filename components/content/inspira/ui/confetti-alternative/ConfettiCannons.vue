<template>
  <div>
    <UiButton @click="handleClick">
      <slot></slot>
    </UiButton>
  </div>
</template>
<script lang="ts" setup>
import confetti from "canvas-confetti";

const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

const handleClick = () => {
  const end = Date.now() + 3 * 1000; // 3 seconds

  // Throttle the animation to prevent over-rendering
  const frame = () => {
    if (Date.now() > end) return;

    // Trigger confetti from two directions (left and right)
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.7 },
      colors: colors,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.7 },
      colors: colors,
    });

    // Throttle the frame requests to roughly 30 frames per second
    useTimeoutFn(() => {
      requestAnimationFrame(frame);
    }, 1000 / 30); // 30 FPS throttling
  };

  // Start the animation
  frame();
};
</script>
