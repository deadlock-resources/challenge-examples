CC=g++ -std=c++17 -Wall -Werror -Wextra -pedantic

all: main

main: Main.o
	$(CC) -o main Main.o libs/nlohmann/json.hpp

Main.o: Main.cpp libs/nlohmann/json.hpp

clean:
	rm -f *.o *.out

mrpropre: clean
	rm -f main


##### Explanation
# this example uses a standalone JSON library placed in a dedicated folder
# (@see https://github.com/nlohmann/json)
