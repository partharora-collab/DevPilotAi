
// Test function for the APIs logic
export const testApi = async (req, res) => {
    return res.status(200).json({
        "message": "API is working fine."
    });
}