const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    app.use(express.static(path.join(__dirname,"../","client")));
    res.sendFile(path.resolve(__dirname,"../","client","index.html"));
})

app.post('/convert', async (req, res) => {
  try {
    const {code,language} = req.body;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Convert this ${code} in this ${language} language`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const result = response.data.choices[0].text.trim();
    res.json({ result });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong while converting' });
  }
});

app.post('/debug', async (req, res) => {
  try {
    const {code} = req.body;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Debug this ${code}`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const result = response.data.choices[0].text.trim();
    res.json({ result });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong while debugging' });
  }
});

app.post('/checkquality', async (req, res) => {
  try {
    const {code} = req.body;
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      prompt: `Perform quality check for this ${code} that is it implemented correctly or not`,
      max_tokens: 100,
      temperature: 0.7,
      n: 1
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const result = response.data.choices[0].text.trim();
    res.json({ result });
  } catch (error) {
    console.error('Error:', error.response.data);
    res.status(500).json({ error: 'Something went wrong while quality checking' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

