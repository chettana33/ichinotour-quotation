# WORKER HANDOFF

## เมื่อ Worker ใหม่เข้ามา

1. อ่าน `START_HERE.md`
2. อ่าน Core Principles
3. อ่าน Master Context และ Current State
4. อ่าน Checkpoint ล่าสุด
5. ตรวจ Approved baseline และ checksum
6. อ่าน Task ปัจจุบัน, Decision Log, QA และ Task History ที่เกี่ยวข้อง
7. สรุปความเข้าใจให้เจ้าของยืนยันก่อนแก้ไฟล์

Worker ใหม่ห้ามเริ่มด้วยการสร้างโครงใหม่หรือทำ feature เดิมซ้ำ หาก repository มีบริบทอยู่แล้ว

## เมื่อ Worker ส่งต่องาน

ก่อนจบรอบ Worker ต้อง:

- หยุดเริ่มงานใหม่
- รัน validation ที่เหมาะสม
- บันทึกไฟล์ทั้งหมด
- อัปเดต Current State และ Checkpoint Latest
- อัปเดต Task/QA/Changelog/Decision ตามผลจริง
- commit และตรวจว่า GitHub มีไฟล์ล่าสุด
- ระบุ next action ที่ทำได้ทันทีหนึ่งขั้น

## เมื่อ Token หมดหรือห้องถูกเปลี่ยนกะทันหัน

Worker ถัดไปต้องถือ GitHub เป็นสถานะจริง ไม่พยายามกู้ความจำจากบทสนทนาเก่า หาก checkpoint ไม่ครบให้:

1. ตรวจ commit ล่าสุดและ diff
2. ตรวจไฟล์ที่ Current State อ้างถึง
3. รัน read-only validation
4. ระบุความไม่แน่นอน
5. ถามเจ้าของเฉพาะข้อมูลที่หาไม่ได้จาก repository

## รูปแบบรายงานส่งต่อ

```markdown
## Handoff Summary
- Completed:
- Current version/status:
- Approved baseline:
- Files changed:
- QA result:
- Pending:
- Blockers:
- Next action:
- Owner confirmation needed:
- Commit/checksum:
```
