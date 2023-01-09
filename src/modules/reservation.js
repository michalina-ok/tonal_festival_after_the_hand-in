export function insertReservation(payload) {
  const url1="http://localhost:8080";
  const url2="https://tonal-fest.fly.dev"
        fetch(url1 + "/reserve-spot/", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then((response) => response.json())
      .then((response) => props.setReservationID(response.id))
      .catch((err) => console.error(err))
}
