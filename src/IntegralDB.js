const IntegralDB = {
    "basic": [
        {
            "integral": "\\int_a^b x^n dx = \\frac{1}{n+1}x^{n+1} \\textnormal{, } n \\neq -1",
            "constants": ["a","b","n"],
            "query": ["integrate ", "x^", "n", " from ", "a", " to ", "b"]
        },
        {
            "integral": "\\int_a^b \\frac{1}{x} dx = \\ln(x)",
            "constants": ["a","b"],
            "query": ["integrate ", "1/x", " from ", "a", " to ", "b"]
        },
        {
            "integral": "\\int_a^b \\frac{1}{cx+d} dx = \\frac{1}{c}\\ln(x)\\biggr\\rvert cx+d \\biggr\\rvert",
            "constants": ["a","b","c","d"],
            "query": ["integrate ", "1/(", "c", "x", "+", "d", ")", " from ", "a", " to ", "b"]
        },
        {
            "integral": "\\int_a^b (x+c)^n dx = \\frac{(x+c)^{n+1}}{n+1} \\textnormal{, } n \\neq -1",
            "constants": ["a","b","c", "n"],
            "query": ["integrate ", "(", "x", "+", "c", ")", "^", "n", " from ", "a", " to ", "b"]
        }
    ]

}

export default IntegralDB;
