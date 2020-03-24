function fibo(num) {

let numbers = {
n1: 1,
n2: 1,
n3: ""
};

let result = [numbers.n1, numbers.n2]; // initial sequence

if (num <= 2) {

return result.splice(0, num); // show the sequence up to 2 num

} else if (num >= 3) {

for (let i = 3; i <= num; i++) {

numbers.n3 = numbers.n1 + numbers.n2;
numbers.n1 = numbers.n2;
numbers.n2 = numbers.n3;

result.push(numbers.n3); // push new num to the initial sequence
}

return result;
}

}

fibo(25);
