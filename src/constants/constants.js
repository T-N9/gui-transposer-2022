// export const ChordRegexOp =
//   /\s[EAB]bm|\s[EAB]bm\s|[EAB]bm\s|\s[DEGAB]b|\s[DEGAB]b\s|[DEGAB]b\s|[DEGAB]b|\s[ABCDEFG]m|\s[ABCDEFG]m\s|[ABCDEFG]m\s|\s[ABCDEFG]\s|[A-G]\s|\s[A-G]7|\s[A-G]7\s|[A-G]7\s|\s[ACDFG]#7|\s[ACDFG]#7\s|[ACDFG]#7\s|\[Verse \d+\]|\[Chorus \d+\]|\[Chorus\]|\[Verse\]|\[Intro\]/gm;

export const ChordRegexOp =
  /\s[ABDEG]bm|[ABDEG]bm\s|\s[ACDFG]#m|[ACDFG]#m\s|\s[ACDFG]#7|[ACDFG]#7\s|\s[A-G]m|[A-G]m\s|\s[A-G]#|[A-G]#\s|\s[ABDEG]b|[ABDEG]b\s|\s[A-G]7|[A-G]7\s|[A-G]\s|\s[A-G]\s|\[Verse \d+\]|\[Chorus \d+\]|\[Chorus\]|\[Verse\]|\[Intro\]|\[Instrumental\]/gm;

// in-progress
// \s[EAB]bm|\s[EAB]bm\s|[EAB]bm\s|\s[DEGAB]b|\s[DEGAB]b\s|[DEGAB]b\s|[DEGAB]b|\s[A-G]m|\s[A-G]m\s|[A-G]m\s|\s[A-G]\s|[A-G]\s|[A-G]#\s|\s[A-G]#\s|[AFC]#m\s

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
