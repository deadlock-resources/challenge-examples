extern crate serde_json;

use std::env;

fn multiply(integers: &str) {

}

fn main() {
    let args: Vec<String> = env::args().collect();

    if args.len() > 1 {
        multiply(&args[1]);
    }
    else {
        println!("No given arguments");
    }
}
