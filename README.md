# Simple example of Web Worker implementation in VueJS

### Requirements

- Vue CLI 3 (see https://cli.vuejs.org for installation instructions)
- worker-loader to let Webpack load the worker for you

### Running the project

```
npm run serve
```

### How to build it yourself

1. Create the project

```
vue create <PROJECT-NAME>
```

2. Add [worker-loader](https://github.com/webpack-contrib/worker-loader) and [promise-worker](https://github.com/nolanlawson/promise-worker) to devDependencies

```
npm add worker-loader promise-worker -D
```

3. Create your web worker directory with two files: `index.js` and `worker.js`

4. This is an example of `worker.js` file. In this file you will register your worker using `register` method from `promise-worker` package. That method allows you to perform some tasks based on the message it received. The message you sent here can be a String or an Object. It depends on how you will specify this later in your `index.js` file while creating the worker instance.

```
// This is worker.js

import registerPromiseWorker from 'promise-worker/register';

registerPromiseWorker(message => {
  if (message === 'ANY MESSAGE YOU WANT') {
    /**
     * do your web worker task here,
     * if you decide to respond back when the task is done, simply return something,
     * and you will be able to get that message as a response in your worker in the component
     */
  }
});

```

5. This is an example of `index.js` file. In this file we want to import the `worker` and `promise-worker` and create a new instance of PromiseWorker based on your worker. Now we need to declare how the postMessage method will look like. My `postMessage` takes a message of String type (but as mentioned before it could as well be an Object, it depends on your needs). The last piece is to just export a `postMessage` function so we could use it in the component.

```
// This is index.js file
import Worker from 'worker-loader!./worker';
import PromiseWorker from 'promise-worker';

const worker = new Worker();
const promiseWorker = new PromiseWorker(worker);

const postMessage = message =>
  promiseWorker.postMessage(message);

export default {
  postMessage
};
```

6. Now you can import your Web Worker to a chosen component and use it like this.

```
 import worker from '@/web-worker'
/* ... */
worker.postMessage('ANY MESSAGE YOU WANT').then(reply => /* do something with the reply here */)
```
