import type {
  GlobalOptions as ConfettiGlobalOptions,
  CreateTypes as ConfettiInstance,
  Options as ConfettiOptions,
} from "canvas-confetti";
// import type { ButtonVariants } from "shadcn-docs-nuxt/components/ui/button";


export type Api = {
  fire: (options?: ConfettiOptions) => void;
};

export type Direction = 'random' | 'up' | 'right' | 'down' | 'left';

export interface ConfettiButtonProps {
  options?: ConfettiOptions & ConfettiGlobalOptions & { canvas?: HTMLCanvasElement },
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  direction?: Direction
}
