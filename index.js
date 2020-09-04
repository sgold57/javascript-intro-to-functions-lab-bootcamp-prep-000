function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var test = string
  if test.toUpperCase() === string {
    return `"YES INDEED!"`
  }
  if test.toLowerCase() === string {
    return `"I can't hear you!"`
  }
  if test === `"I love you, Grandma."`{
    return `"I love you, too"`
  }
}
