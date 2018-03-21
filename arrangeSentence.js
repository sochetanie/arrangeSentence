let sentence = 'The lines are printed in reverse order.' 
// => 'In the are lines order printed reverse.'


function arrange(sentence) {
  let lastChar = sentence.charAt(sentence.length-1)
  let words =  sentence.replace(/[!?;:'",.]/gi, '').toLowerCase().split(" ").sort(function(first, second) {
      return first.length - second.length
  })
    
  let tempFistWord = words[0].charAt(0).toUpperCase()
  let firstWord = tempFistWord+words[0].substr(1)
  words.shift()
  words.unshift(firstWord)
  let answer  = words.join(' ')+lastChar
  return answer
}
arrange(sentence)