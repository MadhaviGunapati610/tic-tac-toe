export function counterIncrement() {
  console.log("counter");
  return {
    type: 'increment'
  }
}