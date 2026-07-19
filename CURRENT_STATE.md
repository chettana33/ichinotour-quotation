# CURRENT STATE — Ichinotour Quotation

อัปเดตล่าสุด: 2026-07-19 (Asia/Bangkok)

## Development ล่าสุด

- เวอร์ชัน: v5.8.2 CI
- สถานะ: Development / Static QA passed / Shortcut User QA passed
- ไฟล์: `development/quotation_v5_8_2_CI.html`
- SHA-256: `8a8226962426d77674f4e64902a069dc532bbec674b8cfc60ac7f2dc0d7749a8`
- Base: v5.8.1 CI
- Scope: ปุ่มจากศูนย์จัดการใบเสนอราคากลับไปด้านบน
- QA Report: `qa/QA_REPORT_v5_8_2_CI.md`

## ฐาน v5.8 ที่รักษาไว้

- เวอร์ชัน: v5.8 CI
- สถานะ: Development / Static QA passed
- ไฟล์มาตรฐานใน repository: `development/quotation_v5_8_CI.html`
- SHA-256: `95569fd519c615b54d6c1ba19d18dda6e8c773b70bf6a8511f9735f21768ac52`
- Base: v5.7 CI
- QA Report: `qa/QA_REPORT_v5_8_CI.md`

## งานที่ผ่านแล้ว

- JavaScript syntax
- Search, filters, sorting และ pagination functions
- Customer save/update/apply functions
- Backup export/import validation แบบ Static QA
- v5.7 migration path แบบ Static QA
- Multi-record Save/Load/Update/Delete ยังอยู่
- หมายเหตุ inline และหลายบรรทัดยังอยู่
- Checksum ของ v5.5, v5.6 และ v5.7 ไม่เปลี่ยนตาม QA Report เดิม

## งานที่ค้าง

- [ ] บันทึกอย่างน้อย 25 รายการและเปลี่ยนหน้า
- [ ] ค้นหาและกรองหลายเงื่อนไข
- [ ] เรียงข้อมูลทุกแบบ
- [ ] บันทึกและเรียกใช้ข้อมูลลูกค้า
- [ ] Export แล้ว Import Backup
- [ ] ตรวจข้อมูล v5.7 หลัง migration
- [ ] Print/Save PDF

## Next Action

ฟีเจอร์ปุ่มลัดขึ้น/ลงของ v5.8.2 ผ่าน User QA แล้ว งาน QA หลักที่ยังค้างจาก v5.8 ได้แก่การยืนยัน 25 records, Sort ทุกแบบ, Customer Database, Backup/Restore และ v5.7 Migration

## ข้อห้าม ณ สถานะนี้

- ห้ามเรียก v5.8 ว่า RC หรือ Approved Master
- ห้ามแก้ทับ v5.5 Approved Master
- ห้ามเริ่มฟีเจอร์ใหม่ก่อน Interactive QA เว้นแต่พี่เจอนุมัติ Scope ใหม่ชัดเจน
- หากพบ defect ต้องสร้างเวอร์ชันพัฒนาใหม่หรือ revision ตามกฎ ไม่เขียนทับหลักฐานรุ่นเดิม
