package main

import (
    "encoding/json"
    "fmt"
    "os"
    "github.com/thoas/go-funk"
)

func multiply(integers string) {

}

func main() {
    if len(os.Args) > 1 {
        multiply(os.Args[1])
    } else {
        fmt.Println("No given arguments")
    }
}