# QA REPORT — quotation_v5_8_CI.html

- วันที่: 2026-07-11
- สถานะ: Development / Static QA passed
- SHA-256: `95569fd519c615b54d6c1ba19d18dda6e8c773b70bf6a8511f9735f21768ac52`
- Base: v5.7 CI

## เพิ่มใน v5.8

- ค้นหาจากเลข Quotation ลูกค้า และชื่อทริป
- กรองปี สถานะ และรายการปักหมุด
- เรียงตามวันที่แก้ไข วันที่สร้าง ลูกค้า เลข Quotation และวันเดินทาง
- แบ่งหน้า 20 รายการ
- สถานะ Draft, Sent, Confirmed และ Cancelled
- ปักหมุดรายการสำคัญ
- ฐานข้อมูลลูกค้าแยกจากใบเสนอราคา
- Export/Import Backup แบบ JSON
- Archive ตามปี
- ย้ายข้อมูล v5.7 เข้ามา v5.8 อัตโนมัติครั้งแรก

## Static QA — Passed

- [x] JavaScript syntax
- [x] Search, filters, sorting และ pagination functions
- [x] Customer save/update/apply functions
- [x] Backup export/import validation
- [x] v5.7 migration path
- [x] Multi-record Save/Load/Update/Delete ยังคงอยู่
- [x] หมายเหตุ inline และหลายบรรทัดยังคงอยู่
- [x] Checksum ของ v5.5, v5.6 และ v5.7 ไม่เปลี่ยน

## Interactive QA — Pending

Execution attempt: 2026-07-19 — GitHub Pages และ initial render ผ่าน; interaction automation ติดข้อจำกัด JavaScript dialog handling ดู `QA_EXECUTION_v5_8_CI_2026-07-19.md`

User QA report: 2026-07-19 — Save, Search, Filter, Pagination และ Print/Save PDF ใช้งานได้ตามการตรวจของพี่เจ

- [ ] บันทึกอย่างน้อย 25 รายการและเปลี่ยนหน้า (Pagination ผ่านจาก User QA; จำนวน 25 รายการยังไม่ได้ยืนยัน)
- [x] ค้นหาและกรองหลายเงื่อนไข — User QA passed
- [ ] เรียงข้อมูลทุกแบบ
- [ ] บันทึกและเรียกใช้ข้อมูลลูกค้า
- [ ] Export แล้ว Import Backup
- [ ] ตรวจข้อมูล v5.7 หลัง migration
- [x] Print/Save PDF — User QA passed
