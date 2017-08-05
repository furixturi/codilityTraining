/** Lesson 5 Prefix Sum - Task 2 CountDiv
Compute number of integers divisible by k in range [a..b].
Task description
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Assume that:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).*/

// 50%
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    let n = 0;
        
    if(A == B) {
        if (A % K == 0) {
            n = 1;
        }else {
            n = 0;
        }        
    } else {
        if(K < A) {
            n = Math.ceil((B - A) / K)
        } else if (K >= A && K <= B) {
            n = Math.floor((B - A) / K)
        } else {
            n = 0;
        }
    }
    
    return n;
}

// 87%
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    let n = 0;
    
    if(K <= B) {
        n = Math.floor(B / K) - Math.floor(A / K)
    
        if(A % K === 0) {
            n += 1;    
        }
    }
    
    return n;
}

// 100%
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    let n = 0;
    if(K <= B) {    
        n = Math.floor(B / K) - Math.floor(A / K);
        if(A % K === 0) n += 1;
    } else if (K > B && A == 0) {
        n = 1;
    }
    
    return n;
}

