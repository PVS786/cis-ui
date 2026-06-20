const fs = require('fs');
const readline = require('readline');

const logPath = "C:\\Users\\Bala\\.gemini\\antigravity-ide\\brain\\a23f4bd9-77ca-4f5b-874e-85af17dfdf66\\.system_generated\\logs\\transcript.jsonl";
const outputPath = "C:\\Users\\Bala\\Downloads\\webUI\\cis-ui\\.antigravity\\scratch\\all_pre_294_edits.txt";

const outStream = fs.createWriteStream(outputPath, { encoding: 'utf8' });

const rl = readline.createInterface({
  input: fs.createReadStream(logPath, { encoding: 'utf8' }),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  if (!line.trim()) return;
  try {
    const data = JSON.parse(line);
    const step = data.step_index;
    if (step < 294) {
      const toolCalls = data.tool_calls || [];
      for (const tc of toolCalls) {
        if (['replace_file_content', 'multi_replace_file_content', 'write_to_file'].includes(tc.name)) {
          let args = tc.args || {};
          if (typeof args === 'string') {
            try { args = JSON.parse(args); } catch(e){}
          }
          outStream.write(`==================== STEP ${step} (${tc.name}) ====================\n`);
          outStream.write(`File: ${args.TargetFile || args.AbsolutePath}\n`);
          outStream.write(`Instruction: ${args.Instruction}\n`);
          outStream.write(`TargetContent:\n${args.TargetContent || ''}\n`);
          outStream.write(`ReplacementContent:\n${args.ReplacementContent || ''}\n`);
          if (args.ReplacementChunks) {
            outStream.write(`Replacement Chunks: ${JSON.stringify(args.ReplacementChunks, null, 2)}\n`);
          }
          outStream.write('-----------------------------------\n');
        }
      }
    }
  } catch (e) {}
});

rl.on('close', () => {
  outStream.end();
  console.log("Done writing pre-294 edits to all_pre_294_edits.txt");
});
