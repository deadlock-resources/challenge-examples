challenge! {{
    "languages": ["c", "cpp", "kotlin", "java", "go", "javascript", "python", "rust"],
    "tests": [
        {
            input: "[2, 3]",
            expected: 6
        },
        {
            input: "[2, 5]",
            expected: call("javascript", "solution.js")
        },
        {
            input: open("toast"),
            expected: 8
        },
        {
            input: open("toast"),
            expected: call("javascript", "solution.js")
        },
        {
            input: call("javascript", "input.js"),
            expected: call("javascript", "solution.js")
        }
    ]
}}