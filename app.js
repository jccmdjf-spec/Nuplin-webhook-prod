const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Nuplin Webhook PROD running OK");
});

app.post("/activation", (req, res) => {
  console.log("Activation received (PROD):", req.body);

  res.status(200).json({
    ok: true,
    received: true
  });
});

app.get("/jwks/prod.json", (req, res) => {
  res.json({
    keys: [
      {
        kty: "RSA",
        use: "sig",
        alg: "RS256",
        kid: "VVqD52juwf5RtqUMeIsrEkWkaJqe5iderO6p1eZ3rXw",
        n: "ya6aB7Mz7n5Sr3NH7Blv7kT6_NzZQ5AcZ9oS4GOfBAryULotc8pQzRfCSa8E9Sn310wfwTTM3ceGHsyPcUIdP8XCUmH0u5MDFz3GjWoU93_A2T9FHrmBqg8ERY5tMDjxOMJaqtuHaEIRe1dsSuETtDAL1HrdBwCVu5j1zdImmODDly01JMoTtbQM_Ukt-6Je07SuZSMqiQIWefaPiJCVah9CFXNTLkCKJg4wkQPuYb6-pmuugeQHpOnhNqjDoe8MDcA2YcHfBuLu1P_T5fCGQ1xFb1bavUKW91cevwOWlTmty-lg8AUoutLfUyrKsW6TMLbdW6otCTgFkFtDGW-RdQ",
        e: "AQAB"
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
