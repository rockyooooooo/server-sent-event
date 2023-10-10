const sse = new EventSource('http://localhost:3000/')

sse.addEventListener("message", (e) => {
  console.log(e.data)
})
