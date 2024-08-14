export const formatTime = (timeString) => {
    const time = new Date(timeString);
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
//   export const  getCardType = (cardNumber)=> {
//     // Remove all non-digit characters (e.g., spaces, hyphens)
//     const cleaned = cardNumber.replace(/\D/g, '');

//     // Regular expressions for card types
//     const cardPatterns = {
//         visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
//         mastercard: /^5[1-5][0-9]{14}$/,
//         amex: /^3[47][0-9]{13}$/,
//         discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
//         diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
//         jcb: /^(?:2131|1800|35\d{3})\d{11}$/
//     };

//     // Determine the card type by matching the card number against the patterns
//     for (const [cardType, pattern] of Object.entries(cardPatterns)) {
//         if (pattern.test(cleaned)) {
//             return cardType.charAt(0).toUpperCase() + cardType.slice(1); // Capitalize the card type
//         }
//     }

//     return 'Unknown'; // Return 'Unknown' if the card type is not recognized
// }
export const  getCardType = (cardNumber) => {
  const firstDigit = cardNumber[0];
  const firstTwoDigits = cardNumber.slice(0, 2);
  const firstThreeDigits = cardNumber.slice(0, 3);
  const firstFourDigits = cardNumber.slice(0, 4);
  const firstSixDigits = cardNumber.slice(0, 6);

  if (firstDigit === "4") {
    return "Visa";
  } else if (["51", "52", "53", "54", "55"].includes(firstTwoDigits) || (firstFourDigits >= "2221" && firstFourDigits <= "2720")) {
    return "MasterCard";
  } else if (["34", "37"].includes(firstTwoDigits)) {
    return "American Express";
  } else if (["6011", "622126", "644", "65"].some(prefix => firstFourDigits.startsWith(prefix) || firstSixDigits.startsWith(prefix))) {
    return "Discover";
  } else if (["36", "38"].includes(firstTwoDigits) || ["300", "301", "302", "303", "304", "305"].includes(firstThreeDigits)) {
    return "Diners Club";
  } else if (["2131", "1800"].includes(firstFourDigits) || firstTwoDigits === "35") {
    return "JCB";
  } else if (firstFourDigits === "5019" || firstTwoDigits === "56") {
    return "Dankort";
  } else if (firstTwoDigits === "62") {
    return "UnionPay";
  } else if (firstFourDigits === "5066" || firstSixDigits.startsWith("506099")) {
    return "Verve";
  } else if (firstTwoDigits === "67") {
    return "Maestro";
  } else if (firstFourDigits === "6759" || firstSixDigits.startsWith("6759")) {
    return "Maestro UK";
  } else if (["4026", "417500", "4508", "4844", "4913", "4917"].includes(firstFourDigits) || firstSixDigits === "491761") {
    return "Visa";
  } else {
    return "Unknown";
  }
};

export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  const options = { month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')}${hours >= 12 ? 'PM' : 'AM'}`;
  return { formattedDate, formattedTime };
};
export const formatDate= (isoString)=> {
  const date = new Date(isoString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let formatted = date.toLocaleDateString('en-US', options);
  
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  
  return formatted.replace(/\d+/, day + suffix);
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}


export const  uuidToTenDigitNumber=(uuid) =>{
  // Remove dashes from the UUID
  const cleanUUID = uuid.replace(/-/g, '');

  // Convert the cleaned UUID to a number by taking the first 10 characters and parsing it
  const number = parseInt(cleanUUID.slice(0, 10), 16);

  // If the number has fewer than 10 digits, add leading zeros to ensure it's 10 digits
  const tenDigitNumber = number.toString().padStart(10, '0');

  // If the number has more than 10 digits, slice it to ensure it's 10 digits
  return tenDigitNumber.slice(0, 10);
}

