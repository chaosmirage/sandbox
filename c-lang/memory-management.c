#include <stdio.h>

void exapmle1()
{
  int x;

  // int - тип переменной, адрес которой описывается
  // *p описание адресного типа
  int *p;

  // & - операция взятия адреса переменной x
  p = &x;

  // * - операция разыменования (dereference), то на что указывает p
  *p = 27;

  printf("example 1 \n");
  printf("p = %p; *p = %d; x = %d; \n", p, *p, x);
}

void exapmle2()
{
  int x, y;
  int *p, *q, *r;

  x = 10;
  y = 20;

  p = &x;
  q = &y;

  r = p;

  *r = *q;

  printf("example 2 \n");
  printf("x = %d; y = %d; \n", x, y);
}

void example3()
{
  // m - адрес первого элемента
  int m[20];
  int *p, *q;
  int first_element, second_element, third_element;

  // p - указатель (переменная в которой хранится адрес)

  p = m;

  m[0] = 111;
  m[1] = 222;
  m[2] = 333;

  q = &m[15];

  first_element = *p;
  second_element = *(m + 1);
  third_element = *(m + 2);

  printf("example 3 \n");
  printf("sizeof m %lu \n", sizeof(m));
  printf("m = %p; p = %p \n", m, p);
  printf("first element %d \n", first_element);
  printf("second element %d \n", second_element);
  printf("third element %d \n", third_element);
  printf("don't use it *(a+b) %d \n", 0[m]);
  printf("q - m = %ld \n", q - m);
}

void example4()
{
  printf("example 4: dynamic memory \n");

}

int main()
{
  void *z;

  // NULL - специальное адресное значение, которое с гарантией не является адресом какой-либо ячейки или области памяти
  z = NULL;

  exapmle1();
  exapmle2();
  example3();
  example4();

  printf("z = %p \n", z);
  return 0;
}
