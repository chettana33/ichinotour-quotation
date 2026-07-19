# START HERE — Ichinotour Quotation

เอกสารนี้เป็นจุดเริ่มต้นบังคับสำหรับมนุษย์ AI agent และ worker ทุกตัวที่เข้ามารับช่วงงานระบบใบเสนอราคา Ichinotour

## ขอบเขต

- โครงการนี้ทำเฉพาะระบบ **Ichinotour Quotation**
- ห้ามนำบริบท งาน หรือไฟล์ของ JLOS และ SENEI KOTSU มาปะปน
- GitHub repository เป้าหมาย: `chettana33/ichinotour-quotation`

## ลำดับการอ่านก่อนทำงาน

1. `START_HERE.md`
2. `MASTER_CONTEXT.md`
3. `CURRENT_STATE.md`
4. `PROJECT_RULES.md`
5. `VERSION_CONTROL_RULES.md`
6. `DATA_RULES.md`
7. `UI_DESIGN_RULES.md`
8. `TESTING_CHECKLIST.md`
9. `ROADMAP.md`
10. `DECISION_LOG.md`
11. `TASK_HISTORY.md`
12. QA Report และไฟล์โค้ดที่ `CURRENT_STATE.md` ระบุ

## ขั้นตอนเริ่มงานบังคับ

1. ตรวจว่าไฟล์ฐานและ SHA-256 ตรงกับ `CURRENT_STATE.md`
2. สรุปสถานะล่าสุด งานที่ผ่าน งานที่ค้าง และข้อห้าม
3. ยืนยัน Scope และ Acceptance Criteria กับพี่เจก่อนแก้โค้ด
4. ทำเฉพาะ Scope ที่ได้รับอนุมัติ
5. ทดสอบตาม `TESTING_CHECKLIST.md`
6. อัปเดต `CURRENT_STATE.md`, `TASK_HISTORY.md`, `CHANGELOG.md` และ QA Report เมื่อจบรอบ
7. Commit checkpoint ทั้งหมดขึ้น GitHub ก่อนรายงานว่างานสำเร็จ

## กฎหยุดงาน

ให้หยุดและถามพี่เจทันทีเมื่อ:

- Scope ไม่ชัดหรือขัดกับเอกสาร
- ต้องแก้ Approved Master
- ต้องเลื่อนสถานะเป็น Release Candidate หรือ Approved Master
- พบข้อมูลสองแหล่งขัดกันและตัดสินจากหลักฐานไม่ได้
- งานใหม่อยู่นอก Ichinotour Quotation

## คำสั่งสำหรับห้องใหม่

> เปิด repository `chettana33/ichinotour-quotation` อ่าน `START_HERE.md` และเอกสารตามลำดับทั้งหมด ตรวจ checksum ของฐานปัจจุบัน แล้วสรุปความเข้าใจและยืนยัน Scope กับพี่เจก่อนแก้ไฟล์
