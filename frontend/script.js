const url = 'http://localhost:3000/'

// const sse = new EventSource(url)

// sse.addEventListener("message", (e) => {
//   console.log(e.data)
// })
// sse.addEventListener("hello", (e) => {
//   console.log(e.data)
// })
// sse.addEventListener("json", (e) => {
//   const json = JSON.parse(e.data)
//   console.log(json)
// })
// sse.addEventListener("bye", (e) => {
//   console.log(e.data)
// })

fetch(url)
  .then(response => {
    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader();

    const stream = new ReadableStream({
      start() {
        reader.read().then((rlt) => {
          console.log('start: ', rlt)
        });
      },
      pull() {
        reader.read().then((rlt) => {
          console.log('pull: ', rlt)
        })
      }
    })
  });