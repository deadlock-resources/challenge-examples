#include <iostream>
#include "libs/nlohmann/json.hpp"

using json = nlohmann::json;
using namespace std;

void multiply(char * integers) {

}

int main(int argc, char * argv[])
{
    if (argc > 1) {
        multiply(argv[1]);
    } else {
        cout << "No given arguments" << endl;
    }
    return 0;
}
