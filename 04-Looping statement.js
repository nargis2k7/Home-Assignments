function printOddNumbers() {
    for (i = 1; i <= 25; i++) {
        const oddno = i % 2;
        if (oddno > 0)
            console.log(" Odd number is--->" + i);
    }
}
printOddNumbers();