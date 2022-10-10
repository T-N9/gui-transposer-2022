export const ChordRegexOp =
  /\s[ACDFG]#madd11|\s[ACDFG]#madd11\s|\s[A-G]madd11|\s[A-G]madd11\s|\s[ABDEG]bm7|[ABDEG]bm7\s|\s[ABDEG]bm|[ABDEG]bm\s|\s[ACDFG]#m7|[ACDFG]#m7\s|\s[ACDFG]#m|[ACDFG]#m\s|\s[ACDFG]#7|[ACDFG]#7\s|\s[ABDEG]b7|[ABDEG]b7\s|\s[A-G]m7\s|\s[A-G]m|[A-G]m\s|\s[A-G]#|[A-G]#\s|\s[ABDEG]b|[ABDEG]b\s|\s[A-G]add9|[A-G]add9\s|\s[A-G]7|[A-G]7\s|[A-G]\s|\s[A-G]\s/gm;

export const PartRegexOp =
  /\[Verse \d+\]|\[Chorus \d+\]|\[Intro \d+\]|\[Chorus\]|\[Verse\]|\[Intro\]|\[Outro\]|\[Solo\]|\[Instrumental\]|\[Pre-chorus\]|\[Pre-Chorus\]|\[Bridge\]|\[Interlude\]/gm;

export const chords_Arr_i = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

export const chords_Arr_i_sh = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const chords_Arr_ii = [
  "Dm",
  "Ebm",
  "Em",
  "Fm",
  "Gbm",
  "Gm",
  "Abm",
  "Am",
  "Bbm",
  "Bm",
  "Cm",
  "Dbm",
];

export const chords_Arr_ii_sh = [
  "Dm",
  "D#m",
  "Em",
  "Fm",
  "F#m",
  "Gm",
  "G#m",
  "Am",
  "A#m",
  "Bm",
  "Cm",
  "C#m",
];

export const chords_Arr_iii = [
  "A7",
  "Bb7",
  "B7",
  "C7",
  "Db7",
  "D7",
  "Eb7",
  "E7",
  "F7",
  "Gb7",
  "G7",
  "Ab7",
];

export const chords_Arr_iii_sh = [
  "A7",
  "A#7",
  "B7",
  "C7",
  "C#7",
  "D7",
  "D#7",
  "E7",
  "F7",
  "F#7",
  "G7",
  "G#7",
];

export const chords_Arr_iv = [
  "Aadd9",
  "Bbadd9",
  "Badd9",
  "Cadd9",
  "Dbadd9",
  "Dadd9",
  "Ebadd9",
  "Eadd9",
  "Fadd9",
  "Gbadd9",
  "Gadd9",
  "Abadd9",
];

export const chords_Arr_iv_sh = [
  "Aadd9",
  "A#add9",
  "Badd9",
  "Cadd9",
  "C#add9",
  "Dadd9",
  "D#add9",
  "Eadd9",
  "Fadd9",
  "F#add9",
  "Gadd9",
  "G#add9",
];

export const chords_Arr_v = [
  "Dmadd11",
  "Ebmadd11",
  "Emadd11",
  "Fmadd11",
  "Gbmadd11",
  "Gmadd11",
  "Abmadd11",
  "Amadd11",
  "Bbmadd11",
  "Bmadd11",
  "Cmadd11",
  "Dbmadd11",
];

export const chords_Arr_v_sh = [
  "Dmadd11",
  "D#madd11",
  "Emadd11",
  "Fmadd11",
  "F#madd11",
  "Gmadd11",
  "G#madd11",
  "Amadd11",
  "A#madd11",
  "Bmadd11",
  "Cmadd11",
  "C#madd11",
];

export const chords_Arr_vi = [
  "Dm7",
  "Ebm7",
  "Em7",
  "Fm7",
  "Gbm7",
  "Gm7",
  "Abm7",
  "Am7",
  "Bbm7",
  "Bm7",
  "Cm7",
  "Dbm7",
];

export const chords_Arr_vi_sh = [
  "Dm7",
  "D#m7",
  "Em7",
  "Fm7",
  "F#m7",
  "Gm7",
  "G#m7",
  "Am7",
  "A#m7",
  "Bm7",
  "Cm7",
  "C#m7",
];

export let chords_Arr_i_regex = [
  {
    chord: "C",
    regex: /\s[C]\s/g,
  },
  {
    chord: "Db",
    regex: /\s[D]b\s/g,
  },
  {
    chord: "D",
    regex: /\s[D]\s/g,
  },
  {
    chord: "Eb",
    regex: /\s[E]b\s/g,
  },
  {
    chord: "E",
    regex: /\s[E]\s/g,
  },
  {
    chord: "F",
    regex: /\s[F]\s/g,
  },
  {
    chord: "Gb",
    regex: /\s[G]b\s/g,
  },
  {
    chord: "G",
    regex: /\s[G]\s/g,
  },
  {
    chord: "Ab",
    regex: /\s[A]b\s/g,
  },
  {
    chord: "A",
    regex: /\s[A]\s/g,
  },
  {
    chord: "Bb",
    regex: /\s[B]b\s/g,
  },
  {
    chord: "B",
    regex: /\s[B]\s/g,
  },
];

