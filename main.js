let dict = {
	"0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine"
};

let integers = process.argv.slice(2);
let n = integers.length;
for (i = 0; i < n; i++) {
    [...integers[i]].forEach(c => process.stdout.write(dict[c]));
    if (i != n-1) {
        process.stdout.write(", ");
    }
}