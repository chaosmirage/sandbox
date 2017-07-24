const str = 'hello, Liana';

const reduce = (func, acc, elements) => {
  if (elements.length === 0) {
    return acc;
  }

  const head = elements[0];
  const tail = elements.slice(1);

  const newAcc = func(head, acc);

  return reduce(func, newAcc, tail);
}

const reduced = reduce((element, acc) => {
  return element.toLowerCase() === 'l' ? acc + 1 : acc;
}, 0, str);

console.log(reduced);
