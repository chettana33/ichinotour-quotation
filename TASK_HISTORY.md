# TASK HISTORY

## CURRENT — v5.8.3 Shortcut Placement + Pagination Fixture

- สถานะ: Development / Static QA passed / User Interactive QA passed
- วันที่เริ่ม: 2026-07-19
- Scope: รวมปุ่มลัดขึ้น/ลงไว้กับปุ่มล้างฟอร์ม และสร้างข้อมูลจำลอง 25 records
- Base: v5.8.2 CI โดยไม่แก้ทับไฟล์เดิม
- ผล QA: Import fixture และ Pagination 25 records ผ่าน User QA เมื่อ 2026-07-19
- ผล QA: ปุ่มลัดทั้งสองอยู่ติดกับปุ่มล้างฟอร์มและใช้งานได้ ผ่าน User QA เมื่อ 2026-07-19
- QA asset: สร้าง safe Seeder สำหรับ v5.7 Migration โดยไม่ลบข้อมูล v5.8 และบังคับใช้ Incognito/Guest profile
- Migration QA partial: พบ 3 records ครบ สถานะ Draft และปี 2025 ถูกต้อง ผ่าน User QA เมื่อ 2026-07-19

## HIST-006 — v5.8.2 Return-to-Top Shortcut

- สถานะ: Development / Static QA passed / User Interactive QA passed
- วันที่เริ่ม: 2026-07-19
- Scope: เพิ่มปุ่มจากด้านล่างกลับไปด้านบนของ panel
- Base: v5.8.1 CI โดยไม่แก้ทับไฟล์เดิม
- ผล: พี่เจยืนยันว่าปุ่ม `↑ กลับด้านบน` ใช้งานได้เมื่อ 2026-07-19
- Regression QA: Customer Database, Export Backup, Import Backup และ Load หลัง Import ผ่าน User QA เมื่อ 2026-07-19
- Regression QA: Sort ทั้ง 5 แบบผ่าน User QA เมื่อ 2026-07-19

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
