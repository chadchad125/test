import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3ea29d8c-a97b-48c2-84ca-eda621a6cdcf', '1Arlo_Tillman@yahoo.com', 'Jane Doe', 'https://i.imgur.com/YfJQV5z.png?id=3', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c415f415-202a-464b-82e4-0ce573f4713d', '17Isabella31@hotmail.com', 'Sara Connor', 'https://i.imgur.com/YfJQV5z.png?id=19', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0a27dac0-277a-4184-9dbd-65546bc86ffd', '25Miles_Muller76@gmail.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=27', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('2fc8eef5-2a7d-4886-ac97-f52976412ade', '33Jessy_Bartell@gmail.com', 'Sara Connor', 'https://i.imgur.com/YfJQV5z.png?id=35', 'mno345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8e41165c-946b-442a-ab0e-b6ab6f7b2cd0', '41Mireya.Okuneva@yahoo.com', 'Sara Connor', 'https://i.imgur.com/YfJQV5z.png?id=43', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f9a0f50d-86ed-4cf2-b387-5afb182a6318', '49Cole91@hotmail.com', 'Sara Connor', 'https://i.imgur.com/YfJQV5z.png?id=51', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('24197cbb-8c84-46c7-813b-fd0a3ce5e319', '57Rachel72@hotmail.com', 'Sara Connor', 'https://i.imgur.com/YfJQV5z.png?id=59', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f12d1794-538f-4638-9b15-242c0d95154c', '65Davion28@gmail.com', 'Alice Wonderland', 'https://i.imgur.com/YfJQV5z.png?id=67', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('e752dc97-fd1e-4f00-bd58-93a28216beed', '73Merlin84@hotmail.com', 'Bob Builder', 'https://i.imgur.com/YfJQV5z.png?id=75', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('bb619637-6810-4698-8435-a4c756a99059', 'Acrylic Nail Extensions', 'Indulge in a spa pedicure with exfoliation and massage.', 180, 'Acrylic Sculpting', '70', 'Manicures');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('963fb364-7a55-4ce4-ac41-3c075de0e4b2', 'Gel Pedicure', 'Elegant French nail art with a classic white tip.', 894, 'Hand Massage', '70', 'Spa Treatments');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('d18eaef3-8aad-446b-a081-ca7df9909ac5', 'Gel Pedicure', 'A relaxing pedicure with gel polish that lasts longer.', 109, 'Acrylic Sculpting', '55', 'Nail Art');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('5ed60231-a1d3-47da-9198-4df568f82c1d', 'Classic Manicure', 'A relaxing pedicure with gel polish that lasts longer.', 643, 'Nail Stamping', '30', 'Spa Treatments');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('cfe77125-ecab-4f5a-95b3-3de03800cbbb', 'French Nail Art', 'Enhance your nails with durable acrylic extensions.', 951, 'Hot Stone Massage', '70', 'Spa Treatments');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('a4f43f1b-20c9-4049-9691-a0ae062eab87', 'Acrylic Nail Extensions', 'Elegant French nail art with a classic white tip.', 36, 'Nail Stamping', '25', 'Acrylics');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('0a7644ae-a49c-484c-8b65-3f597a593552', 'Spa Pedicure', 'Indulge in a spa pedicure with exfoliation and massage.', 888, 'UV Gel Application', '55', 'Pedicures');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('7bf861d8-31b4-4d34-a07a-5c1350f30f70', 'Spa Pedicure', 'A traditional manicure with nail shaping cuticle care and polish.', 948, 'Hot Stone Massage', '40', 'Acrylics');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('a0ac1d19-b2f0-4a99-b1eb-c0bec457a3e5', 'French Nail Art', 'A traditional manicure with nail shaping cuticle care and polish.', 423, 'Acrylic Sculpting', '40', 'Manicures');
INSERT INTO "Service" ("id", "name", "description", "duration", "technique", "price", "category") VALUES ('6d2bd646-a7a1-4ae7-a6c8-8bac73f056a1', 'Acrylic Nail Extensions', 'A traditional manicure with nail shaping cuticle care and polish.', 139, 'UV Gel Application', '25', 'Acrylics');

INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('de626ca8-eaee-4348-afe1-cafe2f52121d', 'https://i.imgur.com/YfJQV5z.png?id=151', 'Classic French', 'Blue', 'Animal Print', 'Elegant and simple design for any occasion.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('961b9961-f465-46a3-927e-8c068c12a5e6', 'https://i.imgur.com/YfJQV5z.png?id=157', 'Bold  Bright', 'Green', 'Abstract', 'Bright colors to make a bold statement.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('f66df59f-6f23-4090-8daa-72560c8ffa8a', 'https://i.imgur.com/YfJQV5z.png?id=163', 'Geometric', 'Green', 'Floral', 'Geometric patterns for a unique look.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('eba892b4-87d9-452c-9d83-ee6f95e4adf4', 'https://i.imgur.com/YfJQV5z.png?id=169', 'Classic French', 'Pink', 'Polka Dots', 'Bright colors to make a bold statement.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('61ca123b-30e8-4f6d-9b16-2d7db1efc4a7', 'https://i.imgur.com/YfJQV5z.png?id=175', 'Classic French', 'Pink', 'Polka Dots', 'Geometric patterns for a unique look.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('8d227b32-207d-4e37-a18b-d44764fc7016', 'https://i.imgur.com/YfJQV5z.png?id=181', 'Bold  Bright', 'Green', 'Polka Dots', 'Bright colors to make a bold statement.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('d7df0feb-20f2-43a1-9e85-2aa84d7a4d91', 'https://i.imgur.com/YfJQV5z.png?id=187', 'Geometric', 'Purple', 'Animal Print', 'Classic French tips with a modern twist.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('82de54b3-de23-4346-b49c-f1c08ce51f1d', 'https://i.imgur.com/YfJQV5z.png?id=193', 'Minimalist', 'Purple', 'Abstract', 'Elegant and simple design for any occasion.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('b5435075-686a-404a-81dd-aac95aae378d', 'https://i.imgur.com/YfJQV5z.png?id=199', 'Minimalist', 'Purple', 'Abstract', 'Geometric patterns for a unique look.');
INSERT INTO "GalleryImage" ("id", "imageUrl", "style", "color", "designType", "caption") VALUES ('0b6a1867-c9f7-4e98-a706-494ee4f1c667', 'https://i.imgur.com/YfJQV5z.png?id=205', 'Minimalist', 'Pink', 'Polka Dots', 'Classic French tips with a modern twist.');

INSERT INTO "Faq" ("id", "question", "answer") VALUES ('6503311c-e629-4f03-a5b1-fb8002f2a1a9', 'How far in advance should I book', 'Cancellations must be made 24 hours in advance to avoid a cancellation fee.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('65343f33-0f11-4692-9c93-8e5bf6b3f1a8', 'What is your cancellation policy', 'We recommend booking at least a week in advance to secure your preferred time slot.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('2a8afe88-4137-4ba7-b3d6-e42b43c43bee', 'What payment methods do you accept', 'We recommend booking at least a week in advance to secure your preferred time slot.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('08122411-cdd7-4ff0-8df8-3df7296bb5b2', 'What is your cancellation policy', 'We recommend booking at least a week in advance to secure your preferred time slot.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('b34e5c87-4866-4624-9cb9-6cb573cc547d', 'Are walkins welcome', 'Walkins are welcome but appointments are recommended to ensure availability.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('25e7feb5-4e88-46fb-a845-7f2ac27b750d', 'What payment methods do you accept', 'We recommend booking at least a week in advance to secure your preferred time slot.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('74f62e7f-9018-4a86-b600-cb4404749eba', 'What is your cancellation policy', 'We recommend booking at least a week in advance to secure your preferred time slot.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('7290b777-6a96-42c0-ada7-98857a46ac09', 'What payment methods do you accept', 'Cancellations must be made 24 hours in advance to avoid a cancellation fee.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('ca4e2dde-ff0b-4143-915d-0b57e33c3aa9', 'What is your cancellation policy', 'We accept cash credit cards and mobile payments such as Apple Pay and Google Pay.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('6565185a-3ca1-4c7e-bc4e-9445a9f0c3ed', 'What is your cancellation policy', 'We accept cash credit cards and mobile payments such as Apple Pay and Google Pay.');

INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('1723b379-722f-4680-9c6f-53c95b1aafc1', 'Emily Davis', '242Fannie49@yahoo.com', '5552345678', 'What are your operating hours during the holidays');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('60416ddd-1d14-4354-884a-d667911d60ec', 'Daniel Brown', '247Abraham22@yahoo.com', '5553456789', 'What are your operating hours during the holidays');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('bb513453-8a0b-4202-996d-76dcd12b55eb', 'Michael Johnson', '252Sister69@gmail.com', '5551234567', 'I am interested in booking a manicure and pedicure session.');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('91dab120-9538-4815-8f29-689956d7c1c8', 'Michael Johnson', '257Coy19@yahoo.com', '5553456789', 'I would like to know more about your nail art services.');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('b93849f5-67b9-498c-98aa-333f3b794cbe', 'Jessica Smith', '262Fletcher.Waters@hotmail.com', '5552345678', 'What are your operating hours during the holidays');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('def4a3c2-6c24-4106-8306-a53d0b24b6b7', 'Emily Davis', '267Grayson_Prosacco-Paucek39@gmail.com', '5553456789', 'What are your operating hours during the holidays');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('cf3353d2-8f0d-4413-bdee-3720b4ebb7e9', 'Daniel Brown', '272Xander11@yahoo.com', '5551234567', 'I am interested in booking a manicure and pedicure session.');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('5566a7e8-e8ae-43e1-ae40-799d12fbe2d4', 'Emily Davis', '277Keanu_Frami67@yahoo.com', '5553456789', 'I am interested in booking a manicure and pedicure session.');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('92eae9cf-bd99-4ffe-bd9a-82760ac629f2', 'Daniel Brown', '282Meaghan_Johns55@gmail.com', '5551234567', 'I am interested in booking a manicure and pedicure session.');
INSERT INTO "ContactMessage" ("id", "name", "email", "phone", "message") VALUES ('cce8e2d4-2cb6-42db-849c-1440a5b4e4de', 'Michael Johnson', '287Cyril.Cruickshank@gmail.com', '5553456789', 'Do you offer group discounts for bridal parties');

INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('aa841681-faa7-4417-83cf-5ad7d6a25894', '2024-07-29T16:02:25.404Z', '1000 AM  1100 AM', 'Rescheduled', 'michael.brownexample.com', false, '2fc8eef5-2a7d-4886-ac97-f52976412ade');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('5de89eb6-88b0-4fe5-91a0-0a70f89409d2', '2024-10-11T09:49:17.649Z', '0100 PM  0200 PM', 'Pending', 'john.doeexample.com', true, 'c415f415-202a-464b-82e4-0ce573f4713d');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('eee29bb1-edc0-4798-b1eb-174600d825a6', '2025-08-16T11:08:11.776Z', '0100 PM  0200 PM', 'Pending', 'john.doeexample.com', false, '0a27dac0-277a-4184-9dbd-65546bc86ffd');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('54676d9d-8c05-44f9-a359-e9b5173aeaa8', '2024-12-05T18:08:00.756Z', '0330 PM  0430 PM', 'Cancelled', 'david.wilsonexample.com', false, '24197cbb-8c84-46c7-813b-fd0a3ce5e319');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('ecf61385-5721-4846-abe2-5e1cfef6bfc4', '2024-05-28T19:23:53.020Z', '0330 PM  0430 PM', 'Confirmed', 'emily.jonesexample.com', true, '0a27dac0-277a-4184-9dbd-65546bc86ffd');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('703bc8ff-11a5-42b8-80c9-5b61935ae291', '2025-03-14T18:41:53.003Z', '1130 AM  1230 PM', 'Rescheduled', 'emily.jonesexample.com', true, 'c415f415-202a-464b-82e4-0ce573f4713d');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('6ff2ad19-567d-41e0-b205-27ed390158ff', '2025-02-03T10:29:07.105Z', '0330 PM  0430 PM', 'Confirmed', 'emily.jonesexample.com', false, 'f12d1794-538f-4638-9b15-242c0d95154c');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('4ed4114d-3fa4-4421-a8bd-fcc9f9740265', '2025-08-05T11:28:13.681Z', '1130 AM  1230 PM', 'Cancelled', 'emily.jonesexample.com', true, '24197cbb-8c84-46c7-813b-fd0a3ce5e319');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('17d00a67-9392-4c2e-b908-d08a48c87e60', '2024-06-12T18:09:16.113Z', '0330 PM  0430 PM', 'Completed', 'emily.jonesexample.com', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Booking" ("id", "date", "timeSlot", "status", "contactDetails", "optInNotification", "userId") VALUES ('f25f1d50-361e-473e-96ed-b7629319d6a2', '2024-06-15T05:10:31.527Z', '0900 AM  1000 AM', 'Cancelled', 'john.doeexample.com', true, '2fc8eef5-2a7d-4886-ac97-f52976412ade');

INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('25fb3bb7-0c05-4d0a-9b72-4874bebdefcb', 'Sarlis Nails is my goto salon The team is professional and the quality of service is unmatched.', '8e41165c-946b-442a-ab0e-b6ab6f7b2cd0');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('71e4f833-6a5f-47b4-baf9-f512bc4308e7', 'Every visit to Sarlis Nails is a treat. The salon is clean and the staff makes you feel at home.', 'f9a0f50d-86ed-4cf2-b387-5afb182a6318');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('6e9f06a6-32a1-4604-bfaf-05a922469d9f', 'Absolutely loved my experience at Sarlis Nails The staff was friendly and my nails have never looked better.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('88227d0e-3745-405e-864f-5f29668919a2', 'The ambiance at Sarlis Nails is so relaxing and the nail art is always on point. Highly recommend', '3ea29d8c-a97b-48c2-84ca-eda621a6cdcf');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('ab26b3ca-ce07-4021-9be3-6c43110d256a', 'Sarlis Nails is my goto salon The team is professional and the quality of service is unmatched.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('8e519d1d-bc33-42d8-832b-b14c3109be02', 'Ive been coming to Sarlis Nails for months and Im always impressed by their attention to detail and creativity.', 'f9a0f50d-86ed-4cf2-b387-5afb182a6318');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('95f559c0-cde3-4fd0-a236-9261c7bec6ee', 'Absolutely loved my experience at Sarlis Nails The staff was friendly and my nails have never looked better.', '3ea29d8c-a97b-48c2-84ca-eda621a6cdcf');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('ed9a0ee7-4a70-41d5-bfb5-7c3df54adc23', 'Ive been coming to Sarlis Nails for months and Im always impressed by their attention to detail and creativity.', '3ea29d8c-a97b-48c2-84ca-eda621a6cdcf');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('9fb9e058-9e79-4768-8682-931261e90fcb', 'Every visit to Sarlis Nails is a treat. The salon is clean and the staff makes you feel at home.', '2fc8eef5-2a7d-4886-ac97-f52976412ade');
INSERT INTO "Testimonial" ("id", "content", "userId") VALUES ('52b9615c-91e9-43c5-b9de-c133f53d1e96', 'Every visit to Sarlis Nails is a treat. The salon is clean and the staff makes you feel at home.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('f8615a20-10af-410d-a9c7-efc978c252b7', 'f25f1d50-361e-473e-96ed-b7629319d6a2', '5ed60231-a1d3-47da-9198-4df568f82c1d');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('b11777a4-dbfe-43c0-8a3d-7e197d2d6771', 'aa841681-faa7-4417-83cf-5ad7d6a25894', 'd18eaef3-8aad-446b-a081-ca7df9909ac5');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('293d2af5-ecd9-4b75-b25b-2e19f731e58b', '5de89eb6-88b0-4fe5-91a0-0a70f89409d2', '7bf861d8-31b4-4d34-a07a-5c1350f30f70');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('3ce6e625-74ed-41aa-9937-750b5c2e703d', 'f25f1d50-361e-473e-96ed-b7629319d6a2', '6d2bd646-a7a1-4ae7-a6c8-8bac73f056a1');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('acf224ed-fb88-446d-b0ed-78a9eed639ba', 'aa841681-faa7-4417-83cf-5ad7d6a25894', 'd18eaef3-8aad-446b-a081-ca7df9909ac5');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('fd31b3dd-639a-44a5-a04a-55289ec1515b', 'aa841681-faa7-4417-83cf-5ad7d6a25894', 'a4f43f1b-20c9-4049-9691-a0ae062eab87');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('1fad903e-f59d-48b2-af14-37066756e769', 'ecf61385-5721-4846-abe2-5e1cfef6bfc4', 'a0ac1d19-b2f0-4a99-b1eb-c0bec457a3e5');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('6cb20d69-a7ee-4dff-8bed-2384688e30ed', 'eee29bb1-edc0-4798-b1eb-174600d825a6', '963fb364-7a55-4ce4-ac41-3c075de0e4b2');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('862186ad-0c70-44b2-ba27-923e338fa6ad', '54676d9d-8c05-44f9-a359-e9b5173aeaa8', 'd18eaef3-8aad-446b-a081-ca7df9909ac5');
INSERT INTO "BookingService" ("id", "bookingId", "serviceId") VALUES ('aa41d429-3a8d-48da-b0b7-28553b07156c', 'f25f1d50-361e-473e-96ed-b7629319d6a2', 'cfe77125-ecab-4f5a-95b3-3de03800cbbb');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
