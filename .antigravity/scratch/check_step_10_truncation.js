const fs = require('fs');
const readline = require('readline');

const logPath = "C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\a23f4bd9-77ca-4f5b-874e-85af17dfdf66\\.system_generated\\logs\\transcript.jsonl";

const rl = readline.createInterface({
  input: fs.createReadStream(logPath, { encoding: 'utf8' }),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const data = JSON.parse(line);
    const step = data.step_index;
    if (step === 10) {
      console.log("Step 10 Content length:", data.content.length);
      console.log("Contains '<truncated 162 lines>':", data.content.includes('<truncated 162 lines>'));
      console.log("Contains 'diff --git':", data.content.includes('diff --git'));
      console.log("First 500 chars:\n", data.content.substring(0, 500));
      console.log("Last 500 chars:\n", data.content.substring(data.content.length - 500));
    }
  } catch (e) {}
});
