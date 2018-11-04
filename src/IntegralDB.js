const IntegralDB = {
    "basic": [
        {
            "integral": "\\int_a^b x^n dx = \\frac{1}{n+1}x^{n+1} \\textnormal{, } n \\neq -1",
            "constants": ["a","b","n"],
            "query": ["integrate ","x","^","n"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{1}{x} dx = \\ln(x)",
            "constants": ["a","b"],
            "query": ["integrate ","1/x"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{1}{Ax+B} dx = \\frac{1}{A}\\ln(x)\\biggr\\rvert Ax+B \\biggr\\rvert",
            "constants": ["a","b","A","B"],
            "query": ["integrate ","1","/","(","A","x","+","B",")"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b (x+c)^n dx = \\frac{(x+c)^{n+1}}{n+1} \\textnormal{, } n \\neq -1",
            "constants": ["a","b","c","n"],
            "query": ["integrate ","(","x","+","c",")","^","n"," from ","a"," to ","b"]
        }
    ],
    "rational": [
        {
            "integral": "\\int_a^b \\frac{1}{1+x^2} dx = \\tan^{-1}(x)",
            "constants": ["a","b"],
            "query": ["integrate ","1","/","(","1","+","x","^","2",")"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{1}{c^2+x^2} dx = \\frac{1}{c}\\tan^{-1}\\biggr(\\frac{x}{c}\\biggr)",
            "constants": ["a","b","c"],
            "query": ["integrate ","1","/","(","c","^","2","+","x","^","2",")"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{x}{c^2+x^2} dx = \\frac{1}{2}\\ln{\\biggr\\rvert c^2 + x^2 \\biggr\\rvert}",
            "constants": ["a","b","c"],
            "query": ["integrate ","x","/","(","c","^","2","+","x","^","2",")"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{x^2}{c^2+x^2} dx = x-c\\tan^{-1}\\biggr(\\frac{x}{c}\\biggr)",
            "constants": ["a","b","c"],
            "query": ["integrate ","(","x","^","2",")","/","(","c","^","2","+","x","^","2",")"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{x^3}{c^2+x^2} dx = \\frac{1}{2}x^2-\\frac{1}{2}c^2\\ln{\\biggr\\rvert c^2 + x^2 \\biggr\\rvert}",
            "constants": ["a","b","c"],
            "query": ["integrate ","(","x","^","3",")","/","(","c","^","2","+","x","^","2",")"," from ","a"," to ","b"]
        },
        {
            "integral": "\\int_a^b \\frac{1}{Ax^2+Bx+C} dx = \\frac{2}{\\sqrt{4AC-B^2}}\\tan^{-1}\\biggr(\\frac{2Ax+B}{\\sqrt{4AC+B^2}}\\biggr)",
            "constants": ["a","b","A","B","C"],
            "query": ["integrate ","1","/","(","A","x","^","2","+","B","x","+","C" ,")"," from ","a"," to ","b"]
        }
    ],
}

export default IntegralDB;
