# VERSION CONTROL RULES

## สถานะเวอร์ชัน

- **Development**: อยู่ระหว่างพัฒนาหรือ QA
- **Release Candidate (RC)**: ฟังก์ชันตาม Scope เสร็จและ QA ที่กำหนดผ่าน รอผู้ใช้ตรวจรับ
- **Approved Master**: พี่เจอนุมัติชัดเจนแล้วเท่านั้น
- **Archived**: เก็บเพื่อประวัติหรือย้อนกลับ ห้ามแก้

## กฎหลัก

1. ห้ามแก้ทับ Approved Master
2. ห้ามเลื่อนสถานะจาก Development เป็น RC หรือ Approved อัตโนมัติ
3. ทุกไฟล์ส่งมอบต้องมี SHA-256 ใน QA Report หรือ Release Notes
4. เก็บเวอร์ชันก่อนหน้าไว้เพื่อย้อนกลับ
5. ชื่อไฟล์ต้องสะท้อนเวอร์ชันและสถานะ เช่น `quotation_v5_8_CI.html` หรือ `quotation_v5_8_CI_RC1.html`
6. การแก้ defect หลังสร้าง RC ต้องออก RC ใหม่หรือ revision ใหม่
7. การเปลี่ยนไฟล์เอกสารกลางต้องมี commit message ที่บอกเหตุผล

## Git workflow แนะนำ

- `main`: สถานะกลางที่ตรวจแล้ว
- `task/<id>-<short-name>`: งานพัฒนาแต่ละ Scope
- ใช้ Pull Request เพื่อ review ก่อนรวม เมื่อระบบรองรับ workflow นี้
- ไม่ commit ข้อมูลลูกค้าจริง, token, password, API key หรือ backup production
