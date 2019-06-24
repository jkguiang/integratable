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
    // Build infix array
    var infix = [];
    var operator = "";
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
    // Build postfix array
    var postfix = [];
    var stack = [];
    stack.push("(");
    infix.push(")");
    for (var i = 0; i < infix.length; i++) {
        if (infix[i] === "") {
            continue;
        }
        else if (Retrieve(infix[i]) > 0) {
            while (true) {
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
            stack.push(infix[i]);
        }
        else if (infix[i] === ")") {
            while (true) {
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
            if (!isNaN(postfix[postfix.length-1]) && infix[i] !== "" && infix[i-1] !== "" && !isNaN(infix[i]) && !isNaN(infix[i-1])) {
                postfix[postfix.length-1] = postfix[postfix.length-1]+infix[i];
            }
            else {
                postfix.push(infix[i]);
            }
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

export function Enumerate(query, constMap, nPoints=null) {
    var postfix = ToPostfix(query);
    var toEvaluate = [];
    var toReplace = [];
    for (var c in constMap) {
        if (isNaN(constMap[c])) {
            constMap[c] = Evaluator(constMap[c]);
        }
    }
    for (var i = 0; i < postfix.length; i++) {
        if (postfix[i] === "x") {
            toReplace.push(i);
            toEvaluate.push("x");
        }
        else if (constMap.hasOwnProperty(postfix[i])) {
            toEvaluate.push(constMap[postfix[i]]);
        }
        else {
            toEvaluate.push(postfix[i]);
        }
    }
    var data = [];
    const a = Number(constMap["a"]);
    const b = Number(constMap["b"]);
    const p = (nPoints == null) ? Math.round((500*Math.abs(a-b))/(10+Math.abs(a-b))) : nPoints;
    if (p === 0) {
        return [{x:a, y: 0}, {x:b, y:0}];
    }
    else {
        const inc = (a === b) ? 0 : Math.abs(a-b)/(p);
        for (var x = Math.min(a,b); x <= Math.max(a,b); x+=inc) {
            for (var j = 0; j < toReplace.length; j++) {
                toEvaluate[toReplace[j]] = String(x);
            }
            var fVal = Evaluator(toEvaluate);
            data.push({x: x.toFixed(2), y: fVal*((a > b) ? -1 : 1 )});
        }
        return data;
    }
}
