// debounce.js
// modified form of debounce.js
export const debounce = (fn,timeout=3000) => {
  let ref;
  return () => {
    clearTimeout(ref);
    ref = setTimeout(() => fn(),timeout)
  }
}


----------Inside another file------------

import { debounce } from './debounce.js';
const debounceRefFirst = debounce(() => console.log('hello'));
const debounceRefSecond = debounce(() => console.log('world'));
debounceRefFirst();
debounceRefFirst();
debounceRefFirst();
debounceRefSecond();
debounceRefSecond();
debounceRefSecond();
//output
hello
world


The most common applications are listed below

1>Analytics (for tooltips mainly on hover actions)
2>Limiting API call (Search Bar)
3>Generate Report
