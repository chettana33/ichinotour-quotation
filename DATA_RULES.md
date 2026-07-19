# DATA RULES

## ที่จัดเก็บปัจจุบัน

- ใบเสนอราคา: `quotationV58_CI_records`
- ลูกค้า: `quotationV58_CI_customers`
- Logo: `quotationLogoV58_CI`
- ระบบเก็บข้อมูลใน Browser `localStorage`

## โครงสร้างหลัก

- Quotation fields: เลขที่ วันที่ออก วันหมดอายุ สกุลเงิน เรท ชื่อทริป สถานะ ผู้ออก ลูกค้า หมายเหตุ และการตั้งค่า UI
- Flags: การปักหมุด
- Line items: หมวด รายละเอียด วันเริ่ม วันสิ้นสุด จำนวน Unit ราคา และหมายเหตุรายการ
- Record metadata: ลูกค้า ชื่อทริป สถานะ ปี วันเดินทาง วันที่สร้าง และวันที่แก้ไข
- Customer profile: id, name, info, createdAt, updatedAt

## กฎข้อมูล

1. เลข Quotation ต้องไม่ซ้ำแบบไม่สนตัวพิมพ์เล็ก/ใหญ่
2. Save New ต้องไม่เขียนทับรายการเดิม
3. Update ต้องแก้เฉพาะรายการที่ Load/เลือกไว้
4. Delete ต้องขอคำยืนยัน
5. Import Backup ต้อง validate ว่า `records` และ `customers` เป็น array
6. Import ปัจจุบันรวมข้อมูลโดยใช้ `id` เป็น key; รายการ id เดียวกันจาก backup จะแทนค่ารายการเดิม
7. Migration v5.7 ทำเมื่อยังไม่มี key ของ v5.8 เท่านั้น
8. ห้าม commit backup ที่มีข้อมูลลูกค้าจริงลง repository

## ข้อควรทดสอบด้านข้อมูล

- localStorage เต็มหรือถูกปิด
- ข้อมูล JSON เสียหาย
- Quotation ซ้ำ
- วันสิ้นสุดก่อนวันเริ่ม
- ตัวเลขว่าง ศูนย์ ติดลบ หรือมีทศนิยม
- Import ข้อมูลซ้ำและ id ชนกัน
- Migration จาก v5.7 ที่มี field เก่าไม่ครบ
