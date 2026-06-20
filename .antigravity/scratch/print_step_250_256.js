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
    if (step >= 250 && step <= 256) {
      console.log(`==================== STEP ${step} ====================`);
      console.log(`Source: ${data.source}, Type: ${data.type}`);
      console.log("Content:");
      console.log(data.content);
      if (data.tool_calls) {
        console.log("Tool calls:", JSON.stringify(data.tool_calls, null, 2));
      }
    }
  } catch (e) {
    console.error('Error parsing line:', e);
  }
});
