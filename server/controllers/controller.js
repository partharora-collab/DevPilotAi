
// Test function for the APIs logic
export const testApi = async (req, res) => {
    try {
        console.log(req.params);
        return res.status(200).json({
            "message": "API is working fine."
        });
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).json({
            "message": error.message
        });
    }
}