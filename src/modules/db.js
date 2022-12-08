export function insertOrder(e) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dnhlZ3ZmcGpqemV0ZmVwamF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAzMTY4MTUsImV4cCI6MTk4NTg5MjgxNX0.NFD02g3DqaTae1gvjzYbO3yoqM3jwl_ppVHWx24GRaE'
    const url = 'https://oxvxegvfpjjzetfepjau.supabase.co'
        fetch(url + "rest/tonal_festival", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0Y2NiZWRmbG5uY2VhZ3Ricm5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3NTIsImV4cCI6MTk4MjE3NDc1Mn0.4N45RztdSlwxPhWWW86iD4l30az5yHsCQX_ncubfZa4',
          Prefer: 'return=representation'
        },
        body: JSON.stringify(e)
      })
      .then()
      .then()
}