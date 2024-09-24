import express from 'express'
import axios from 'axios'
import crypto from 'crypto'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const channelId = 'YOUR_CHANNEL_ID'
const channelSecret = 'YOUR_CHANNEL_SECRET'
const requestUri = '/v3/payments/request'

const generateSignature = (channelSecret, uri, requestBody, nonce) => {
  const data = channelSecret + uri + JSON.stringify(requestBody) + nonce
  return crypto
    .createHmac('sha256', channelSecret)
    .update(data)
    .digest('base64')
}

app.post('/linepay/request', async (req, res) => {
  const { amount, orderId, packages, redirectUrls } = req.body
  const nonce = Date.now().toString()
  const requestBody = {
    amount,
    currency: 'TWD',
    orderId,
    packages,
    redirectUrls,
  }

  const signature = generateSignature(
    channelSecret,
    requestUri,
    requestBody,
    nonce
  )

  try {
    const response = await axios.post(
      'https://api-pay.line.me/v3/payments/request',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-LINE-ChannelId': channelId,
          'X-LINE-Authorization-Nonce': nonce,
          'X-LINE-Authorization': signature,
        },
      }
    )

    res.json(response.data)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Payment request failed' })
  }
})

const port = 3000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
