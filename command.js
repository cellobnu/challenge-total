const solutions = {
  'triplo': 'return ( 3 * x );',
  'numberToString': 'return `${x}`;',
  'floatToInt': 'return parseFloat(x);',
  'isOdd': 'return ( x & 1 ) ? true : false;',
  'cubeSurfaceArea' : 'return parseFloat((6 * x * x).toFixed(4));',
  'squareRoot': 'return Math.sqrt(x);',
  'removeFirstThree': 'return x.splice(3);',
  'oddElements': 'return x.filter((_, indice) => indice % 2 == 0);',
  'flatten': 'return x.reduce(function(memo, el) {var items = Array.isArray(el) ? flatten(el) : [el];return memo.concat(items);}, []);',
  'sphereVolume': 'return parseFloat(((4 / 3) * Math.PI * Math.pow(x, 3)).toFixed(4));',
  'getFileExtension': "const ext = x.split('.').pop(); if(ext == x) return ''; return ext;",
  'hasOnlyVowels': 'return x ? x.match(/[aeiouAEIOU]/g).length === x.length : true;',
  'doubleIndex': 'return x.reduce(function(memo, el, i) { return (el === i + i) ? memo.concat(el) : memo;}, []);',
  'sortingType': 'sortingType',
  'dateRank' : 'dateRank',
  'stringToNumber': 'stringToNumber',
  'invertCase': 'invertCase',
  'mostFrequentItem': 'mostFrequentItem',
};

const solve = () => {
  const ace_editor = document.querySelector('.ace_editor > .ace_scroller > .ace_content > .ace_text-layer > .ace_line > .ace_function').textContent;
  const editor = document.querySelector('.ace_editor > .ace_scroller > .ace_content > .ace_text-layer').innerHTML;
  console.log('editor', editor);
  // const submission = ace_editor.getValue()
  // for (const key in solutions) {
  //   if (submission.includes('box.' + key + ' ')) {
  //     ace_editor.insert(solutions[key])
  //     // get_submit_button().click()
  //     // setTimeout(() => {
  //     //   get_submit_button().click()
  //     //   setTimeout(() => {
  //     //     solve()
  //     //   }, 400)
  //     // }, 900)
  //     return
  //   }
  // }
}
solve()

