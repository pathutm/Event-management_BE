const axios = require("axios");

const generateDescription = async (input) => {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: input }] }]
    }
  );
  return response.data?.candidates[0]?.content?.parts[0]?.text || '';
};

module.exports = { generateDescription };
