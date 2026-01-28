import express from "express"
const router = express.Router();

// POST from ESP32
let datas = {}
router.post("/sensor-data", (req, res) => {
  const { soil, humidity, temperature, waterLevel } = req.body;
    datas = req.body;
  console.log("Data received from ESP32:");
  console.log(req.body);
  res.status(200).json({
    message: "Sensor data received",
    success: true
  });
});

router.get("/getData",async (req,res)=>{
    res.status(200).json(datas);
})
export default router;
