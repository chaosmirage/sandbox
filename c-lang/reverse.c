#include <string.h>
#include <stdio.h>

char *reverseXOR(char *str) {
  int i, length;
  char a, b;

  length = strlen(str);

  for (i = 0; i < (length / 2); i++)
  {
    a = *(str + i);
    b = *(str + (length - 1 - i));

    a ^= b;
    b ^= a;
    a ^= b;

    str[i] = a;
    str[length - 1 - i] = b;
  }

  return str;
}

int main()
{
  char *result;

  char input[] = "earth";

  result = reverseXOR(input);

  printf("result = %s\n", result);

  return 0;
}
