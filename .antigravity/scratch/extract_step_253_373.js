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
    if (step >= 253 && step < 373) {
      console.log(`==================== STEP ${step} ====================`);
      console.log(`Type: ${data.type}`);
      if (data.type === 'PLANNER_RESPONSE') {
        const toolCalls = data.tool_calls || [];
        for (const tc of toolCalls) {
          console.log(`Tool call: ${tc.name}`);
          let args = tc.args || {};
          if (typeof args === 'string') {
            try { args = JSON.parse(args); } catch(e){}
          }
          console.log(`TargetFile: ${args.TargetFile || args.AbsolutePath}`);
          if (args.ReplacementContent) {
            console.log(`ReplacementContent (first 200 chars): ${args.ReplacementContent.substring(0, 200)}`);
          }
        }
      } else if (data.type === 'CODE_ACTION') {
        console.log(`Code Action content (first 500 chars):`);
        console.log(data.content ? data.content.substring(0, 500) : '');
      }
    }
  } catch (e) {
    console.error('Error parsing line:', e);
  }
});
