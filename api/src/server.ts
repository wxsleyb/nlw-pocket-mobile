import express from "express"


import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:8081', // Especifique a origem
  credentials: true, // Permite cookies/credenciais
}));

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
