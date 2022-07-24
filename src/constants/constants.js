export const ChordRegexOp = /\s[EAB]bm|\s[EAB]bm\s|[EAB]bm\s|\s[DEGAB]b|\s[DEGAB]b\s|[DEGAB]b\s|[DEGAB]b|\s[ABCDEFG]m|\s[ABCDEFG]m\s|[ABCDEFG]m\s|\s[ABCDEFG]\s|[A-G]\s/g;

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

export const chords_Arr_ii = [
  "Dm",
  "Ebm",
  "Em",
  "Fm",
  "F#m",
  "Gm",
  "Abm",
  "Am",
  "Bbm",
  "Bm",
  "Cm",
  "C#m",
];

export let chords_Arr_i_regex = [
    {
        chord : 'C',
        regex : /\s[C]\s/g
    },
    {
        chord : 'Db',
        regex : /\s[D]b\s/g
    },
    {
        chord : 'D',
        regex : /\s[D]\s/g
    },
    {
        chord : 'Eb',
        regex : /\s[E]b\s/g
    },
    {
        chord : 'E',
        regex : /\s[E]\s/g
    },
    {
        chord : 'F',
        regex : /\s[F]\s/g
    },
    {
        chord : 'Gb',
        regex : /\s[G]b\s/g
    },
    {
        chord : 'G',
        regex : /\s[G]\s/g
    },
    {
        chord : 'Ab',
        regex : /\s[A]b\s/g
    },
    {
        chord : 'A',
        regex : /\s[A]\s/g
    },
    {
        chord : 'Bb',
        regex : /\s[B]b\s/g
    },
    {
        chord : 'B',
        regex : /\s[B]\s/g
    }
];

export let chords_Arr_ii_regex = [
    {
        chord : 'Dm',
        regex : /\s[D]m\s/g
    },
    {
        chord : 'Ebm',
        regex : /\s[E]bm\s/g
    },
    {
        chord : 'E',
        regex : /\s[E]m\s/g
    },
    {
        chord : 'F',
        regex : /\s[F]m\s/g
    },
    {
        chord : 'F#m',
        regex : /\s[F]#m\s/g
    },
    {
        chord : 'Gm',
        regex : /\s[G]m\s/g
    },
    {
        chord : 'Abm',
        regex : /\s[A]bm\s/g
    },
    {
        chord : 'Am',
        regex : /\s[A]m\s/g
    },
    {
        chord : 'Bbm',
        regex : /\s[B]bm\s/g
    },
    {
        chord : 'Bm',
        regex : /\s[B]m\s/g
    },
    {
        chord : 'C',
        regex : /\s[C]m\s/g
    },
    {
        chord : 'C#m',
        regex : /\s[C]#m\s/g
    }
]

export const chords_Arr_Regex = [
    {
        chord : 'C',
        regex : /\s[C]\s/g
    },
    {
        chord : 'Db',
        regex : /\s[D]b\s/g
    },
    {
        chord : 'D',
        regex : /\s[D]\s/g
    },
    {
        chord : 'Eb',
        regex : /\s[E]b\s/g
    },
    {
        chord : 'E',
        regex : /\s[E]\s/g
    },
    {
        chord : 'F',
        regex : /\s[F]\s/g
    },
    {
        chord : 'Gb',
        regex : /\s[G]b\s/g
    },
    {
        chord : 'G',
        regex : /\s[G]\s/g
    },
    {
        chord : 'Ab',
        regex : /\s[A]b\s/g
    },
    {
        chord : 'A',
        regex : /\s[A]\s/g
    },
    {
        chord : 'Bb',
        regex : /\s[B]b\s/g
    },
    {
        chord : 'B',
        regex : /\s[B]\s/g
    },{
        chord : 'Dm',
        regex : /\s[D]m\s/g
    },
    {
        chord : 'Ebm',
        regex : /\s[E]bm\s/g
    },
    {
        chord : 'Em',
        regex : /\s[E]m\s/g
    },
    {
        chord : 'F',
        regex : /\s[F]m\s/g
    },
    {
        chord : 'F#m',
        regex : /\s[F]#m\s/g
    },
    {
        chord : 'Gm',
        regex : /\s[G]m\s/g
    },
    {
        chord : 'Abm',
        regex : /\s[A]bm\s/g
    },
    {
        chord : 'Am',
        regex : /\s[A]m\s/g
    },
    {
        chord : 'Bbm',
        regex : /\s[B]bm\s/g
    },
    {
        chord : 'Bm',
        regex : /\s[B]m\s/g
    },
    {
        chord : 'C',
        regex : /\s[C]m\s/g
    },
    {
        chord : 'C#m',
        regex : /\s[C]#m\s/g
    }
]