export let chords_Arr_ii_regex = [
  {
    chord: "Dm",
    regex: /\s[D]m\s/g,
  },
  {
    chord: "Ebm",
    regex: /\s[E]bm\s/g,
  },
  {
    chord: "E",
    regex: /\s[E]m\s/g,
  },
  {
    chord: "F",
    regex: /\s[F]m\s/g,
  },
  {
    chord: "F#m",
    regex: /\s[F]#m\s/g,
  },
  {
    chord: "Gm",
    regex: /\s[G]m\s/g,
  },
  {
    chord: "Abm",
    regex: /\s[A]bm\s/g,
  },
  {
    chord: "Am",
    regex: /\s[A]m\s/g,
  },
  {
    chord: "Bbm",
    regex: /\s[B]bm\s/g,
  },
  {
    chord: "Bm",
    regex: /\s[B]m\s/g,
  },
  {
    chord: "C",
    regex: /\s[C]m\s/g,
  },
  {
    chord: "C#m",
    regex: /\s[C]#m\s/g,
  },
];

export const chords_Arr_Regex = [
  {
    chord: "C",
    regex: /\s[C]\s/g,
  },
  {
    chord: "Db",
    regex: /\s[D]b\s/g,
  },
  {
    chord: "D",
    regex: /\s[D]\s/g,
  },
  {
    chord: "Eb",
    regex: /\s[E]b\s/g,
  },
  {
    chord: "E",
    regex: /\s[E]\s/g,
  },
  {
    chord: "F",
    regex: /\s[F]\s/g,
  },
  {
    chord: "Gb",
    regex: /\s[G]b\s/g,
  },
  {
    chord: "G",
    regex: /\s[G]\s/g,
  },
  {
    chord: "Ab",
    regex: /\s[A]b\s/g,
  },
  {
    chord: "A",
    regex: /\s[A]\s/g,
  },
  {
    chord: "Bb",
    regex: /\s[B]b\s/g,
  },
  {
    chord: "B",
    regex: /\s[B]\s/g,
  },
  {
    chord: "Dm",
    regex: /\s[D]m\s/g,
  },
  {
    chord: "Ebm",
    regex: /\s[E]bm\s/g,
  },
  {
    chord: "Em",
    regex: /\s[E]m\s/g,
  },
  {
    chord: "F",
    regex: /\s[F]m\s/g,
  },
  {
    chord: "F#m",
    regex: /\s[F]#m\s/g,
  },
  {
    chord: "Gm",
    regex: /\s[G]m\s/g,
  },
  {
    chord: "Abm",
    regex: /\s[A]bm\s/g,
  },
  {
    chord: "Am",
    regex: /\s[A]m\s/g,
  },
  {
    chord: "Bbm",
    regex: /\s[B]bm\s/g,
  },
  {
    chord: "Bm",
    regex: /\s[B]m\s/g,
  },
  {
    chord: "C",
    regex: /\s[C]m\s/g,
  },
  {
    chord: "C#m",
    regex: /\s[C]#m\s/g,
  },
];

/* Tuning */
export const tuning_List = [
  "Standard",
  "Half-Step Down",
  "Perfect Fourth Tuning",
  "A Tuning",
  "B Tuning",
  "C Tuning",
  "C# Tuning",
  "D Tuning",
  "Drop A",
  "Drop Bb",
  "Drop B",
  "Drop C",
  "Drop Db",
  "Drop D",
  "Open C",
  "Open D",
  "Open E",
  "Open G",
  "Celtic",
];

export const tuning_object = [
  {
    name : 'Standard',
    tuning : ["E", "A", "D", "G", "B", "E"]
  },
  {
    name: "Half-Step Down",
    tuning : ['D#','G#','C#','F#','A#','D#']
  },
  {
    name : 'Perfect Fourth Tuning',
    tuning : ['E',"A","D","G","C","F"]
  },
  {
    name : 'A Tuning',
    tuning : ['E','A','E','A','C#','E']
  },
  {
    name : 'B Tuning',
    tuning : ['B','E','A','D','F#','B']
  },
  {
    name : 'C Tuning',
    tuning : ['C','F','A#','D#','G','C']
  },
  {
    name : 'C# Tuning',
    tuning : ['C#','F#','B','E','G#','C#']
  },
  {
    name : 'D Tuning',
    tuning : ['D','G','C','F','A','D']
  },
  {
    name: 'Drop A',
    tuning : ['A','E','A','D','F#','B']
  },
  {
    name: 'Drop B',
    tuning : ['B','F#','B','E','G#','C#']
  },
  {
    name: 'Drop C',
    tuning : ['C','G','C','F','A','D']
  },
  {
    name : 'Drop Db',
    tuning : ['Db','Ab','Eb','Gb','Bb','Eb']
  },
  {
    name : 'Drop D',
    tuning : ['D','A','D','G','B','E']
  },
  {
    name: 'Open C',
    tuning : ['C','G','C','G','C','E']
  },
  {
    name: 'Open D',
    tuning : ['D','A','D','F#','A','D']
  },
  {
    name: 'Open E',
    tuning : ['E','B','E','G#','B','E']
  },
  {
    name : 'Open G',
    tuning : ['D','G','D','G','B','D']
  },
  {
    name : 'Celtic',
    tuning : ['D','A','D','G','A','D']
  },
]

/* Keys */
export const key_List = [
  '---',
  'C',
  'G',
  'D',
  'A',
  'E',
  'Em',
  'F',
  'Am',
  'Dm',
  'B',
  'Bm',
  'Bb',
  'Cm',
  'Eb',
  'Gm',
  'Ab',
  'F#m',
  'C#m',
  'Fm'
]
