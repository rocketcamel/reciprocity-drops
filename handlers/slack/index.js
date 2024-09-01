const { verifyHeaders } = require("/opt/slackutils");

const handler = async (event, context) => {
  const verificationResult = verifyHeaders(event.headers, event.body);
  if (verificationResult === true) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        response_type: "in_channel",
        blocks: [
          {
            type: "section",
            text: {
              type: "plain_text",
              text: verificationResult,
              emoji: true,
            },
          },
        ],
      }),
    };
  }
};

module.exports = {
  handler,
};
