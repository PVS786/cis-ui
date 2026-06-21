const fs = require('fs');
const readline = require('readline');

const logPath = "C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\a23f4bd9-77ca-4f5b-874e-85af17dfdf66\\.system_generated\\logs\\transcript.jsonl";

const rl = readline.createInterface({
  input: fs.createReadStream(logPath, { encoding: 'utf8' }),
  crlfDelay: Infinity
});

const files = {};

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const data = JSON.parse(line);
    const step = data.step_index;
    if (data.type === 'VIEW_FILE') {
      // Find the file path from the content or tool call arguments
      const content = data.content || '';
      const match = content.match(/File Path: `file:\/\/\/(.*?)`/);
      if (match) {
        const filePath = match[1].replace(/\//g, '\\');
        if (!files[filePath]) files[filePath] = [];
        files[filePath].push({
          step: step,
          length: content.length,
          hasLineNumbers: content.includes('1: ') || content.includes('1:\r')
        });
      }
    }
  } catch (e) {}
});

rl.on('close', () => {
  console.log("Viewed files in transcript:");
  console.log(JSON.stringify(files, null, 2));
});
