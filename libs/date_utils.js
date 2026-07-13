module.exports = { //สั่ง export object นี้ออกไปเพื่อไห้้ไฟล์ js อื่นๆเห็นเเละนำไปใข้งานได้
  getCurrentDateForToken: () => { //ประกาศชื่อฟังก์ชั่นเเบบ arrow
    const now = new Date(); //ประกาศตัวเเปรชื่อ now สร้าง object ของวันเดือนปี current
    const formattedDate = new Intl.DateTimeFormat('en-GB', { //เครื่องมือมาตราฐานของjs เพื่อจัด formatของวันที่ตามเวลาเเละท้องถิ่น Engb คือ รหัสภาษาของอังกฤษ ใ่ช้ตัวนี้เพราะเป็นมาตราฐาน
      day: '2-digit', // เซ็ตไห้วันที่เเบบเลข2หลัก 
      month: '2-digit', // เซ็ตไห้เดือนเป็น 2 หลัก
      year: 'numeric' // เซ็ตไห้ปีเป็นเเบบปกติ
    }).format(now).replace(/\//g, '-'); // นำเวลาปัจจุบันของ now มาใส่format ไว้ผลลัพจะได้ 7/13/26  replace จะสั่งไห้เปลี่ยนเครื่องหมายเเสลชเป็น -

    return formattedDate; //ส่งค่าผลลัพธ์ ที่อยู่ในตัวเเปร formattedDate
  }
}