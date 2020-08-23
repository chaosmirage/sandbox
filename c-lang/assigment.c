#include <stdio.h>

int main()
{
  int a, b, c, d;

  a = b = c = (d = 1) + 1;

  printf("%d %d %d %d", a, b, c, d);
  return 0;
}
