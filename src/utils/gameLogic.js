import { isWinner, playSound } from "./elementUtils";
import { detectCollision } from "../utils";

export const handleCollision = (
  id,
  newPosition,
  allElements,
  setAllElements
) => {
  setAllElements((prevElements) => {
    // Find the element that moved
    const currentElement = prevElements.find((el) => el.id === id);
    if (!currentElement || !currentElement.isVisible) return prevElements;

    // Update the position of the moved element
    let updatedElements = prevElements.map((el) =>
      el.id === id ? { ...el, position: newPosition } : el
    );

    // Detect collisions with the updated position
    const collidedElements = updatedElements.filter(
      (e) =>
        e.id !== id && e.isVisible && detectCollision(e.position, newPosition)
    );

    // Handle collisions based on Rock-Paper-Scissors rules
    collidedElements.forEach((e) => {
      if (isWinner(currentElement.type, e.type)) {
        playSound(currentElement.type);
        // Make the losing element invisible
        updatedElements = updatedElements.map((el) =>
          el.id === e.id ? { ...el, isVisible: false } : el
        );
      } else if (isWinner(e.type, currentElement.type)) {
        // Make the current element invisible
        playSound(currentElement.type);
        updatedElements = updatedElements.map((el) =>
          el.id === id ? { ...el, isVisible: false } : el
        );
      }
    });

    return updatedElements;
  });
};
