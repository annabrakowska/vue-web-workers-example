<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide on what Web Workers are and some of their use cases,
      <br />check out
      <a href="#" target="_blank" rel="noopener">my article</a>.
    </p>
    <h2>Example with Web Worker</h2>
    <button @click="withoutWebWorker">Without Web Worker</button>
    <input placeholder="Please try to type..." />
    <ul>
      <li>1. Open your console</li>
      <li>2. Click Button saying 'With Web Worker'</li>
      <li>3. Observe non-blocking behavior in the browser: you will be able to access the UI (try to type in the input)</li>
    </ul>

    <hr />
    <h2>Example without Web Worker</h2>
    <button @click="withWebWorker">With Web Worker</button>
    <input placeholder="Please try to type..." />
    <ul>
      <li>1. Open your console</li>
      <li>2. Click Button saying 'Without Web Worke'</li>
      <li>3. Observe blocking behavior in the browser: you won't be able to access the UI (try to type in the input)</li>
    </ul>
    <div></div>
  </div>
</template>

<script>
import worker from "@/web-worker";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    withWebWorker() {
      console.log("Declared before Web Worker");
      worker.postMessage("COUNT");
      console.log("Declared after Web Worker");
    },
    withoutWebWorker() {
      console.log("Call 1");
      this.counter();
      console.log("Call 2");
    },
    counter() {
      let users = 0;
      for (let i = 0; i < 5000000000; i++) {
        users += 1;
      }
      console.log(`Finished fetching ${users}`);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  padding: 1vh;
  border-radius: 0.5vh;
  margin-right: 2vh;
  font-size: 1.8vh;
}
</style>
