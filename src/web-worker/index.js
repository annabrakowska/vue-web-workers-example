import Worker from 'worker-loader!./worker';

const worker = new Worker();

const postMessage = message =>
  worker.postMessage({
    type: 'message',
    message
  });

export default {
  postMessage
};
