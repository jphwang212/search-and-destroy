'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let smiley = linkedlist.getNthNode(0);
  let diamond = linkedlist.getNthNode(0);
  while(diamond.next){
    smiley = smiley.next;
    diamond = diamond.next.next;
    if(diamond === smiley){
      return true;
    }
  }
  return false;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
