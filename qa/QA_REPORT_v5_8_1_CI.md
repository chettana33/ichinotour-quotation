# QA REPORT — quotation_v5_8_1_CI.html

- วันที่: 2026-07-19
- สถานะ: Development / Static QA passed / Interactive QA pending
- Base: v5.8 CI
- Scope: เพิ่มปุ่มลัดเลื่อนไปยังศูนย์จัดการใบเสนอราคา
- SHA-256: `a9fb4190fd150aec4c549f5c4d8a4d1fd8d9c681114f16d7492c9661f059d286`

## Acceptance Criteria

- [x] มีปุ่มลัดอยู่บริเวณด้านบนของ panel — Static QA passed
- [ ] กดแล้วเลื่อนไปยัง `ศูนย์จัดการใบเสนอราคา` — Interactive QA pending
- [x] ไม่เปลี่ยน logic การบันทึก ค้นหา กรอง Pagination หรือ Print/PDF — Diff scope verified
- [x] JavaScript syntax ผ่าน
- [x] SHA-256 ถูกบันทึกหลังสร้างไฟล์

## Regression QA

- [ ] หน้าเริ่มต้น render ครบ
- [ ] Save/Search/Filter/Pagination ยังทำงาน
- [ ] Print/Save PDF ยังทำงาน
