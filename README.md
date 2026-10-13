# Yêu cầu thiết kế–thi công nhà vườn — Golden Hills, Đà Nẵng

Website tĩnh (HTML / CSS / JS) gửi đơn vị thiết kế–thi công. Deploy **GitHub Pages**.

> Trước đây gọi là “brief” = bản tóm yêu cầu dự án. Trên web đã đổi thành **Yêu cầu dự án / Hồ sơ yêu cầu**.

## Trước khi đăng

1. Trong `index.html`, thay `YOUR_USERNAME` (5 chỗ) ở các thẻ `canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD bằng URL Pages thật. **Chưa thay thì share Zalo/Messenger không có ảnh preview.**
2. Ảnh lô đất nằm ở `assets/lo-dat.jpg` — mở bằng nút trên trang (không hiện sẵn).

## Nội dung trang

| # | Section | Nội dung |
|---|---------|----------|
| 01 | Đất & định hướng | Lô đất, vị trí, loại hình, sân trước, bố cục, chống nắng chiều |
| 02 | Bố trí phòng ốc | Công năng dự kiến |
| 03 | Yêu cầu cốt lõi | An toàn, thoải mái, độ bền |
| 04 | Báo giá | IN/OUT, format báo giá, thanh toán & bảo hành |
| 05 | Tiêu chí lựa chọn | Tiến độ, minh bạch, giá, năng lực |
| 06 | Liên hệ | Zalo 0362 438 292 + checklist gửi báo giá |

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
