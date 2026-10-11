CK BUSINESS WEBSITE — READY-TO-UPLOAD FILES

FILES
- index.html: main website, jerseys, cyber services, online order form and Till payment instructions
- gallery.html: jersey gallery and admin sign-in/editor
- gallery.js: local gallery editing, image uploads, add/edit/delete and browser storage
- style.css: responsive design for phones and computers
- script.js: order-to-WhatsApp behaviour, estimated totals, copy Till button and simple local stock tool

PRICES SET
- Adult jersey: KSh 450
- Kids jersey: KSh 600
- Cyber services: price confirmed directly with CK Business
- M-Pesa Buy Goods / Till number: 5253233

IMPORTANT BEFORE PUBLISHING
1. Open script.js and check WHATSAPP_NUMBER. It is currently set to 254726596187 based on the project contact used earlier. Change it if this is not the correct CK Business WhatsApp number.
2. The stock tool PIN is 2580 in script.js. The gallery admin PIN is 2580 in gallery.js. Change both before publishing. These are browser-side demo PINs, not secure authentication.
3. The order form opens WhatsApp with the customer's order. It does not charge M-Pesa automatically or verify payments. Customers should order first, then pay only after CK Business confirms availability and the final amount. The website displays Till 5253233 and has a copy button.
4. The gallery starts with stylized sample illustrations. Use the Admin sign in section at the bottom of gallery.html to add photos, edit names/prices/descriptions, or delete items. Default gallery PIN: 2580.
5. Gallery edits and photos are stored only in localStorage on the current browser/device. Other customers will not see these changes on their devices. Clearing browser data may erase the edits. This is not secure authentication; anyone inspecting gallery.js can find the PIN. For changes visible to all customers, online database/storage is required.
6. This is a static website, so no database is required for the main website. The stock tool and gallery editor save only in the current browser/device; they do not sync between devices.

UPLOAD TO NETLIFY FROM PHONE
1. Extract this ZIP on your phone.
2. In Netlify, open your site and choose the manual deploy / deploy files option (or drag the extracted folder's contents into the deploy area if using a browser that supports it).
3. Upload the files so index.html, style.css, script.js, gallery.html and gallery.js are at the website root, not inside an extra nested folder.
4. Open the published website and test the order form, WhatsApp link and Till number.
