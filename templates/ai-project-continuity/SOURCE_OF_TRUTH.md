# SOURCE OF TRUTH

เมื่อข้อมูลขัดกัน ให้ใช้ลำดับนี้และบันทึก conflict แทนการเลือกตามความจำ

## ลำดับอำนาจ

1. คำสั่งล่าสุดที่เจ้าของงานยืนยันอย่างชัดเจน
2. Core Operating Principles ที่เจ้าของอนุมัติ
3. Approved Master และ Approval Record
4. `CURRENT_STATE.md` และ `CHECKPOINT_LATEST.md` ที่ commit ล่าสุด
5. Scope/Acceptance Criteria ของ Task ปัจจุบัน
6. Project Rules และ Version Control Rules
7. Decision Log
8. QA Report และหลักฐานทดสอบ
9. Changelog และ Task History
10. บทสนทนา ภาพหน้าจอ หรือความจำของ AI

## กฎ Conflict

- หากแหล่งระดับเดียวกันขัดกัน ให้หยุดและถามเจ้าของ
- ห้ามแก้ Approved Master เพื่อให้ตรงกับเอกสารที่ใหม่กว่า
- ต้องแก้เอกสารเจ้าของข้อเท็จจริง ไม่คัดลอกค่าซ้ำไปทุกไฟล์โดยไม่จำเป็น
- ข้อมูลที่ยังพิสูจน์ไม่ได้ใช้ `Pending`, `Unknown`, `Not Tested` หรือ `Blocked`

## เจ้าของข้อเท็จจริง

| ข้อมูล | แหล่งหลัก |
|---|---|
| หลักการทำงานถาวร | Core Operating Principles |
| เป้าหมาย/ขอบเขตโครงการ | Master Context |
| สถานะล่าสุด | Current State / Latest Checkpoint |
| งานปัจจุบัน | Current Task |
| เหตุผลการตัดสินใจ | Decision Log |
| ผลทดสอบ | QA Report |
| ประวัติ version | Changelog |
| Artifact ที่อนุมัติ | Approved directory + Approval Record |
