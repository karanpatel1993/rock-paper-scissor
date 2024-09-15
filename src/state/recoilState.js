import { atom } from "recoil";
import { generateDefaultWinCount } from "../utils/elementUtils";

export const elementWinCountState = atom({
  key: "elementWinCountState",
  default: generateDefaultWinCount(),
});

export const resetRecoilState = (resetters) => {
  resetters.forEach((resetter) => resetter());
};
