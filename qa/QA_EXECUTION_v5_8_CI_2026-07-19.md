# QA EXECUTION — v5.8 CI — 2026-07-19

## Scope

- Interactive QA และ Print/PDF QA ของ `development/quotation_v5_8_CI.html`
- ไม่เพิ่มฟีเจอร์ใหม่
- แก้โค้ดเฉพาะเมื่อพบ defect ที่ทำซ้ำได้

## Environment

- Worker test date: 2026-07-19 (Asia/Bangkok)
- Source SHA-256: `95569fd519c615b54d6c1ba19d18dda6e8c773b70bf6a8511f9735f21768ac52`
- Worker Browser ไม่สามารถเปิด localhost
- Worker Browser ไม่อนุญาตให้รัน HTML โดยตรงจาก GitHub

## Result

- Status: **Partially executed / Interactive automation blocked by JavaScript dialog handling**
- GitHub Pages deployment: **Passed**
- Public URL: `https://chettana33.github.io/ichinotour-quotation/`
- Page title and v5.8 initial UI render: **Passed**
- Default date, valid-until date, status options, categories, customer manager and record manager controls rendered: **Passed**
- ไม่พบ console error จากตัว Quotation ระหว่าง initial load (พบเฉพาะ error จาก Browser extension ของสภาพแวดล้อมทดสอบ)
- เมื่อทดสอบ Save New ระบบเปิด JavaScript `alert()` ตามการออกแบบ แต่เครื่องมือ automation ค้างระหว่าง click/dialog จึงไม่สามารถทำ loop สร้าง 25 records ต่อได้
- ไม่มีรายการใดถูกเปลี่ยนจาก Pending เป็น Passed
- ไม่จัดเหตุการณ์ dialog เป็น defect ของ Quotation เพราะยังไม่มีหลักฐานว่าผู้ใช้จริงทำงานผิดปกติ
- ไม่พบ defect ใหม่ที่ยืนยันได้
- ไม่มีการแก้โค้ด

## User Browser Test Run

เปิด `development/quotation_v5_8_CI.html` ใน Chrome หรือ Edge แล้วทดสอบตามลำดับ โดยใช้ข้อมูลจำลองเท่านั้น

### Run 1 — Records และ Pagination

1. บันทึกใบเสนอราคา 25 รายการ เลข `QA-2026-001` ถึง `QA-2026-025`
2. สลับลูกค้าอย่างน้อย 5 ราย ชื่อทริปอย่างน้อย 5 ชื่อ และทุกสถานะ
3. ปักหมุดอย่างน้อย 5 รายการ
4. ตรวจหน้าแรก 20 รายการและหน้าที่สอง 5 รายการ

บันทึกผล: Pass / Fail พร้อมรายการที่ผิด

### Run 2 — Search, Filters และ Sort

1. ค้นด้วยเลข Quotation เต็มและบางส่วน
2. ค้นด้วยลูกค้าและชื่อทริป
3. กรองปี สถานะ และปักหมุดแยกกัน
4. ผสม Search + ปี + สถานะ + ปักหมุด
5. ทดสอบตัวเรียงทั้ง 5 แบบ

บันทึกผล: Pass / Fail พร้อมค่าที่ใช้และผลที่เห็น

### Run 3 — Customer Database

1. บันทึกลูกค้าใหม่
2. อัปเดตลูกค้าชื่อเดิม
3. เลือกลูกค้าและกดใช้ข้อมูล
4. ตรวจชื่อ อีเมล โทรศัพท์ และรายละเอียดทั้งหมด

### Run 4 — Backup และ Restore

1. Export Backup JSON
2. เก็บจำนวน records และ customers ก่อน Import
3. เปิด Browser profile ใหม่หรือสำรองข้อมูลเดิมก่อนล้าง localStorage
4. Import Backup
5. ตรวจจำนวนและสุ่ม Load อย่างน้อย 3 records

ห้ามส่งไฟล์ Backup ที่มีข้อมูลลูกค้าจริงขึ้น GitHub

### Run 5 — v5.7 Migration

1. ใช้ Browser profile ทดสอบแยก
2. เตรียมข้อมูล v5.7 ใน key `quotationV57_CI_records`
3. ตรวจว่าไม่มี key `quotationV58_CI_records`
4. เปิด v5.8 และตรวจสถานะ ปี รายการ และ payload หลัง migration

### Run 6 — Print/Save PDF

1. ใช้ใบเสนอราคาสั้นหนึ่งรายการและยาวหลายหมวดหนึ่งรายการ
2. เปิด Print Preview
3. ตรวจว่า panel/ปุ่มไม่ติดไปในเอกสาร
4. ตรวจ header, table, totals, notes และ signatures ไม่ทับหรือตัดผิดปกติ
5. Save PDF และเปิดตรวจยอด/ข้อความอีกครั้ง

## Evidence ที่ต้องส่งกลับ

- Browser และเวอร์ชัน
- ผล Pass/Fail ของ Run 1–6
- หาก Fail: ขั้นตอนทำซ้ำ, ค่าที่กรอก, ผลที่คาดหวัง และผลที่เกิดจริง
- Screenshot เฉพาะจุดที่ผิด โดยไม่แสดงข้อมูลลูกค้าจริง
- PDF ทดสอบถ้าพบปัญหา layout

เมื่อได้รับผล พาเที่ยวจะจำแนก defect, สร้าง revision ใหม่โดยไม่แก้ทับ v5.8 เดิม, ทำ Static Regression QA และอัปเดตเอกสารกลาง
