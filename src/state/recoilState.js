import { atom } from "recoil";

export const elementWinCountState = atom({
  key: "elementWinCountState",
  default: { "🪨": 0, "📜": 0, "✂️": 0 },
});
