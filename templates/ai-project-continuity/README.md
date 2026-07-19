# AI Project Continuity System

ระบบต้นแบบสำหรับทำให้ AI, agent, Codex หรือ worker ตัวใดก็ได้ทำงานต่อเนื่องกันผ่าน GitHub โดยไม่พึ่งความจำของห้องสนทนา

## แนวคิดหลัก

ระบบแบ่งข้อมูลเป็น 2 ชั้น:

1. **Core Operating Principles** — หลักการทำงานถาวร ห้าม worker เปลี่ยนเอง
2. **Project Context** — รายละเอียดเฉพาะโครงการที่สร้างจากคำตอบของเจ้าของงาน

Core Principles กำหนด “วิธีทำงานร่วมกัน” ส่วน Project Context กำหนด “งานนี้คืออะไรและกำลังอยู่ตรงไหน”

## วิธีเริ่มโครงการใหม่

1. สร้าง GitHub repository แยกสำหรับโครงการ
2. คัดลอกโฟลเดอร์ Template นี้ไปไว้ใน repository ใหม่
3. ส่งข้อความใน `BOOTSTRAP_PROMPT.md` ให้ AI ตัวแรก
4. AI ต้องอ่าน `CORE_OPERATING_PRINCIPLES.md`
5. AI ถามคำถามตาม `PROJECT_DISCOVERY.md`
6. AI สร้างเอกสาร Project Context ตาม `PROJECT_STRUCTURE.md`
7. เจ้าของงานยืนยัน Scope ก่อนเริ่มลงมือ
8. ทุก milestone ต้อง checkpoint ตาม `CHECKPOINT_PROTOCOL.md`

## กฎสำคัญที่สุด

> GitHub คือสมองกลาง บทสนทนาเป็นเพียงพื้นที่ทำงานชั่วคราว ข้อเท็จจริงที่จำเป็นต่อการรับช่วงต้องอยู่ใน GitHub

## ไฟล์ในชุดนี้

- `CORE_OPERATING_PRINCIPLES.md` — กฎถาวร
- `BOOTSTRAP_PROMPT.md` — ข้อความเริ่มต้นสำหรับ AI ใหม่
- `PROJECT_DISCOVERY.md` — คำถามก่อนสร้างบริบทเฉพาะงาน
- `PROJECT_STRUCTURE.md` — โครงสร้าง repository มาตรฐาน
- `CHECKPOINT_PROTOCOL.md` — เวลาและวิธีบันทึก checkpoint
- `SOURCE_OF_TRUTH.md` — ลำดับแหล่งข้อมูลเมื่อเอกสารขัดกัน
- `WORKER_HANDOFF.md` — ขั้นตอนรับและส่งต่องาน
