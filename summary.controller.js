export const generateSummary = async (req, res) => {
  try {
    const { messages } = req.body;

    res.json({
      summary: `Meeting Summary

Total Messages: ${messages?.length || 0}

• Discussion completed
• Meeting conducted successfully
• Participants exchanged messages`
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
};

