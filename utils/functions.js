export const formatTime = (timeString) => {
    const time = new Date(timeString);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  export const  getCardType = (cardNumber)=> {
    // Remove all non-digit characters (e.g., spaces, hyphens)
    const cleaned = cardNumber.replace(/\D/g, '');

    // Regular expressions for card types
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    // Determine the card type by matching the card number against the patterns
    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cleaned)) {
            return cardType.charAt(0).toUpperCase() + cardType.slice(1); // Capitalize the card type
        }
    }

    return 'Unknown'; // Return 'Unknown' if the card type is not recognized
}
