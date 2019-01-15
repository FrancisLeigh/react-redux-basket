const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const discounts = {
  75: ['BO1010', 'DC1234'],
  30: ['C10CCC', 'XY2544']
}


app.get('/discounts', (req, res) => res.json(discounts))
app.get('/discounts/:discountCode', (req, res) => {
  const DISCOUNT = Object.keys(discounts).find(dk => discounts[dk].indexOf(req.params.discountCode) !== -1) || false

  res.json({
    value: !DISCOUNT ? 0 : +DISCOUNT,
    code: req.params.discountCode,
    valid: !!DISCOUNT
  })
})

app.listen(PORT, () => console.log(`Basket API running on port ${PORT}!`))
