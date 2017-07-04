const reverse = headNode => {
  let current = headNode;
  let prev = null, next = null;
  // while end of list hasn't been reached
  while (current) {
    // copy a pointer to the next element
    // before we overwrite current.next
    next = current.next;
    // reverse the 'next' pointer
    current.next = prev;
    // step forward in the list
    prev = current;
    current = next;
  }
  return prev;
};

let ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

console.log(JSON.stringify(reverse(ll)) === '{"val":5,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}');
