lines = content.split('\n')

sayings = []
currentSection = ""
currentSectionTitle = ""

lineIndex = 0;
while (lineIndex < lines.length) {
  if (lines[lineIndex].startsWith('SECTION')) {
    currentSection = lines[lineIndex]
    currentSectionTitle = lines[lineIndex+2]
    lineIndex += 2
  }

  line = lines[lineIndex];
  if (line.length > 2) {
    sayings.push({
      line: line,
      section: currentSection,
      title: currentSectionTitle
    })
  }
  lineIndex+=1;
}

var item = sayings[Math.floor(Math.random()*sayings.length)];
document.getElementById('saying').innerHTML = item.line
document.getElementById('section').innerHTML = item.section
document.getElementById('title').innerHTML = item.title
