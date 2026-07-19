# TASK HISTORY

## CURRENT — v5.8.2 Return-to-Top Shortcut

- สถานะ: Development
- วันที่เริ่ม: 2026-07-19
- Scope: เพิ่มปุ่มจากด้านล่างกลับไปด้านบนของ panel
- Base: v5.8.1 CI โดยไม่แก้ทับไฟล์เดิม

## HIST-005 — v5.8.1 Record Manager Shortcut

- สถานะ: Development / Static QA passed / User Interactive QA passed
- วันที่เริ่ม: 2026-07-19
- Scope: เพิ่มปุ่มลัดด้านบนให้เลื่อนไปศูนย์จัดการใบเสนอราคา
- Base: v5.8 CI โดยไม่แก้ทับไฟล์เดิม

## HIST-001 — Baseline v5.5

- สถานะ: Approved ตามประวัติ
- ผลลัพธ์: Static Baseline verified; Interactive/Print QA ในสภาพแวดล้อมเดิมไม่ได้ทดสอบ

## HIST-002 — หมายเหตุรายการ v5.6

- สถานะ: RC1 / ไม่ Approved
- ผลลัพธ์: label และหลายบรรทัดทำงาน; พบข้อจำกัด Save ทับข้อมูลเดิม

## HIST-003 — Multi-record v5.7

- สถานะ: Development / Static QA passed
- ผลลัพธ์: Save New, Load, Update, Delete, duplicate prevention และ persistence

## HIST-004 — Record Manager v5.8

- สถานะ: Development / Static QA passed / Interactive QA pending
- ผลลัพธ์: Search, Filters, Sort, Pagination, Status, Favorite, Customer DB, Archive, Backup/Restore และ v5.7 migration

## CURRENT — v5.8 Interactive QA

- สถานะ: Scope confirmed / Blocked by worker test environment
- วันที่เริ่ม: 2026-07-19
- งาน: `CURRENT_STATE.md` และ `TESTING_CHECKLIST.md` หมวด D–E
- ผลรอบแรก: Browser ทดสอบไม่สามารถเปิด localhost และไม่อนุญาตให้รันไฟล์ HTML จาก GitHub โดยตรง จึงไม่เปลี่ยนรายการ Pending เป็น Passed
- หลักฐานและขั้นตอนต่อ: `qa/QA_EXECUTION_v5_8_CI_2026-07-19.md`
