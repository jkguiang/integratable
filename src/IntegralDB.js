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
        }
    ]

}

export default IntegralDB;
