CC=gcc -Wall -Werror -Wextra -pedantic

all: main

main: Main.o
	$(CC) -o main Main.o libs/zserge/jsmn.h

Main.o: Main.c libs/zserge/jsmn.h

clean:
	rm -f *.o *.out

mrpropre: clean
	rm -f main


##### Explanation
# this example uses a standalone JSON library placed in a dedicated folder
# (@see https://github.com/zserge/jsmn)
