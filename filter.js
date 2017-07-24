const str = 'hello';

const filter = (func, elements) => {
  if (elements.length === 0) {
    return '';
  }

  const head = elements[0];
  const tail = elements.slice(1);

  if(func(head)){
    return head + filter(func, tail);
  }

  return filter(func, tail);
}

const filtered = filter((element) => {
  return element === 'l';
}, str);

console.log(filtered);
