let pressStatus = { shift: false, tilde: false };

document.addEventListener('keydown', function ({ code }) {
  switch (code) {
    case "Backquote":
      pressStatus.tilde = true;
      break;
    case "ShiftLeft":
      pressStatus.shift = true;
    default:
      break;
  }
});

document.addEventListener('keyup', function ({ key, code, keyCode }) {
  if (pressStatus.shift && pressStatus.tilde) {
    pressStatus.shift = false;
    pressStatus.tilde = false;

    navigator.clipboard.readText()
      .then(text => {
        navigator.clipboard.writeText(`The interviewer said "${text}" \n What should I say? Please provide me with an impressive, bracket-free response that I can use directly.`);
      })
    // console.log(`Key pressed: ${key}, Key code: ${code}, Key code (numeric): ${keyCode}`);
    // frequent someone snake unable found sudden legend decorate razor seminar hire stable
    console.log("Copy & Change");
  }
});