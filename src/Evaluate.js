const operatorMap = {
    1:["abs","ln","e","pi","sin","csc","asin","cos","csc","acos","tan","cot","atan"],
    2:["-","+","/","*","^"]
};

function Retrieve(operator) {
    for (var nPop in operatorMap) {
        if (operatorMap[nPop].includes(operator)) {
            return nPop;
        }
    }
    return 0;
}

function ToPostfix(query) {
    console.log(query);
    // alt: 1/(n+1)*x^(n+1)
    var infix = [];
    var operator = "";
    // Build infix array
    for (var j = 0; j < query.length; j++) {
        if (!isNaN(query[j]) || query[j] === "x" || operatorMap[2].includes(query[j]) || "()".includes(query[j])) {
            infix.push(operator);
            infix.push(query[j]);
            operator = "";
        }
        else {
            operator += query[j];
        }
    }
    console.log(infix);
    // Build postfix array
    var postfix = [];
    var stack = [];
    stack.push("(");
    infix.push(")");
    for (var i = 0; i < infix.length; i++) {
        console.log("iteration: "+i);
        console.log(stack);
        if (infix[i] === "") {
            continue;
        }
        else if (Retrieve(infix[i]) > 0) {
            console.log("operator: "+infix[i]);
            var DEBUG = 0;
            while (true) {
                DEBUG += 1;
                if (DEBUG > 10) {
                    console.log("DEBUG BREAK");
                    break;
                }
                var toPop = stack[stack.length-1];
                if (toPop === "(") {
                    break;
                }
                else {
                    var popRank = operatorMap[Retrieve(toPop)].indexOf(toPop)+((Retrieve(toPop) < 2) ? 100 : 0);
                    var curRank = operatorMap[Retrieve(infix[i])].indexOf(infix[i])+((Retrieve(infix[i]) < 2) ? 100 : 0);
                    if (curRank > popRank) {
                        break;
                    }
                    else {
                        postfix.push(toPop);
                        stack.pop();
                    }
                }
            }
            stack.push(infix[i]);
        }
        else if (infix[i] === "(") {
            console.log("open parantheses: "+infix[i]);
            stack.push(infix[i]);
        }
        else if (infix[i] === ")") {
            console.log("closing parantheses: "+infix[i]);
            var DEBUG = 0;
            while (true) {
                DEBUG += 1;
                if (DEBUG > 10) {
                    console.log("DEBUG BREAK");
                    break;
                }
                var toClear = stack[stack.length-1];
                if (toClear === "(") {
                    break;
                }
                postfix.push(toClear);
                stack.pop();
            }
            stack.pop();
        }
        else {
            console.log("other: "+infix[i]);
            postfix.push(infix[i]);
        }
    }
    return postfix;
}

function Operate(operator, operand) {
    if (operator === "ln") {
        return Math.log(operand[0]);
    }
    else if (operator === "abs") {
        return Math.abs(operand[0]);
    }
    else if (operator === "sin") {
        return Math.sin(operand[0]);
    }
    else if (operator === "csc") {
        return (1/Math.sin(operand[0]));
    }
    else if (operator === "asin") {
        return Math.asin(operand[0]);
    }
    else if (operator === "cos") {
        return Math.cos(operand[0]);
    }
    else if (operator === "sec") {
        return (1/Math.cos(operand[0]));
    }
    else if (operator === "acos") {
        return Math.acos(operand[0]);
    }
    else if (operator === "tan") {
        return Math.tan(operand[0]);
    }
    else if (operator === "cot") {
        return (1/Math.tan(operand[0]));
    }
    else if (operator === "atan") {
        return Math.atan(operand[0]);
    }
    else if (operator === "/") {
        return (operand[1]/operand[0]);
    }
    else if (operator === "*") {
        return (operand[1]*operand[0]);
    }
    else if (operator === "+") {
        return (operand[1]+operand[0]);
    }
    else if (operator === "-") {
        return (operand[1]-operand[0]);
    }
    else if (operator === "^") {
        return (Math.pow(operand[1],operand[0]));
    }
    else {
        return operand[0];
    }
}

function Evaluator(postfix) {
    var stack = [];
    for (var i = 0; i < postfix.length; i++) {
        if (isNaN(postfix[i])) {
            if (postfix[i] === "e") {
                stack.push(Math.E);
            }
            else if (postfix[i] === "pi") {
                stack.push(Math.PI);
            }
            else {
                var nPop = Retrieve(postfix[i]);
                var operand = [];
                for (var n = 0; n < nPop; n++) {
                    operand.push(stack[stack.length-1]);
                    stack.pop();
                }
                stack.push(Operate(postfix[i], operand));
            }
        }
        else {
            stack.push(Number(postfix[i]));
        }
    }
    return stack[0];
}

export function Evaluate(query, constMap) {
    var postfix = ToPostfix(query);
    console.log(postfix);
    var postfixA = [];
    var postfixB = [];
    for (var i = 0; i < postfix.length; i++) {
        if (postfix[i] === "x") {
            postfixA.push(constMap["a"]);
            postfixB.push(constMap["b"]);
        }
        else if (constMap.hasOwnProperty(postfix[i])) {
            postfixA.push(constMap[postfix[i]]);
            postfixB.push(constMap[postfix[i]]);            
        }
        else {
            postfixA.push(postfix[i]);
            postfixB.push(postfix[i]);
        }
    }
    return (Evaluator(postfixB) - Evaluator(postfixA));
}
