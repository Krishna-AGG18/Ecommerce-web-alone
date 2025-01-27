import { cartCards } from './recommended.js';

document.addEventListener("DOMContentLoaded", () => {
      // Access cartCards after DOM is loaded
    if (cartCards && cartCards.length > 0) {
        console.log("cartCards from otherFile:", cartCards);  // Should log the NodeList
    } else {
        console.log("cartCards not yet populated.");
    }
});
