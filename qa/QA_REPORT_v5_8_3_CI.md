# QA REPORT — quotation_v5_8_3_CI.html

- วันที่: 2026-07-19
- สถานะ: Development / Static QA passed / Interactive QA pending
- Base: v5.8.2 CI
- Scope: ย้ายปุ่มลัดขึ้น/ลงมาไว้ในแถบเดียวกับปุ่มล้างฟอร์ม
- SHA-256: `662bd65a7bb989efcf713b2d1aeaca70e9d596d4a4835d4013260de7839dc40c`

## Acceptance Criteria

- [x] ปุ่มลงไป Record Manager อยู่ใน `.actions`
- [x] ปุ่มกลับด้านบนอยู่ใน `.actions`
- [x] ไม่มีปุ่มลัดซ้ำที่หัว panel หรือท้าย Record Manager
- [ ] ปุ่มทั้งสองทำงาน
- [x] ไม่เปลี่ยน logic ของ Quotation — Diff scope verified
- [x] JavaScript syntax ผ่าน
- [x] SHA-256 ถูกบันทึก

## Pagination Fixture — Static QA

- [x] มี 25 records
- [x] มีลูกค้าจำลอง 5 ราย
- [x] Record IDs ไม่ซ้ำ 25 ค่า
- [x] Quote Numbers ไม่ซ้ำ 25 ค่า
- [x] Import ซ้ำใช้ id เดิม จึงไม่เพิ่มชุดซ้ำ

## Interactive QA

- [ ] พี่เจยืนยันตำแหน่งและการทำงานของปุ่มทั้งสอง
