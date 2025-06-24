curl -X POST http://localhost:5000/tickets \
  -H "Content-Type: application/json" \
  -d '{"title": "Концерт", "price": 100}'

curl http://localhost:5000/tickets/1

curl http://localhost:5000/tickets

curl -X DELETE http://localhost:5000/tickets/1