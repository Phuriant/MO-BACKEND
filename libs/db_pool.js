const mariadb = require('mariadb');//เป็นการดึงLibrary ของmariadb เข้ามาใช้งานในไฟล์นี
const pool = mariadb.createPool({ //ฟังชั่นที่สั่งไห้ระบบสร้างกลุ่มของการเชื่อมต่อรอไว้ พอมีคนจะใช้ก้มาหยิบไปใช้เสร็จก็คืน
    host: 'localhost',
    user: 'root', //username mariadb
    password: '1111', //password maiadb
    port: 3306, //port mairadb
    database: 'my_fitness', //folder myfitness
    connectionLimit: 5 //จำกัดจำนวนการเชื่อมต่อสูงสุด
});

module.exports = pool; //การส่งออกตัวเเปร pool โดยไม่ต้องเขียนโค้ดตั้งค่าไหม่ซ้ำๆเมื่อไฟล์อื่นต้องการใช้งาน