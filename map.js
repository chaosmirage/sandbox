const str = 'hello';

const map = (func, elements) => {
  if (elements.length === 0) {
    return '';
  }

  const head = elements[0];
  const tail = elements.slice(1);

  const newElement = func(head);

  return newElement + map(func, tail);
}

const addSeparator = map((element) => {
  return element + ' separator ';
}, str);

console.log(addSeparator);
