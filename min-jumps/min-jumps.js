'use strict';

// Complete this algo
const minJumps = arr => {
  let len = arr.length - 1,
    curr = -1,
    next = 0,
    ans = 0;
  for (let i = 0; next < len; i++) {         // Step
    if (i > curr) {                          //  0.  1.  2.  3.
      ans++;                                 //  1   2   3   4
      curr = next;                           //  0   2   5   5
      next = Math.max(next, arr[i] + i);     //  2   5   5   5
    }
  }
  return ans;

};

// ans = 1,

module.exports = minJumps
