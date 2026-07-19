# PROJECT STRUCTURE

โครงสร้างมาตรฐานสำหรับ repository ใหม่ ปรับเพิ่มได้ตามลักษณะงาน แต่ห้ามตัดไฟล์แกนกลางโดยไม่มีเหตุผล

```text
project-repository/
├── START_HERE.md
├── MASTER_CONTEXT.md
├── CURRENT_STATE.md
├── PROJECT_RULES.md
├── VERSION_CONTROL_RULES.md
├── ROADMAP.md
├── CHANGELOG.md
├── DECISION_LOG.md
├── TASK_HISTORY.md
│
├── governance/
│   ├── CORE_OPERATING_PRINCIPLES.md
│   ├── CHECKPOINT_PROTOCOL.md
│   └── SOURCE_OF_TRUTH.md
│
├── tasks/
│   ├── TASK-001.md
│   └── TASK-002.md
│
├── checkpoints/
│   ├── CHECKPOINT_LATEST.md
│   └── archive/
│       └── CHECKPOINT_YYYY-MM-DD_HHMM.md
│
├── qa/
│   ├── TESTING_CHECKLIST.md
│   ├── QA_REPORT_<version>.md
│   └── fixtures/
│
├── development/
├── releases/
│   ├── candidates/
│   └── approved/
└── archive/
```

## หน้าที่ของไฟล์แกนกลาง

| ไฟล์ | หน้าที่ | ความถี่อัปเดต |
|---|---|---|
| `START_HERE.md` | ลำดับอ่านและขั้นตอนเริ่มงาน | เมื่อ workflow เปลี่ยน |
| `MASTER_CONTEXT.md` | เป้าหมาย ขอบเขต กฎถาวร สถาปัตยกรรม | เมื่อบริบทถาวรเปลี่ยน |
| `CURRENT_STATE.md` | สถานะจริงล่าสุดและ next action | ทุก checkpoint |
| `CHECKPOINT_LATEST.md` | จุดรับช่วงฉุกเฉินแบบกระชับ | ทุก checkpoint |
| `PROJECT_RULES.md` | กฎเฉพาะโครงการ | เมื่อเจ้าของอนุมัติ |
| `DECISION_LOG.md` | การตัดสินใจและเหตุผล | เมื่อมี decision สำคัญ |
| `TASK_HISTORY.md` | ประวัติงานที่ทำ | เมื่อ task เปลี่ยนสถานะ |
| `CHANGELOG.md` | สิ่งที่เปลี่ยนในแต่ละ version | ทุก release/revision |
| QA Report | หลักฐาน Passed/Failed/Pending | ทุก QA run |

## START_HERE.md ต้องระบุ

- ขอบเขต repository
- ลำดับการอ่าน
- Approved baseline ปัจจุบัน
- path ของ Core Principles
- path ของ checkpoint ล่าสุด
- เงื่อนไขที่ต้องหยุดถามเจ้าของ
- คำสั่งก่อนแก้ไฟล์และก่อนจบรอบ
