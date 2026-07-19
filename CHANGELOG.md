# CHANGELOG

## v5.8.4 CI — Approved Master

- พี่เจอนุมัติ v5.8.4 CI RC1 เป็น Approved Master เมื่อ 2026-07-19
- Approved Master ตรงกับ Development และ RC1 แบบ byte-for-byte
- ไม่มี code change ระหว่าง promotion

## v5.8.4 CI RC1 — Release Candidate

- Promote จาก Development v5.8.4 ที่ผ่าน Static และ User Interactive QA
- RC1 ตรงกับ Development source แบบ byte-for-byte
- ไม่มี code change ระหว่าง promotion
- รอพี่เจอนุมัติเป็น Approved Master

## v5.8.4 CI — Development

- เปลี่ยนค่าเริ่มต้นหลังเปิดหน้า/F5 ให้เลือกเฉพาะ HOTEL และ BUS
- หมวด RESTAURANT, GUIDE / TOUR LEADER, TICKET / ENTRANCE และ OTHER รอผู้ใช้เลือกเอง
- การ Load ใบเสนอราคาเดิมยังใช้สถานะหมวดที่บันทึกไว้

## v5.8.3 CI — Development

- ย้ายปุ่มลัดลงไป Record Manager และกลับด้านบนมาไว้ในแถบเดียวกับปุ่มล้างฟอร์ม
- เพิ่ม QA fixture ข้อมูลจำลอง 25 records สำหรับทดสอบ Pagination
- เพิ่มหน้า Seeder ที่ปลอดภัยสำหรับทดสอบ migration จาก v5.7 ใน Incognito
- ไม่มีการเปลี่ยน logic การบันทึกหรือจัดการข้อมูล

## v5.8.2 CI — Development

- เพิ่มปุ่ม `↑ กลับด้านบน` ที่ส่วนล่างของศูนย์จัดการใบเสนอราคา
- รักษาปุ่มลัดลงไป Record Manager จาก v5.8.1
- ไม่มีการเปลี่ยน logic ของระบบ Quotation

## v5.8.1 CI — Development

- เพิ่มปุ่มลัดด้านบนเพื่อเลื่อนไปยังศูนย์จัดการใบเสนอราคา
- ไม่มีการเปลี่ยน logic ของ Save, Search, Filter, Pagination หรือ Print/PDF

## v5.8 CI — Development

- เพิ่ม Search, Filters, Sorting และ Pagination 20 รายการ
- เพิ่มสถานะและการปักหมุด
- แยกฐานข้อมูลลูกค้า
- เพิ่ม Export/Import Backup JSON
- เพิ่ม Archive ตามปี
- เพิ่ม migration จาก v5.7
- Static QA passed; Interactive QA pending

## v5.7 CI — Development

- เพิ่มการบันทึกหลายใบเสนอราคา
- เพิ่ม Save New, Load, Update และ Delete
- ป้องกันเลข Quotation ซ้ำ
- รักษาข้อมูลรายการ หมายเหตุ การตั้งค่า และ Logo

## v5.6 CI RC1 — Not Approved

- เพิ่ม `หมายเหตุรายการ:`
- รองรับหมายเหตุหลายบรรทัด

## v5.5 CI — Approved Master

- ฐานระบบที่ได้รับอนุมัติตามประวัติ
- ห้ามแก้ทับ
