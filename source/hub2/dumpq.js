const fs=require('fs'),vm=require('vm');const ctx={console};vm.createContext(ctx);
for (const f of ['viz.js','parts.js',...fs.readdirSync('ch').sort().map(x=>'ch/'+x)]) vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
vm.runInContext('this.__CH=CHAPTERS',ctx);
for (const ch of ctx.__CH){ (ch.quiz||[]).forEach((q,i)=>{ if(q.chk) return; console.log(`[${ch.id}#${i}] ${q.q}${q.c?' | CODE: '+q.c.trim().replace(/\n/g,' ⏎ '):''}\n   => ${q.o[q.a]}`); });
 (ch.body||[]).forEach((b,i)=>{ if(b.t==='pred'&&!b.chk) console.log(`[${ch.id} PRED] ${b.c.trim().replace(/\n/g,' ⏎ ')}\n   => ${b.o[b.a]}`); }); }
