# APPROVAL RECORD — v5.8.4 CI

- วันที่อนุมัติ: 2026-07-19
- ผู้อนุมัติ: พี่เจ
- คำยืนยัน: `อนุมัติ v5.8.4 CI RC1 เป็น Approved Master`
- สถานะ: Approved Master
- Approved file: `releases/approved/quotation_v5_8_4_CI_APPROVED.html`
- Source RC: `releases/candidates/quotation_v5_8_4_CI_RC1.html`
- Development source: `development/quotation_v5_8_4_CI.html`
- SHA-256: `21e91403655b478545e4a5b353a2d1bcdd66ef22ca12e0e273874894d01b500a`
- Development, RC1 และ Approved Master ตรงกันแบบ byte-for-byte

## QA ที่ใช้อนุมัติ

- Static QA และ JavaScript syntax ผ่าน
- Save, Search และ Filter ผ่าน User QA
- Sort ทั้ง 5 แบบผ่าน User QA
- Pagination 25 records ผ่าน User QA
- Customer Database ผ่าน User QA
- Backup/Restore และ Load หลัง Import ผ่าน User QA
- Print/Save PDF ผ่าน User QA
- v5.7 Migration ผ่าน User QA
- ปุ่มลัดขึ้น/ลงและตำแหน่งผ่าน User QA
- ค่าเริ่มต้นเลือกเฉพาะ HOTEL และ BUS ผ่าน User QA

## กฎหลังอนุมัติ

- ห้ามแก้ไฟล์ Approved Master โดยตรง
- การพัฒนาครั้งต่อไปต้องสร้างเวอร์ชัน Development ใหม่จาก Approved Master นี้
- หากพบ defect ใน Approved Master ให้บันทึก Known Issue และสร้าง revision ใหม่
