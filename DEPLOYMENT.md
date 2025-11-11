# دليل النشر على Vercel

## خطوات النشر

### 1. من خلال Vercel Dashboard (موصى به)

1. افتح [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط على "Add New Project"
3. استورد المشروع من GitHub
4. سيتم اكتشاف Next.js تلقائياً
5. اضغط "Deploy"

### 2. من خلال Vercel CLI

```bash
# تثبيت Vercel CLI
npm install -g vercel

# تسجيل الدخول
vercel login

# نشر المشروع
vercel
```

## إعدادات المشروع

المشروع مُهيأ مسبقاً مع:
- ✅ `vercel.json` - إعدادات Vercel
- ✅ `next.config.js` - إعدادات Next.js
- ✅ `.vercelignore` - استثناء الملفات غير الضرورية
- ✅ `.gitignore` - استثناء الملفات من Git

## متغيرات البيئة (إن وُجدت)

إذا كان المشروع يستخدم متغيرات بيئة، أضفها في:
- **Vercel Dashboard**: Settings → Environment Variables

## بعد النشر

سيتم إنشاء URL للمشروع تلقائياً:
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch.vercel.app`

## التحديثات التلقائية

عند دفع التحديثات إلى GitHub:
- `main/master` branch → Production deployment
- Other branches → Preview deployment

## الدعم

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

