function titleCased() {
  const tutorialNames = [
    "What Does The This Keyword Mean?",
    "What Is The Constructor OO Pattern?",
    "Implementing Blockchain Web API",
    "The test driven development workflow",
    "What is NaN and how can we check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable state and pure functions",
    "What is the difference between == and ===?",
    "What is the difference between event capturing and bubbling?",
    "What is JSONP?"
  ];

  function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  const titleCasedTutorials = tutorialNames.map(tutorial => titleCase(tutorial));


  return titleCasedTutorials;
}

console.log(titleCased());