function RetrievePop(operator) {
    const operatorMap = {
        1:["abs","ln","e","pi","sin","csc","asin","cos","csc","acos","tan","cot","atan"],
        2:["/","*","-","+","^"]
    };
    for (var nPop in operatorMap) {
        if (operatorMap[nPop].includes(operator)) {
            return nPop;
        }
    }
    return 0;
}

function Operate(operator, operand) {
    if (operator === "ln") {
        return Math.log(operand[0]);
    }
    else if (operator === "abs") {
        return Math.abs(operand[0]);
    }
    else if (operator === "e") {
        return Math.E;
    }
    else if (operator === "pi") {
        return Math.PI;
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
        return (operand[0]/operand[1]);
    }
    else if (operator === "*") {
        return (operand[0]*operand[1]);
    }
    else if (operator === "+") {
        return (operand[0]+operand[1]);
    }
    else if (operator === "-") {
        return (operand[0]-operand[1]);
    }
    else if (operator === "^") {
        return (Math.pow(operand[0],operand[1]));
    }
    else {
        return operand[0];
    }
}

function Evaluator(postfix) {
    var stack = [];
    for (var i in postfix) {
        if (isNaN(postfix[i])) {
            var nPop = RetrievePop(postfix[i]);
            var operand = [];
            for (var n = 0; n < nPop; n++) {
                operand.push(stack[stack.length-1]);
                stack.pop();
            }
            stack.push(Operate(postfix[i], operand));
        }
        else {
            stack.push(Number(postfix[i]));
        }
    }
    return stack[0];
}

export function Evaluate(query, points) {
    var postfixA = [];
    var postfixB = [];
    for (var i in query) {
        if (query[i] === "x") {
            postfixA.push(points[0]);
            postfixB.push(points[1]);
        }
        else {
            postfixA.push(query[i]);
            postfixB.push(query[i]);
        }
    }
    return (Evaluator(postfixB) - Evaluator(postfixA));
}
