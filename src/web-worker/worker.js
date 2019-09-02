self.addEventListener('message', e => {
  /**
   * This simple counter is an example of a long and blocking job that web worker can perform on its thread.
   */
  let users = 0;
  for (let i = 0; i < 5000000000; i++) {
    users += 1;
  }
  console.log(`Finished fetching ${users} users`);
});
