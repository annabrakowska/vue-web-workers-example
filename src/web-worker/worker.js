import registerPromiseWorker from 'promise-worker/register';

registerPromiseWorker(message => {
  if (message === 'fetch users') {
    let users = 0;
    for (let i = 0; i < 5000000000; i++) {
      users += 1;
    }
    return `Finished fetching ${users} users`;
  }
});
