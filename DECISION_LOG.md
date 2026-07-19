# DECISION LOG

## 2026-07-11 — v5.5 เป็น Approved Master

- เก็บ v5.5 โดยไม่แก้ทับ
- ใช้เป็นจุดย้อนกลับของโครงการ

## 2026-07-11 — v5.6 เพิ่มหมายเหตุรายการ

- เพิ่ม label และรองรับหลายบรรทัด
- สร้างเป็นเวอร์ชันใหม่ ไม่แก้ v5.5

## 2026-07-11 — ไม่อนุมัติ v5.6 เป็น Approved Master

- เหตุผล: Save เดิมบันทึกทับข้อมูลชุดเดียวและยังจัดการหลายใบเสนอราคาไม่ได้
- มติ: พัฒนาต่อเป็น v5.7

## 2026-07-11 — v5.7 เพิ่ม Multi-record

- เพิ่ม Save New, Load, Update, Delete และป้องกัน Quotation ซ้ำ
- รักษาฟังก์ชันหมายเหตุจาก v5.6

## 2026-07-11 — v5.8 เพิ่ม Record Management ระยะยาว

- เหตุผล: เมื่อมีข้อมูลหลายร้อยรายการและหลายปี Dropdown เดียวค้นหายาก และ localStorage ไม่มีระบบสำรองในตัว
- มติ: เพิ่ม Search, Filter, Sort, Pagination, Status, Favorite, Customer DB, Archive และ Backup/Restore

## 2026-07-19 — แยกบริบทโครงการ

- ห้องและ repository นี้ทำเฉพาะ Ichinotour Quotation
- ห้ามปะปนกับ JLOS และ SENEI KOTSU

## 2026-07-19 — ใช้ GitHub เป็นสมองแกนกลาง

- repository เป้าหมาย: `chettana33/ichinotour-quotation`
- worker ทุกตัวต้องอ่าน `START_HERE.md` ก่อนทำงาน
- ข้อเท็จจริงสำคัญต้องอยู่ใน repository ไม่พึ่งเฉพาะประวัติแชต

## 2026-07-19 — บังคับ Checkpoint ทุกงานสำเร็จ

- ทุกการอัปเดตหรือผลงานใหม่ที่สำเร็จต้องบันทึก checkpoint ลง GitHub ก่อนจบรอบ
- ใช้ `CURRENT_STATE.md` เป็นจุดรับช่วงล่าสุด
- Master Context เก็บเฉพาะกฎและบริบทถาวร ส่วนรายละเอียดรอบงานอยู่ใน Task History, Changelog และ QA Report

## 2026-07-19 — อนุมัติ v5.8.4 CI เป็น Approved Master

- พี่เจยืนยัน `อนุมัติ v5.8.4 CI RC1 เป็น Approved Master`
- Development, RC1 และ Approved file ตรงกันแบบ byte-for-byte
- Approved Master นี้เป็น baseline ของงาน Development ถัดไป
- ห้ามแก้ทับ Approved file

## 2026-07-19 — สร้าง Reusable AI Project Continuity System

- แยก Core Operating Principles ที่ worker ห้ามเปลี่ยนเองออกจาก Project Context เฉพาะงาน
- GitHub เป็นสมองกลางและ checkpoint เป็นส่วนหนึ่งของ Definition of Done
- AI ตัวแรกของโครงการใหม่ต้องถาม Discovery Questions แล้วสร้าง Master Context ของโครงการนั้น
- ระบบรองรับการเปลี่ยนห้อง เปลี่ยน AI หรือ token หมดโดยรับช่วงจาก Current State และ Checkpoint ล่าสุด
