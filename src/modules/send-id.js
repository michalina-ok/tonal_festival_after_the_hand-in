export async function sendID(payload) {
        const res = await fetch("http://localhost:8080/fullfill-reservation", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
     return await res.json();
}


