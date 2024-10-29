export const elements = [
  { element: "📜", count: 50 },
  { element: "🪨", count: 50 },
  { element: "✂️", count: 50 },
];

export const specialElements = [
  { element: "🦎", count: 50 },
  { element: "🖖🏻", count: 50 },
];

export const generateDefaultWinCount = () => {
  const combinedElements = [...elements, ...specialElements];
  return combinedElements.reduce((acc, { element }) => {
    acc[element] = 0;
    return acc;
  }, {});
};

export const ElementMapping = {
  "✂️": new Audio(`/sounds/scissor.mp3`),
  "🪨": new Audio(`/sounds/rock.mp3`),
  "📜": new Audio(`/sounds/paper.mp3`),
  "🦎": new Audio(`/sounds/lizard.mp3`),
  "🖖🏻": new Audio(`/sounds/spock.mp3`),
};

export const gameModes = [
  { value: "classic", label: "Classic" },
  { value: "special", label: "Special" },
];

export const playSound = (type) => {
  const audio = ElementMapping[type];
  audio.play();
};

export const isWinner = (type1, type2) => {
  return (
    (type1 === "🪨" && type2 === "✂️") ||
    (type1 === "🪨" && type2 === "🦎") ||
    (type1 === "✂️" && type2 === "📜") ||
    (type1 === "✂️" && type2 === "🦎") ||
    (type1 === "📜" && type2 === "🪨") ||
    (type1 === "📜" && type2 === "🖖🏻") ||
    (type1 === "🦎" && type2 === "🖖🏻") ||
    (type1 === "🦎" && type2 === "📜") ||
    (type1 === "🖖🏻" && type2 === "✂️") ||
    (type1 === "🖖🏻" && type2 === "🪨")
  );
};

export const generateElements = (elements) => {
  return elements.flatMap(({ element, count }) =>
    Array.from({ length: count }, (_, index) => ({
      id: `${element}-${index}`,
      type: element,
      position: {
        x: Math.random() * window.innerWidth * 0.5,
        y: Math.random() * window.innerHeight * 0.5,
      },
    }))
  );
};

export const updateElementsAndPlaySound = (
  el,
  newType,
  currentElementType,
  id,
  updatedElements
) => {
  playSound(newType);
  return updatedElements.map((element) =>
    element.id === el.id
      ? { ...element, type: newType }
      : element.id === id
      ? { ...element, type: newType }
      : element
  );
};
