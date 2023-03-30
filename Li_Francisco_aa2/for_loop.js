//variable declarations
let pat_1 = .5;
let pat_2 = .25;

for(let i = 1; i <= 4108; i++) {
    if(i < 4108) {
        document.write(i + ", ");
        pat_2 = pat_2 * 2;
        pat_1 = pat_1 + pat_2;
        i = i + pat_1;
    }
    else {
        document.write(i);
    };
};