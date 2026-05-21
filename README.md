# OVTransit

A live Dutch public transport departure app powered by OVapi.

---

## Deploy in 5 steps

### Step 1 — Put this folder on GitHub
1. Go to https://github.com/new
2. Create a new repository called `ovtransit`
3. Make it **Public**
4. Click **Create repository**
5. Upload all these files (drag & drop onto the page)

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com
2. Click **Add New → Project**
3. Import your `ovtransit` GitHub repo
4. Click **Deploy** (no settings to change)
5. Wait ~30 seconds — done!

### Step 3 — Open your app
Vercel gives you a URL like `https://ovtransit-abc123.vercel.app`
Open it on your phone — live departures will load!

---

## Add more stops

In `public/index.html`, find the stop rows and add your stop IDs.
The stop ID format is a TimingPointCode (TPC) from OVapi.

Example:
```js
openDep('57240019', 'bus')   // bus stop
openDep('57240024', 'tram')  // tram stop
openDep('12345678', 'train') // train station
openDep('87654321', 'metro') // metro station
```

---

## File structure

```
ovtransit/
├── api/
│   └── departures.js   ← Vercel serverless proxy (calls OVapi)
├── public/
│   └── index.html      ← The app
├── vercel.json         ← Vercel config
└── README.md
```

---

## How it works

Browser → Vercel proxy (`/api/departures?stop=57240019`) → OVapi → back to app

The proxy runs server-side so there's no CORS problem.
Departures auto-refresh every 30 seconds.
