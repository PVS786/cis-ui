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
    if (step >= 170 && step <= 255) {
      console.log(`Step ${step} (${data.source} - ${data.type}): ${data.tool_calls ? data.tool_calls.map(tc => tc.name).join(', ') : ''}`);
    }
  } catch (e) {}
});
