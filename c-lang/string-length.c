#include <stdio.h>

int string_length(const char *str)
{
  // p - адресный тип, char - тип переменной (области памяти ???) расположенной по адресу p
  const char *p;

  // *p - значение на которое указывает адрес
  for (p = str; *p; p++) {}

  return p - str;
}

int main () {
  printf("%d", string_length("Adel"));
  return 0;
}
