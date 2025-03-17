const beginnings = [
    "Believe in yourself,",
    "Today is your day,",
    "Don't give up,",
    "Keep pushing forward,",
    "Stay positive,",
  ];
  
  const middles = [
    "you can achieve anything",
    "your dreams are within reach",
    "success is just around the corner",
    "you're closer than you think",
    "greatness awaits you",
  ];
  
  const ends = [
    "if you stay focused!",
    "with a little perseverance!",
    "when you least expect it!",
    "by taking one step at a time!",
    "if you keep believing!",
  ];

// Randomizer Function
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
  
// Message Generator
function generateMessage() {
    const message = `${randomItem(beginnings)} ${randomItem(middles)} ${randomItem(ends)}`;
    return message;
}
  
// Generate and display the random message
console.log(generateMessage());
  