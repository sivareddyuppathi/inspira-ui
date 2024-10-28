<template></template>

<script lang="ts" setup>
import type {
  GlobalOptions as ConfettiGlobalOptions,
  CreateTypes as ConfettiInstance,
  Options as ConfettiOptions,
} from "canvas-confetti";
import confetti from "canvas-confetti";

type Api = {
  fire: (options?: ConfettiOptions) => void;
};

</script>
