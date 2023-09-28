var likert_scale = [
  "全くない", 
  "数日", 
  "半分以上", 
  "ほとんど毎日",
];

var items = [
    "緊張感、不安感または神経過敏を感じる",
    "心配することを止められない、または心配をコントロールできない",
    "いろいろなことを心配しすぎる",
    "くつろぐことが難しい",
    "じっとしていることができないほど落ち着かない",
    "いらいらしがちであり、怒りっぽい",
    "何か恐ろしいことがおこるのではないかと恐れを感じる"
];

var pageFirst = {
  type: jsPsychSurveyLikert,
  preamble: '<p>この２週間、次のような問題にどのくらい頻繁に悩まされていますか？ </p>',
  questions: [
    {prompt: items[0], name: 'gad_1', labels: likert_scale},
    {prompt: items[1], name: 'gad_2', labels: likert_scale},
    {prompt: items[2], name: 'gad_3', labels: likert_scale},
    {prompt: items[3], name: 'gad_4', labels: likert_scale},
    {prompt: items[4], name: 'gad_5', labels: likert_scale},
    {prompt: items[5], name: 'gad_6', labels: likert_scale},
    {prompt: items[6], name: 'gad_7', labels: likert_scale},
  ],
  randomize_question_order: true,
  button_label: '終了'
};

/*タイムラインの設定*/
const timeline = [pageFirst]
