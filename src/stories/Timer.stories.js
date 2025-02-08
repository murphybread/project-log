import { Timer } from "@components/Timer";

export default {
  title: "Timer",
  component: Timer,
  argTypes: {
    initialTime: {
      control: { type: "number" },
      description: "Initial time in milliseconds (ms)",
      table: { type: { summary: "number" } },
    },
  },
};

export const Default = {
  args: {
    initialTime: 1111999,
  },
};
