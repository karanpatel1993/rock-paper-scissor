export const detectCollision = (pos1, pos2) => {
  // Check if positions are valid objects with x and y properties
  if (
    !pos1 ||
    !pos2 ||
    pos1.x == null ||
    pos1.y == null ||
    pos2.x == null ||
    pos2.y == null
  ) {
    return false; // Return false if any position is invalid
  }

  // Calculate the distance between two positions using the Euclidean distance formula
  const distance = Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2);

  // Define a more reasonable threshold for emoji collision detection
  const threshold = 50; // Adjust based on the size of the emojis

  // Return true if the distance is less than the threshold, indicating a collision
  if (distance < threshold) {
    return true;
  }

  // Return false if no collision is detected
  return false;
};
