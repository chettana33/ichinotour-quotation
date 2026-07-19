# QA Fixtures

## pagination_25_records.json

ข้อมูลจำลองสำหรับทดสอบ Pagination ของ v5.8 ขึ้นไป

- 25 ใบเสนอราคา: `QA-PAGE-001` ถึง `QA-PAGE-025`
- ลูกค้าจำลอง 5 ราย
- สถานะทั้ง Draft, Sent, Confirmed และ Cancelled
- ปักหมุดทุกลำดับที่หาร 5 ลงตัว
- ใช้ id คงที่ จึง Import ซ้ำแล้วแทนรายการเดิม ไม่เพิ่มชุดซ้ำ

## วิธีใช้

1. Export Backup ข้อมูลปัจจุบันก่อน
2. Import `pagination_25_records.json`
3. ค้นหา `QA-PAGE-`
4. ตรวจหน้าแรก 20 รายการและหน้าที่สอง 5 รายการ
5. ข้อมูลจำลองจะรวมกับข้อมูลเดิมใน Browser

ห้ามใช้ข้อมูลลูกค้าจริงใน fixture
