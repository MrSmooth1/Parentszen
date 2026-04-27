# ParentsZen — Site Web

Site web officiel de **ParentsZen**, soutien pour familles TSA à Montréal et Rive-Sud.

## Démarrage rapide

### Prérequis
- [Node.js](https://nodejs.org/) v18 ou plus récent
- npm (inclus avec Node.js)

### Installation

```bash
# 1. Entrez dans le dossier du projet
cd parentszen

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur de développement
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Compilation pour la production

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`, prêts à être déployés.

### Prévisualisation du build

```bash
npm run preview
```

---

## Structure du projet

```
parentszen/
├── public/
│   └── logo.jpeg          ← Logo de ParentsZen
├── src/
│   ├── App.jsx            ← Composant principal (tout le site)
│   ├── main.jsx           ← Point d'entrée React
│   └── index.css          ← Reset CSS global
├── index.html             ← HTML de base
├── package.json
├── vite.config.js
└── README.md
```

---

## Déploiement

### Vercel (recommandé, gratuit)
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez ce dossier comme nouveau projet
3. Vercel détecte automatiquement Vite — cliquez "Deploy"

### Netlify
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Faites glisser le dossier `dist/` (après `npm run build`) dans l'interface

---

## Personnalisation

- **Couleurs** : modifiez l'objet `C` en haut de `src/App.jsx`
- **Contenu** : les données sont dans les constantes `SERVICES`, `VALUES`, etc.
- **Logo** : remplacez `public/logo.jpeg` par votre fichier

---

## Contact

📧 contact@parentszen.ca  
📱 +1 438-773-0969 / +1 438-985-6652  
📍 Montréal et Rive-Sud
