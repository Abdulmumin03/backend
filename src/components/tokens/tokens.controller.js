const { validationResult } = require('express-validator');
const axios = require('axios');
const asyncHandler = require('express-async-handler');

exports.token = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw userError.InvalidInput(errors.mapped());
    }

    const { clientId, clientSecret, audience, grantType } = req.body;

    const data = JSON.stringify({
        "clientId": clientId,
        "clientSecret": clientSecret,
        "audience": audience,
        "grantType": grantType
      });
    
      const config = {
        method: 'post',
        url: 'https://periculum-technologies-inc.auth0.com/oauth/token',
        headers: {
          'Content-Type': 'application/json'
        },
        data
      };

      try {
        const result = await axios(config);
      } catch (error) {
          return error
      }
};
