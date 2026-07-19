# QA REPORT — quotation_v5_8_3_CI.html

- วันที่: 2026-07-19
- สถานะ: Development / Static QA passed / User Interactive QA passed
- Base: v5.8.2 CI
- Scope: ย้ายปุ่มลัดขึ้น/ลงมาไว้ในแถบเดียวกับปุ่มล้างฟอร์ม
- SHA-256: `662bd65a7bb989efcf713b2d1aeaca70e9d596d4a4835d4013260de7839dc40c`

## Acceptance Criteria

- [x] ปุ่มลงไป Record Manager อยู่ใน `.actions`
- [x] ปุ่มกลับด้านบนอยู่ใน `.actions`
- [x] ไม่มีปุ่มลัดซ้ำที่หัว panel หรือท้าย Record Manager
- [x] ปุ่มทั้งสองทำงาน — User QA passed 2026-07-19
- [x] ไม่เปลี่ยน logic ของ Quotation — Diff scope verified
- [x] JavaScript syntax ผ่าน
- [x] SHA-256 ถูกบันทึก

## Pagination Fixture — Static QA

- [x] มี 25 records
- [x] มีลูกค้าจำลอง 5 ราย
- [x] Record IDs ไม่ซ้ำ 25 ค่า
- [x] Quote Numbers ไม่ซ้ำ 25 ค่า
- [x] Import ซ้ำใช้ id เดิม จึงไม่เพิ่มชุดซ้ำ

## v5.7 Migration Seeder — Static QA

- [x] JavaScript syntax ผ่าน
- [x] สร้างข้อมูลจำลอง 3 records ใน `quotationV57_CI_records`
- [x] ไม่มีคำสั่งลบข้อมูล v5.8
- [x] หยุดทำงานเมื่อพบ `quotationV58_CI_records`
- [x] SHA-256: `8fdc0d6f20a6ec399a166ec60afae657e8ea2ff0261ac955e624cc89cae57916`
- [x] Migration User QA — passed 2026-07-19

Migration partial result 2026-07-19:

- [x] พบ `QA-V57-001` ถึง `QA-V57-003` ครบ
- [x] สถานะ Draft ครบ
- [x] ปี 2025 ถูกต้อง
- [x] Load payload ครบ — User QA passed
- [x] Reload แล้วไม่เพิ่มซ้ำ — User QA passed

## Interactive QA

- [x] พี่เจยืนยันตำแหน่งและการทำงานของปุ่มทั้งสอง — 2026-07-19
- [x] Import fixture 25 records สำเร็จ — User QA passed 2026-07-19
- [x] Pagination หน้าแรก 20 รายการ — User QA passed 2026-07-19
- [x] Pagination หน้าที่สอง 5 รายการ — User QA passed 2026-07-19
- [x] เปลี่ยนหน้าระหว่างหน้า 1/2 และ 2/2 — User QA passed 2026-07-19
