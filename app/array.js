function reverseArray(ar) {
  for (let i = 0; i < ar.length / 2; i++) {
    const last = ar[i];
    ar[i] = ar[ar.length - 1 - i];
    ar[ar.length - 1 - i] = last;
  }

  return ar;
}

const ar = [1, 2, 3, 4, 5];
console.log(reverseArray(ar));
