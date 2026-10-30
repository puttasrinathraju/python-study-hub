/* ---------- Reusable drawings for posters ---------- */
var ART = {
  sweets: function(){
    var s = '<svg viewBox="0 0 560 190" width="560" role="img" aria-label="11 sweets: 3 groups of 3 and 2 left over">';
    for (var g = 0; g < 3; g++) {
      var x0 = 20 + g * 150;
      s += '<rect x="' + x0 + '" y="30" width="130" height="80" rx="12" class="sv-acc"/>';
      s += '<text x="' + (x0 + 65) + '" y="22" text-anchor="middle" class="sv-mb">friend ' + (g + 1) + '</text>';
      for (var k = 0; k < 3; k++) s += '<circle cx="' + (x0 + 30 + k * 35) + '" cy="70" r="13" class="sv-hl"/>';
    }
    s += '<rect x="470" y="30" width="80" height="80" rx="12" class="sv-trap"/><text x="510" y="22" text-anchor="middle" class="sv-mb">left over</text>';
    s += '<circle cx="492" cy="70" r="13" class="sv-hl"/><circle cx="528" cy="70" r="13" class="sv-hl"/>';
    s += '<text x="215" y="150" text-anchor="middle" class="sv-tm sv-ta" style="font-weight:600">11 // 3 = 3</text>';
    s += '<text x="510" y="150" text-anchor="middle" class="sv-tm sv-tt" style="font-weight:600">11 % 3 = 2</text>';
    s += '<text x="280" y="180" text-anchor="middle" class="sv-mb">3 friends x 3 sweets + 2 left = 11</text>';
    return s + '</svg>';
  },
  funcAnatomy: function(){
    var s = '<svg viewBox="0 0 640 260" width="640" role="img" aria-label="Labelled parts of a Python function">';
    s += '<rect x="150" y="20" width="230" height="38" rx="8" class="sv-hl"/>';
    s += '<text x="162" y="45" class="sv-tm" style="font-size:18px"><tspan class="sv-ta" style="font-weight:600">def</tspan> add(x, y):</text>';
    s += '<rect x="186" y="74" width="330" height="34" rx="6" class="sv-acc"/><text x="196" y="96" class="sv-tm">"""Add two numbers."""</text>';
    s += '<rect x="186" y="118" width="130" height="34" rx="6" class="sv-soft"/><text x="196" y="140" class="sv-tm">z = x + y</text>';
    s += '<rect x="186" y="162" width="110" height="34" rx="6" class="sv-tip"/><text x="196" y="184" class="sv-tm">return z</text>';
    s += '<text x="20" y="44" class="sv-mb">keyword def</text><path d="M100 40 H160" class="sv-ln" marker-end="url(#arw)"/>';
    s += '<text x="400" y="14" class="sv-mb">name, parameters in ( ), then :</text><path d="M395 18 L300 26" class="sv-ln" marker-end="url(#arw)"/>';
    s += '<text x="530" y="96" class="sv-mb">docstring</text>';
    s += '<text x="330" y="140" class="sv-mb">body (indented)</text>';
    s += '<text x="310" y="184" class="sv-mb">sends a value back</text>';
    s += '<path d="M176 74 V196" class="sv-lna"/><text x="20" y="140" class="sv-mb">4-space indent</text><path d="M120 136 H170" class="sv-ln" marker-end="url(#arw)"/>';
    s += '<text x="186" y="236" class="sv-tm">total = add(5, 7)</text><text x="370" y="236" class="sv-mb">← the call, arguments 5 and 7</text>';
    return s + '</svg>';
  },
  legb: function(){
    var s = '<svg viewBox="0 0 560 300" width="560" role="img" aria-label="Nested boxes: built-in, global, enclosing, local">';
    s += '<rect x="10" y="10" width="540" height="280" rx="16" class="sv-soft"/><text x="28" y="38" class="sv-h">B  Built-in: print, len, sum ...</text>';
    s += '<rect x="40" y="52" width="480" height="222" rx="14" class="sv-acc"/><text x="58" y="80" class="sv-h">G  Global: top of your file</text>';
    s += '<rect x="70" y="94" width="420" height="164" rx="12" class="sv-tip"/><text x="88" y="122" class="sv-h">E  Enclosing: the outer function</text>';
    s += '<rect x="100" y="136" width="360" height="106" rx="10" class="sv-hl"/><text x="118" y="164" class="sv-h">L  Local: inside this function</text>';
    s += '<text x="118" y="196" class="sv-t">Python looks here first,</text><text x="118" y="220" class="sv-t">then outwards: L → E → G → B</text>';
    return s + '</svg>';
  },
  tryFlow: function(){
    var s = '<svg viewBox="0 0 560 250" width="560" role="img" aria-label="Flow of try, except, else and finally">';
    s += '<rect x="215" y="10" width="130" height="40" rx="10" class="sv-acc"/><text x="280" y="35" text-anchor="middle" class="sv-tm">try</text>';
    s += '<path d="M245 50 L130 100" class="sv-lnt" marker-end="url(#arwT)"/><text x="140" y="70" class="sv-tm sv-tt" style="font-size:13px">error</text>';
    s += '<path d="M315 50 L430 100" class="sv-lng" marker-end="url(#arwG)"/><text x="385" y="70" class="sv-tm sv-tg" style="font-size:13px">no error</text>';
    s += '<rect x="60" y="104" width="140" height="40" rx="10" class="sv-trap"/><text x="130" y="129" text-anchor="middle" class="sv-tm">except</text>';
    s += '<rect x="360" y="104" width="140" height="40" rx="10" class="sv-tip"/><text x="430" y="129" text-anchor="middle" class="sv-tm">else</text>';
    s += '<path d="M130 144 L250 190" class="sv-ln" marker-end="url(#arw)"/><path d="M430 144 L310 190" class="sv-ln" marker-end="url(#arw)"/>';
    s += '<rect x="215" y="194" width="130" height="40" rx="10" class="sv-hl"/><text x="280" y="219" text-anchor="middle" class="sv-tm">finally</text>';
    return s + '</svg>';
  },
  libNest: function(){
    var s = '<svg viewBox="0 0 560 250" width="560" role="img" aria-label="Library contains packages contains modules contains functions">';
    s += '<rect x="10" y="10" width="540" height="230" rx="16" class="sv-soft"/><text x="28" y="38" class="sv-h">Library: NumPy, the standard library</text>';
    s += '<rect x="40" y="52" width="480" height="172" rx="14" class="sv-acc"/><text x="58" y="80" class="sv-h">Package: a folder of modules</text>';
    s += '<rect x="70" y="94" width="420" height="114" rx="12" class="sv-tip"/><text x="88" y="122" class="sv-h">Module: one .py file (math.py)</text>';
    s += '<rect x="100" y="136" width="360" height="56" rx="10" class="sv-hl"/><text x="118" y="170" class="sv-t">Functions, variables, classes</text>';
    return s + '</svg>';
  },
  rooms: function(){
    var s = '<svg viewBox="0 0 600 250" width="600" role="img" aria-label="One Room class creates three room objects">';
    s += '<rect x="200" y="10" width="200" height="86" rx="10" class="sv-acc" style="stroke-dasharray:6 4"/><text x="300" y="34" text-anchor="middle" class="sv-h">class Room</text>';
    s += '<text x="300" y="58" text-anchor="middle" class="sv-tm" style="font-size:13px">number, kind, rate</text><text x="300" y="80" text-anchor="middle" class="sv-tm" style="font-size:13px">book(), price(nights)</text>';
    var objs = [["r1", "101", "Deluxe", "3499"], ["r2", "102", "Suite", "6999"], ["r3", "201", "Standard", "1999"]];
    objs.forEach(function(o, i){
      var x = 20 + i * 195;
      s += '<path d="M300 96 L' + (x + 85) + ' 140" class="sv-ln" marker-end="url(#arw)"/>';
      s += '<rect x="' + x + '" y="144" width="170" height="92" rx="10" class="sv-hl"/>';
      s += '<text x="' + (x + 85) + '" y="166" text-anchor="middle" class="sv-h">' + o[0] + ' (object)</text>';
      s += '<text x="' + (x + 14) + '" y="190" class="sv-tm" style="font-size:13px">number = ' + o[1] + '</text>';
      s += '<text x="' + (x + 14) + '" y="210" class="sv-tm" style="font-size:13px">kind = "' + o[2] + '"</text>';
      s += '<text x="' + (x + 14) + '" y="230" class="sv-tm" style="font-size:13px">rate = ' + o[3] + '</text>';
    });
    return s + '</svg>';
  },
  inherit: function(){
    var s = '<svg viewBox="0 0 520 220" width="520" role="img" aria-label="Person parent of Student and Teacher">';
    s += '<rect x="185" y="10" width="150" height="66" rx="10" class="sv-acc"/><text x="260" y="34" text-anchor="middle" class="sv-h">Person</text><text x="260" y="58" text-anchor="middle" class="sv-tm" style="font-size:13px">name, introduce()</text>';
    s += '<path d="M230 76 L120 128" class="sv-ln" marker-end="url(#arw)"/><path d="M290 76 L400 128" class="sv-ln" marker-end="url(#arw)"/>';
    s += '<rect x="30" y="132" width="180" height="78" rx="10" class="sv-hl"/><text x="120" y="156" text-anchor="middle" class="sv-h">Student(Person)</text><text x="120" y="180" text-anchor="middle" class="sv-tm" style="font-size:13px">+ marks</text><text x="120" y="200" text-anchor="middle" class="sv-tm" style="font-size:13px">introduce() changed</text>';
    s += '<rect x="310" y="132" width="180" height="78" rx="10" class="sv-hl"/><text x="400" y="156" text-anchor="middle" class="sv-h">Teacher(Person)</text><text x="400" y="180" text-anchor="middle" class="sv-tm" style="font-size:13px">+ subject</text><text x="400" y="200" text-anchor="middle" class="sv-tm" style="font-size:13px">introduce() changed</text>';
    return s + '</svg>';
  },
  compAnatomy: function(){
    var s = '<svg viewBox="0 0 470 120" width="470" role="img" aria-label="Parts of a list comprehension">';
    s += '<rect x="34" y="14" width="72" height="40" rx="8" class="sv-hl"/><rect x="116" y="14" width="168" height="40" rx="8" class="sv-acc"/><rect x="294" y="14" width="106" height="40" rx="8" class="sv-tip"/>';
    s += '<text x="18" y="41" class="sv-tm" style="font-size:20px">[</text><text x="42" y="41" class="sv-tm" style="font-size:20px">x * 2</text>';
    s += '<text x="124" y="41" class="sv-tm" style="font-size:20px">for x in nums</text><text x="302" y="41" class="sv-tm" style="font-size:20px">if x &gt; 3</text><text x="408" y="41" class="sv-tm" style="font-size:20px">]</text>';
    s += '<text x="70" y="78" text-anchor="middle" class="sv-mb">① keep</text><text x="200" y="78" text-anchor="middle" class="sv-mb">② loop</text><text x="347" y="78" text-anchor="middle" class="sv-mb">③ filter</text>';
    s += '<text x="235" y="108" text-anchor="middle" class="sv-t">for each x in nums, if x &gt; 3, keep x * 2</text>';
    return s + '</svg>';
  },
  fstring: function(){
    var s = '<svg viewBox="0 0 520 150" width="520" role="img" aria-label="Parts of an f-string">';
    s += '<text x="20" y="62" class="sv-tm" style="font-size:22px"><tspan class="sv-tt" style="font-weight:700">f</tspan>"Total: <tspan class="sv-ta" style="font-weight:700">{</tspan>amount<tspan class="sv-tg" style="font-weight:700">:,.2f</tspan><tspan class="sv-ta" style="font-weight:700">}</tspan>"</text>';
    s += '<path d="M27 72 V100" class="sv-lnt"/><text x="20" y="118" class="sv-mb">f switches slots on</text>';
    s += '<path d="M190 72 V100" class="sv-lna"/><text x="150" y="138" class="sv-mb">{ } a slot: any variable or maths</text>';
    s += '<path d="M318 72 L380 100" class="sv-lng"/><text x="330" y="118" class="sv-mb">format spec: commas, 2 decimals</text>';
    s += '<text x="20" y="24" class="sv-mb">amount = 1234.5  →  "Total: 1,234.50"</text>';
    return s + '</svg>';
  },
  dims: function(){
    var s = '<svg viewBox="0 0 520 170" width="520" role="img" aria-label="1D, 2D and 3D arrays">';
    for (var i = 0; i < 3; i++) s += '<rect x="' + (14 + i * 34) + '" y="50" width="34" height="34" class="sv-acc"/><text x="' + (31 + i * 34) + '" y="72" text-anchor="middle" class="sv-tm">' + (i + 1) + '</text>';
    s += '<text x="65" y="120" text-anchor="middle" class="sv-h">1D  (3,)</text>';
    for (var r = 0; r < 2; r++) for (var c = 0; c < 3; c++) s += '<rect x="' + (170 + c * 34) + '" y="' + (34 + r * 34) + '" width="34" height="34" class="sv-hl"/><text x="' + (187 + c * 34) + '" y="' + (56 + r * 34) + '" text-anchor="middle" class="sv-tm">' + (r * 3 + c + 1) + '</text>';
    s += '<text x="221" y="120" text-anchor="middle" class="sv-h">2D  (2, 3)</text>';
    for (var L = 1; L >= 0; L--) for (var r2 = 0; r2 < 2; r2++) for (var c2 = 0; c2 < 2; c2++) {
      var x = 360 + c2 * 34 + L * 22, y = 30 + r2 * 34 - L * 18;
      s += '<rect x="' + x + '" y="' + y + '" width="34" height="34" class="' + (L ? 'sv-soft' : 'sv-tip') + '"/>';
    }
    s += '<text x="420" y="120" text-anchor="middle" class="sv-h">3D  (2, 2, 2)</text>';
    s += '<text x="260" y="156" text-anchor="middle" class="sv-mb">shape = (layers, rows, columns). Rows always before columns.</text>';
    return s + '</svg>';
  }
};
