# Yêu cầu thiết kế–thi công nhà vườn — Golden Hills, Đà Nẵng

Website tĩnh (HTML / CSS / JS) gửi đơn vị thiết kế–thi công. Deploy **GitHub Pages**.

> Trước đây gọi là “brief” = bản tóm yêu cầu dự án. Trên web đã đổi thành **Yêu cầu dự án / Hồ sơ yêu cầu**.

## Trước khi đăng

1. Trong `index.html`, thay `YOUR_USERNAME` (4 chỗ) ở các thẻ `canonical`, `og:url`, `og:image`, `twitter:image` bằng URL Pages thật. **Chưa thay thì share Zalo/Messenger không có ảnh preview.**
2. Share xong preview vẫn sai? Zalo/Facebook cache OG — xóa cache tại [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).

## Ảnh

| File | Dùng ở đâu |
|------|-----------|
| `assets/lo-dat.jpg` | Ảnh Street View lô đất — mở bằng nút trên trang (modal) |
| `assets/phoi-canh.jpg` | Ảnh tham khảo gu, hiện trong bảng section 01 (750×630) |
| `assets/og-phoi-canh.jpg` | Ảnh preview khi share link (1200×630, chuẩn OG) |

## Nội dung trang

| # | Section | Nội dung |
|---|---------|----------|
| 01 | Đất | Lô đất, vị trí, loại hình, sân trước, bố cục, chống nắng, gu tham khảo |
| 02 | Bố trí phòng ốc | Các phòng mong muốn |
| 03 | Yêu cầu | An toàn, cách nhiệt/cách âm, độ bền, đồ dùng |
| 04 | Báo giá | Về ngân sách, mong muốn cách báo giá |
| 05 | Nhà thầu | Tiến độ, minh bạch, giá hợp lý, kinh nghiệm |
| 06 | Liên hệ | Zalo 0362 438 292 |

Trang in được (Ctrl/Cmd+P) — print CSS đã xử lý section nền tối.

## Publish

```bash
cd nha-vuon-brief
git init
git add .
git commit -m "docs: garden house brief site"
git remote add origin https://github.com/YOUR_USERNAME/nha-vuon-brief.git
git branch -M main
git push -u origin main
```

GitHub → **Settings → Pages** → branch `main` / root.

## Local

```bash
python3 -m http.server 8080
# http://localhost:8080
```
