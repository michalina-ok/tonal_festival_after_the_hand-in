export function insertReservation(payload) {
  const url="http://localhost:8080";
        fetch(url + "/reserve-spot/", {
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
