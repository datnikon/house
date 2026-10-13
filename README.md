# Yêu cầu thiết kế–thi công nhà vườn — Golden Hills, Đà Nẵng

Website tĩnh (HTML / CSS / JS) gửi đơn vị thiết kế–thi công. Deploy **GitHub Pages**.

> Trước đây gọi là “brief” = bản tóm yêu cầu dự án. Trên web đã đổi thành **Yêu cầu dự án / Hồ sơ yêu cầu**.

## Trước khi đăng

1. Trong `index.html`, thay `YOUR_USERNAME` ở các thẻ `canonical`, `og:*`, `twitter:*`, JSON-LD bằng URL Pages thật.
2. Ảnh lô đất nằm ở `assets/lo-dat.jpg` — mở bằng nút trên trang (không hiện sẵn).

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
