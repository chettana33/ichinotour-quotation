# TESTING CHECKLIST

## A. Preflight

- [ ] ตรวจชื่อไฟล์ เวอร์ชัน และ checksum
- [ ] เปิดไฟล์ได้โดยไม่มี JavaScript syntax error
- [ ] ทดสอบบน Browser ที่พี่เจใช้งานจริง
- [ ] ใช้ข้อมูลทดสอบเท่านั้น

## B. Quotation Core

- [ ] กรอกข้อมูลผู้ออกและลูกค้า
- [ ] เปิด/ปิดแต่ละหมวด
- [ ] เพิ่มและลบรายการในทุกหมวด
- [ ] คำนวณ Qty × Unit × Price ถูกต้อง
- [ ] คำนวณ JPY → THB ตามเรทถูกต้อง
- [ ] วันเริ่ม/สิ้นสุดคำนวณ Unit/Days ถูกต้อง
- [ ] หมายเหตุรายการรองรับหลายบรรทัดและมี label
- [ ] การตั้งค่า Font/สีและ selected text ทำงาน
- [ ] Logo แสดงและกลับมาหลัง Load

## C. Multi-record

- [ ] Save New ไม่เขียนทับรายการเดิม
- [ ] ป้องกันเลข Quotation ซ้ำ
- [ ] Load รายการถูกต้องครบทุก field
- [ ] Update แก้เฉพาะรายการที่โหลด
- [ ] Delete ขอคำยืนยันและลบถูก record
- [ ] Clear Form ไม่ลบรายการที่บันทึกไว้

## D. v5.8 Interactive QA — ต้องทำก่อน RC

- [ ] สร้างอย่างน้อย 25 records
- [ ] Pagination แสดง 20 รายการหน้าแรกและรายการที่เหลือหน้าถัดไป
- [ ] Search ด้วยเลข Quotation
- [ ] Search ด้วยชื่อลูกค้า
- [ ] Search ด้วยชื่อทริปและข้อความบางส่วน
- [ ] Filter ทุกปี
- [ ] Filter ทุกสถานะ
- [ ] Filter เฉพาะรายการปักหมุด
- [ ] ผสม Search + หลาย Filter
- [ ] Sort แก้ไขล่าสุด
- [ ] Sort สร้างล่าสุด
- [ ] Sort ลูกค้า A–Z
- [ ] Sort เลข Quotation แบบ numeric
- [ ] Sort วันเดินทางใกล้สุด
- [ ] Save/Update/Apply ลูกค้าเดิม
- [ ] Export Backup JSON
- [ ] Import Backup แล้วข้อมูล records/customers ครบ
- [ ] Migration จากข้อมูล v5.7

## E. Print/PDF

- [ ] Print Preview ไม่แสดง panel และปุ่มควบคุม
- [ ] สีและเส้นหลักแสดงถูกต้อง
- [ ] ตารางยาวไม่ทับ total, notes หรือ signature
- [ ] ข้อความหลายบรรทัดไม่ถูกตัดผิดปกติ
- [ ] Save PDF เปิดอ่านได้และยอดตรงกับหน้าจอ

## F. Release Evidence

- [ ] บันทึก Browser/OS และวันที่ทดสอบ
- [ ] บันทึกชุดข้อมูลหรือขั้นตอนที่ใช้
- [ ] บันทึก Pass/Fail/Blocked ตามจริง
- [ ] อัปเดต QA Report และ SHA-256
- [ ] พี่เจยืนยันก่อนเลื่อนสถานะ
