# RELEASE NOTES — v5.8.4 CI RC1

- วันที่สร้าง RC: 2026-07-19
- สถานะ: Release Candidate 1 / Awaiting user acceptance
- Source: `development/quotation_v5_8_4_CI.html`
- RC file: `releases/candidates/quotation_v5_8_4_CI_RC1.html`
- SHA-256: `21e91403655b478545e4a5b353a2d1bcdd66ef22ca12e0e273874894d01b500a`
- Source และ RC1 ตรงกันแบบ byte-for-byte

## ฟังก์ชันหลัก

- ระบบใบเสนอราคาหลายรายการ
- Search, Filter, Sort และ Pagination 20 รายการต่อหน้า
- สถานะ Draft, Sent, Confirmed และ Cancelled
- รายการปักหมุด
- ฐานข้อมูลลูกค้า
- Export/Import Backup JSON
- Archive ตามปี
- Migration จาก v5.7
- หมายเหตุรายการหลายบรรทัด
- Print/Save PDF

## การปรับปรุงหลัง v5.8

- v5.8.1: ปุ่มลัดลงไปศูนย์จัดการใบเสนอราคา
- v5.8.2: ปุ่มกลับด้านบน
- v5.8.3: รวมปุ่มลัดทั้งสองไว้กับปุ่มล้างฟอร์ม
- v5.8.4: ค่าเริ่มต้นเลือกเฉพาะ HOTEL และ BUS

## QA Summary

- Static QA: Passed
- JavaScript syntax: Passed
- Save/Search/Filter: User QA passed
- Sort ทั้ง 5 แบบ: User QA passed
- Pagination 25 records: User QA passed
- Customer Database: User QA passed
- Backup/Restore และ Load หลัง Import: User QA passed
- Print/Save PDF: User QA passed
- v5.7 Migration: User QA passed
- ปุ่มลัดขึ้น/ลง: User QA passed
- ค่าเริ่มต้น HOTEL/BUS: User QA passed

## ข้อกำหนดการอนุมัติ

- RC1 ยังไม่ใช่ Approved Master
- ห้ามแก้ไฟล์ RC1 โดยตรง
- หากพบ defect ต้องสร้าง Development revision หรือ RC ใหม่
- เลื่อนเป็น Approved Master เมื่อพี่เจยืนยันชัดเจนเท่านั้น

## Public Acceptance URL

`https://chettana33.github.io/ichinotour-quotation/?v=5.8.4-rc1`
