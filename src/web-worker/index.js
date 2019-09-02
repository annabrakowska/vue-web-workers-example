import Worker from 'worker-loader!./worker';
import PromiseWorker from 'promise-worker';

const worker = new Worker();
const promiseWorker = new PromiseWorker(worker);

const postMessage = message => promiseWorker.postMessage(message);

export default {
  postMessage
};
