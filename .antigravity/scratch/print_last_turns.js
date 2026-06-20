const fs = require('fs');
const readline = require('readline');

const logPath = "C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\a23f4bd9-77ca-4f5b-874e-85af17dfdf66\\.system_generated\\logs\\transcript.jsonl";

const rl = readline.createInterface({
  input: fs.createReadStream(logPath, { encoding: 'utf8' }),
  crlfDelay: Infinity
});

const steps = [];

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const data = JSON.parse(line);
    steps.push(data);
  } catch (e) {}
});

rl.on('close', () => {
  // Let's look at steps from 150 to the end
  const startIdx = Math.max(0, steps.length - 80);
  for (let i = startIdx; i < steps.length; i++) {
    const step = steps[i];
    console.log(`Step ${step.step_index} (${step.source} - ${step.type}):`);
    if (step.type === 'USER_INPUT') {
      console.log(`[USER REQUEST]: ${step.content}`);
    } else if (step.type === 'PLANNER_RESPONSE') {
      console.log(`[PLANNER]: ${step.content}`);
      if (step.tool_calls) {
        console.log(`Tool Calls: ${JSON.stringify(step.tool_calls.map(tc => tc.name))}`);
      }
    } else if (step.type === 'CODE_ACTION') {
      console.log(`[CODE ACTION on ${step.tool_calls?.[0]?.args?.TargetFile || ''}]`);
    } else if (step.type === 'RUN_COMMAND') {
      console.log(`[COMMAND]: ${step.tool_calls?.[0]?.args?.CommandLine || ''}`);
    }
    console.log('-----------------------------------');
  }
});
