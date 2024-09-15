export const ElementMapping = {
  "✂️": new Audio(`/sounds/scissor.mp3`),
  "🪨": new Audio(`/sounds/rock.mp3`),
  "📜": new Audio(`/sounds/paper.mp3`),
};

export const playSound = (type) => {
  const audio = ElementMapping[type];
  audio.play();
};

export const isWinner = (type1, type2) => {
  return (
    (type1 === "🪨" && type2 === "✂️") ||
    (type1 === "✂️" && type2 === "📜") ||
    (type1 === "📜" && type2 === "🪨")
  );
};
