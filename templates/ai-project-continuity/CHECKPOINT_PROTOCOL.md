# CHECKPOINT PROTOCOL

Checkpoint คือ snapshot เชิงความหมายที่ทำให้ worker ใหม่รับช่วงได้โดยไม่อ่านประวัติแชต

## ต้องสร้าง Checkpoint เมื่อใด

- หลัง Scope ได้รับการยืนยัน
- หลังสร้างหรือแก้ artifact สำคัญสำเร็จ
- หลัง QA แต่ละรอบ
- หลังพบ defect หรือ blocker สำคัญ
- หลังตัดสินใจเปลี่ยนแนวทาง
- ก่อนหยุดงาน ก่อนเปลี่ยนห้อง ก่อนเปลี่ยน AI หรือก่อนคาดว่า token จะหมด
- หลัง RC หรือ Approved promotion
- อย่างน้อยหนึ่งครั้งต่อรอบทำงานที่มีความเปลี่ยนแปลง

## Checkpoint ขั้นต่ำต้องมี

```markdown
# CHECKPOINT — <timestamp>

## Project
- Repository:
- Branch/commit:
- Current version/status:
- Approved baseline:

## Completed
- สิ่งที่ทำสำเร็จ
- ไฟล์ที่เปลี่ยน
- QA/หลักฐาน

## Current State
- สิ่งที่กำลังทำ
- สิ่งที่ค้าง
- Known issues/blockers

## Decisions
- การตัดสินใจใหม่และเหตุผล

## Next Action
- ขั้นตอนถัดไปที่แน่นอน
- Scope/Acceptance Criteria ที่ยังต้องยืนยัน

## Integrity
- SHA-256/commit SHA ของ artifact สำคัญ
- ยืนยันว่า Approved baseline ไม่ถูกแก้
```

## เอกสารที่ต้องอัปเดตพร้อม Checkpoint

- `CURRENT_STATE.md` — บังคับทุกครั้ง
- `CHECKPOINT_LATEST.md` — บังคับทุกครั้ง
- `TASK_HISTORY.md` — เมื่อสถานะ task เปลี่ยน
- `CHANGELOG.md` — เมื่อ artifact หรือ version เปลี่ยน
- `DECISION_LOG.md` — เมื่อมี decision ใหม่
- QA Report — เมื่อมีผลทดสอบ
- `MASTER_CONTEXT.md` — เฉพาะบริบทถาวรเปลี่ยน

## Emergency Checkpoint

เมื่อเวลาหรือ token ใกล้หมด ให้หยุดงานใหม่และบันทึกอย่างน้อย:

1. ไฟล์ที่กำลังแก้และสถานะล่าสุด
2. สิ่งที่ทำสำเร็จ/ยังไม่สำเร็จ
3. คำสั่งหรือ test ล่าสุดและผล
4. ความเสี่ยงหรือข้อควรระวัง
5. next action หนึ่งขั้นที่ชัดเจน
6. commit checkpoint ขึ้น GitHub

ห้ามทิ้งสถานะสำคัญไว้เฉพาะในข้อความสุดท้ายของห้อง
