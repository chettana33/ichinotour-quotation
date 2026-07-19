# QA REPORT — quotation_v5_8_2_CI.html

- วันที่: 2026-07-19
- สถานะ: Development / Static QA passed / User Interactive QA passed
- Base: v5.8.1 CI
- Scope: เพิ่มปุ่มจากศูนย์จัดการใบเสนอราคากลับไปด้านบน
- SHA-256: `8a8226962426d77674f4e64902a069dc532bbec674b8cfc60ac7f2dc0d7749a8`

## Acceptance Criteria

- [x] มีปุ่ม `↑ กลับด้านบน` ในส่วนล่างของศูนย์จัดการใบเสนอราคา — Static QA passed
- [x] กดแล้วเลื่อนไปยังด้านบนของ panel — User QA passed 2026-07-19
- [x] ปุ่มลัดลงไป Record Manager จาก v5.8.1 ยังอยู่
- [x] ไม่เปลี่ยน logic ของระบบ Quotation — Diff scope verified
- [x] JavaScript syntax ผ่าน
- [x] SHA-256 ถูกบันทึก

## Interactive QA

- [x] พี่เจยืนยันว่าปุ่มกลับด้านบนทำงาน — 2026-07-19

## Inherited Regression QA — User Result

- [x] Customer Database — passed 2026-07-19
- [x] Export Backup — passed 2026-07-19
- [x] Import Backup — passed 2026-07-19
- [x] Load หลัง Import — passed 2026-07-19
- [x] Sort แก้ไขล่าสุด — passed 2026-07-19
- [x] Sort สร้างล่าสุด — passed 2026-07-19
- [x] Sort ลูกค้า A–Z — passed 2026-07-19
- [x] Sort เลข Quotation — passed 2026-07-19
- [x] Sort วันเดินทางใกล้สุด — passed 2026-07-19
