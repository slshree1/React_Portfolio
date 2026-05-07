# 🌟 React Portfolio

A personal portfolio website built with **React 19** and deployed on **Render**. It showcases projects, skills, and contact information with smooth animations powered by Framer Motion.

---

## 🚀 Live Demo

> Deployed on Render — [View Live](#) *(replace with your Render URL)*

---

## 📁 Project Structure

```
React_Portfolio/
├── public/              # Static assets (HTML template, favicon, etc.)
├── src/                 # React source code
│   └── ...              # Components, pages, styles
├── .gitignore
├── package.json
├── render.yaml          # Render deployment config
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| React Router DOM v7 | Client-side routing |
| Framer Motion | Animations & transitions |
| Lucide React | Icon library |
| Axios | HTTP requests |
| CSS | Styling |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/slshree1/React_Portfolio.git

# Navigate into the project
cd React_Portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000). The page reloads automatically on changes.

### Building for Production

```bash
npm run build
```

Outputs an optimized production build to the `build/` folder.

---

## ☁️ Deployment

This project is configured for deployment on **[Render](https://render.com)** using `render.yaml`.

**Configuration:**
- **Type:** Static site
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `./build`
- **SPA Routing:** All routes rewrite to `/index.html`

To deploy your own instance, connect this repo to Render and it will auto-detect the `render.yaml` config.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Run the app in development mode |
| `npm test` | Launch the test runner |
| `npm run build` | Build the app for production |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run eject` | Eject from Create React App |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**slshree1**  
GitHub: [@slshree1](https://github.com/slshree1)
