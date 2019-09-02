# Simple example of Web Worker implementation in VueJS

### Requirements

- Vue CLI 3 (see https://cli.vuejs.org for installation instructions)
- worker-loader to let Webpack load the worker for you

### Running the project

```
npm run serve
```

### Compiles and hot-reloads for development

```
npm run serve
```

### How to build it yourself

1. Create the project

```
vue create <PROJECT-NAME>
```

2. Add worker-loader to devDependencies

```
npm add worker-loader -D
```

3. Create your worker directory with two files: `index.js` and `worker.js`

4. This is an example of `worker.js` file. This file contains a listener that is listening for a message from the worker.
   Put here some long and blocking tasks that you want to perform on a sparate thread.

```
// This is worker.js
self.addEventListener('message', e => {
  /**
  * Do something here
  *
  */
});
```

5. This is an example of `index.js` file. In this file we want to import the worker and create a new instance of it. We also need to export a `postMessage` function so it can be accessed globally.

```
// This is index.js file
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
```

6. Now you can import your Web Worker to a chosen component and use it like this.

```
 import worker from '@/web-worker'
/* ... */
worker.postMessage('ANY MESSAGE YOU WANT')
```
