import { isWinner, playSound } from "./elementUtils";
import { detectCollision } from "../utils";

export const handleCollision = (
  id,
  newPosition,
  allElements,
  setAllElements,
  setGameOver,
  setWinnerType
) => {
  setAllElements((prevElements) => {
    // Find the element that moved
    const currentElement = prevElements.find((el) => el.id === id);
    if (!currentElement) return prevElements;

    // Update the position of the moved element
    let updatedElements = prevElements.map((el) =>
      el.id === id ? { ...el, position: newPosition } : el
    );

    // Detect collisions with the updated position
    const collidedElements = updatedElements.filter(
      (e) => e.id !== id && detectCollision(e.position, newPosition)
    );

    // Handle collisions based on Rock-Paper-Scissors rules
    collidedElements.forEach((e) => {
      if (isWinner(currentElement.type, e.type)) {
        playSound(currentElement.type);
        // Make the losing element invisible
        updatedElements = updatedElements.map((el) =>
          el.id === e.id ? { ...el, type: currentElement.type } : el
        );
      } else if (isWinner(e.type, currentElement.type)) {
        // Make the current element invisible
        playSound(e.type);
        updatedElements = updatedElements.map((el) =>
          el.id === id ? { ...el, type: e.type } : el
        );
      }
    });

    // Check if all elements are of the same type
    const types = new Set(updatedElements.map((el) => el.type));
    if (types.size === 1) {
      // Set the winner type and trigger game over
      setWinnerType([...types][0]);
      setGameOver(true);
    }

    return updatedElements;
  });
};
