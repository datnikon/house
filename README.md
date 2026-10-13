# Nhà lắp ghép kiểu vườn — Golden Hills, Đà Nẵng

Website tĩnh (HTML / CSS / JS) gửi riêng cho từng đơn vị thiết kế–thi công mà gia chủ chọn. Deploy **GitHub Pages**.

> Trang **không có số điện thoại** — gia chủ gửi link trực tiếp cho từng người, không công khai liên hệ.
> Giọng văn đời thường nhưng trung tính — không trang trọng máy móc, cũng không xuống nước.

## Trước khi đăng

URL đã cấu hình: `https://datnikon.github.io/house/` (trong `canonical`, `og:url`, `og:image`, `twitter:image`).
Nếu đổi repo/user, sửa lại 4 chỗ đó.

Share xong preview vẫn sai? Zalo/Facebook cache OG — xóa cache tại [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).

## Ảnh

| File | Kích thước | Dùng ở đâu |
|------|-----------|-----------|
| `assets/lo-dat.jpg` | 1800×763 | Ảnh Street View lô đất (khoanh đỏ) — mở bằng nút "Xem ảnh lô đất" |
| `assets/phoi-canh.jpg` | 750×630 | Ảnh tham khảo gu, hiện trong bảng section 01 |
| `assets/og-phoi-canh.jpg` | 1200×630 | Ảnh preview khi share link (chuẩn OG) |

Nếu thay ảnh, nhớ sửa `width`/`height` trong `index.html` cho khớp — không khớp thì layout nhảy lúc load.
Dùng `sips` để nén: `sips -s format jpeg -s formatOptions 82 -Z 1800 in.png --out out.jpg`

## Nội dung trang

| # | Section | Nội dung |
|---|---------|----------|
| 01 | Đất | Lô đất, vị trí, sân trước, kiểu nhà (khác biệt/phá cách), cách sắp xếp, nắng chiều, gu tham khảo |
| 02 | Bố trí phòng ốc | Khách & thờ, chỗ nấu ăn, 3 phòng ngủ, WC chung |
| 03 | Yêu cầu | Khác biệt, an tâm, mát và yên, bền, đồ dùng |
| 04 | Báo giá | Về ngân sách (chưa cố định), cách báo giá mong muốn |
| 05 | Nhà thầu | Tiến độ, chi phí rõ ràng, giá đúng chất lượng, kinh nghiệm, chủ động đề xuất |

Trang in được (Ctrl/Cmd+P).

## Publish

```bash
cd nha-vuon-brief
git init
git add .
git commit -m "docs: nha vuon brief site"
git remote add origin https://github.com/datnikon/house.git
git branch -M main
git push -u origin main
```

GitHub → **Settings → Pages** → branch `main` / root.

## Local

```bash
python3 -m http.server 8080
# http://localhost:8080
```
