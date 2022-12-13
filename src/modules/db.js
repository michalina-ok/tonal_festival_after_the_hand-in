export function insertOrder(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnhlZ3ZmcGpqemV0ZmVwamF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAzMTY4MTUsImV4cCI6MTk4NTg5MjgxNX0.NFD02g3DqaTae1gvjzYbO3yoqM3jwl_ppVHWx24GRaE'
    const url = 'https://oxvxegvfpjjzetfepjau.supabase.co'
        fetch(url + "/rest/v1/ticket_orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnhlZ3ZmcGpqemV0ZmVwamF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAzMTY4MTUsImV4cCI6MTk4NTg5MjgxNX0.NFD02g3DqaTae1gvjzYbO3yoqM3jwl_ppVHWx24GRaE',
          Prefer: 'return=representation'
        },
        body: JSON.stringify(payload)
      })
      .then()
      .then()
}

