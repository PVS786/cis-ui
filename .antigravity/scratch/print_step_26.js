const fs = require('fs');
const readline = require('readline');

const logPath = "C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\a23f4bd9-77ca-4f5b-874e-85af17dfdf66\\.system_generated\\logs\\transcript.jsonl";
const outputPath = "C:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\.antigravity\\scratch\\step_26_diff.txt";

const rl = readline.createInterface({
  input: fs.createReadStream(logPath, { encoding: 'utf8' }),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const data = JSON.parse(line);
    const step = data.step_index;
    if (step === 26) {
      fs.writeFileSync(outputPath, data.content, 'utf8');
      console.log("Done writing step 26 diff to step_26_diff.txt");
    }
  } catch (e) {}
});
