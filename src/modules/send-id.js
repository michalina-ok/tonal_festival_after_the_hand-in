export async function sendID(payload) {
  const url="http://localhost:8080" 
  const url2="https://tonal-fest.fly.dev"     
  const res = await fetch(url2 + "/fullfill-reservation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
     return await res.json();
}


