import express from "express";
import { testApi } from "../controllers/controller.js";
// import { asyncHandler } from "../middleware/asynchandler.js";

const router = express.Router();

// Get method - Test API
router.get("/test", testApi);

export default router;