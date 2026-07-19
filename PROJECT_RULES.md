# PROJECT RULES

## กฎขอบเขต

1. ห้องและ repository นี้ใช้เฉพาะ Ichinotour Quotation
2. ห้ามนำงาน JLOS หรือ SENEI KOTSU มารวม
3. ทำเฉพาะ Scope และ Acceptance Criteria ที่พี่เจยืนยัน
4. Backlog เป็นเพียงตัวเลือก ห้ามเริ่มเอง

## กฎความต่อเนื่อง

1. อ่าน `START_HERE.md` ทุกครั้งที่เปลี่ยนห้องหรือ worker
2. ตรวจ `CURRENT_STATE.md` และ checksum ก่อนแก้โค้ด
3. ห้ามสร้างฟีเจอร์ที่มีอยู่แล้วซ้ำ
4. ห้ามย้อนแก้ปัญหาที่ปิดแล้ว เว้นแต่ Regression test พบว่าเสียจริง
5. ข้อเท็จจริงใหม่ต้องอัปเดตเอกสารเจ้าของข้อมูล ไม่บันทึกไว้เฉพาะในบทสนทนา

## กฎการเปลี่ยนแปลง

1. เก็บ baseline เดิมแบบอ่านอย่างเดียว
2. แก้บน branch/task หรือไฟล์เวอร์ชันใหม่
3. เปลี่ยนเฉพาะส่วนที่อยู่ใน Scope
4. ตรวจ Regression ของฟีเจอร์เดิมที่ได้รับผลกระทบ
5. ห้ามเปลี่ยนสถานะเป็น RC หรือ Approved โดยไม่มีคำยืนยันจากพี่เจ

## Definition of Done ต่อรอบงาน

- Scope และ Acceptance Criteria ถูกบันทึก
- โค้ดผ่าน Static QA
- Interactive QA ที่เกี่ยวข้องผ่านหรือระบุ Pending/Blocked ตามจริง
- Print/PDF QA ผ่านเมื่อการเปลี่ยนแปลงกระทบเอกสาร
- checksum ของไฟล์ส่งมอบถูกบันทึก
- QA Report, Current State, Task History และ Changelog ถูกอัปเดต
- พี่เจตรวจรับก่อนเลื่อนสถานะ
