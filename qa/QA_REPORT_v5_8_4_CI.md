# QA REPORT — quotation_v5_8_4_CI.html

- วันที่: 2026-07-19
- สถานะ: Development / Static QA passed / User Interactive QA passed
- Base: v5.8.3 CI
- Scope: ค่าเริ่มต้นเปิดเฉพาะ HOTEL และ BUS
- SHA-256: `21e91403655b478545e4a5b353a2d1bcdd66ef22ca12e0e273874894d01b500a`

## Acceptance Criteria

- [x] เปิดหน้าใหม่แล้ว HOTEL ถูกเลือก — Static initialization verified
- [x] เปิดหน้าใหม่แล้ว BUS ถูกเลือก — Static initialization verified
- [x] RESTAURANT ไม่ถูกเลือก — Static initialization verified
- [x] GUIDE / TOUR LEADER ไม่ถูกเลือก — Static initialization verified
- [x] TICKET / ENTRANCE ไม่ถูกเลือก — Static initialization verified
- [x] OTHER ไม่ถูกเลือก — Static initialization verified
- [x] F5 แล้วกลับสู่ค่าเริ่มต้นเดียวกัน — User QA passed 2026-07-19
- [x] Load ใบเสนอราคาเดิมแล้วใช้สถานะหมวดจากข้อมูลที่บันทึก — Existing `applySavedObject` unchanged
- [x] ไม่มี logic อื่นเปลี่ยน — Diff verified
- [x] JavaScript syntax ผ่าน
- [x] SHA-256 ถูกบันทึก

## Interactive QA

- [x] พี่เจยืนยันค่าเริ่มต้นหลังเปิดหน้าและ F5 — เลือกเฉพาะ HOTEL และ BUS เมื่อ 2026-07-19
