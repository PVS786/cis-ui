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
    if (step >= 210 && step <= 252) {
      const toolCalls = data.tool_calls || [];
      for (const tc of toolCalls) {
        if (['replace_file_content', 'multi_replace_file_content', 'write_to_file'].includes(tc.name)) {
          console.log(`==================== STEP ${step} ====================`);
          console.log(`Tool: ${tc.name}`);
          let args = tc.args || {};
          if (typeof args === 'string') {
            try { args = JSON.parse(args); } catch(e){}
          }
          console.log(`TargetFile: ${args.TargetFile || args.AbsolutePath}`);
          console.log(`Instruction: ${args.Instruction}`);
          console.log(`TargetContent:\n${args.TargetContent}`);
          console.log(`ReplacementContent:\n${args.ReplacementContent}`);
          console.log('-----------------------------------');
        }
      }
    }
  } catch (e) {}
});
