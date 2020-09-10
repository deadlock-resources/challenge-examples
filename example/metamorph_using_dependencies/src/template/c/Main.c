#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "libs/zserge/jsmn.h"

void multiply(char * integers) {

}

int main(int argc, char * argv[])
{
    if (argc > 1) {
        multiply(argv[1]);
    } else {
        printf("No given arguments\n");
    }
    return 0;
}
