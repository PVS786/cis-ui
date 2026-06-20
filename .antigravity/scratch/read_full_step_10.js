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
      console.log("Is content truncated on disk?", data.content.includes('<truncated'));
      console.log("Length on disk:", data.content.length);
      fs.writeFileSync("C:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\.antigravity\\scratch\\step_10_full_raw.txt", data.content, 'utf8');
    }
  } catch (e) {}
});
