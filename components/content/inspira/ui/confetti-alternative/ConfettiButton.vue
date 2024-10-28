<template>
  <UiButton @click="handleClick" :class="cn(props.class)">
    <slot></slot>
  </UiButton>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils.js";
import type { ConfettiButtonProps, Api } from "./types.js";
import confetti from "canvas-confetti";

const props = defineProps<ConfettiButtonProps>();

const randomParticles = () => Math.random() * (225 - 135) + 135;

const handleClick = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  console.log(props);
  let allOptions = { ...props.options };

  if (props.direction === "random") {
    const angle = randomParticles();
    // const spread = randomInRange(50, 50);
    allOptions = { ...allOptions, angle };
  }

  confetti({
    ...allOptions,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight,
    },
  });
};
</script>
