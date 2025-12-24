const express = require('express');
const app = express();

// ตัวแปรสำหรับเลือก Port (ใช้ 3000 เป็นค่าพื้นฐาน)
const PORT = process.env.PORT || 3000;

app.get('/date', (req, res) => {
    res.json({
        status: "success",
        message: "Hello from Node.js Backend!",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://backend:${PORT}`);
});