import { isWinner, updateElementsAndPlaySound } from "./elementUtils";
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
        updatedElements = updateElementsAndPlaySound(
          e,
          currentElement.type,
          currentElement.type,
          id,
          updatedElements
        );
      } else if (isWinner(e.type, currentElement.type)) {
        updatedElements = updateElementsAndPlaySound(
          e,
          e.type,
          currentElement.type,
          id,
          updatedElements
        );
      }
    });

    // Check if all elements are of the same type
    const types = new Set(updatedElements.map((el) => el.type));
    if (types.size === 1) {
      // Set the winner type and trigger game over
      const winnerType = [...types][0];
      setWinnerType(winnerType);
      setGameOver(true);
    }

    return updatedElements;
  });
};
