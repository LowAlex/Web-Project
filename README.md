# Planets of the Solar System

Application web sur les planètes du système solaire, construite avec un backend **Django** et un frontend **Vue.js**.

## Stack technique

- **Backend** : Django 6 + SQLite
- **Frontend** : Vue.js 3 (CDN)
- **Base de données** : SQLite (fichier `db.sqlite3`)

## Structure du projet

```
Web-Project/
├── manage.py                  # Point d'entrée Django
├── db.sqlite3                 # Base de données SQLite
├── solar_system/              # Configuration du projet Django
│   ├── settings.py            # Paramètres (apps, BDD, static, media)
│   └── urls.py                # URLs racines
├── planets/                   # App Django
│   ├── models.py              # Modèle Planet (table en BDD)
│   ├── views.py               # Vues : page principale + API JSON
│   ├── admin.py               # Interface admin pour gérer les planètes
│   ├── urls.py                # Routes de l'app
│   ├── fixtures/
│   │   └── planets.json       # Données initiales des 8 planètes
│   └── templates/
│       └── index.html         # Template Django servi au navigateur
├── media/planets/             # Images uploadées via l'admin
└── Projet AWP/                # Fichiers statiques (CSS, JS, images originales)
    ├── app.js                 # Application Vue.js
    └── css/style.css
```

## Fonctionnalités Django

### Modèle
La classe `Planet` dans `models.py` représente la table en base de données :
- `title` : nom de la planète
- `desc` : description
- `img` : image uploadée
- `order` : ordre d'affichage

### API JSON
L'URL `/api/planets/` retourne toutes les planètes en JSON. Vue.js consomme cette API au chargement de la page.

### Admin
L'interface `/admin/` permet d'ajouter, modifier ou supprimer des planètes sans toucher au code.

### Templates & fichiers statiques
Django sert la page principale via son moteur de templates. Les fichiers CSS et JS sont gérés par le système `staticfiles`.

## Installation

```bash
# Installer les dépendances
pip install django pillow

# Appliquer les migrations
python manage.py migrate

# Charger les données initiales
python manage.py loaddata planets.json

# Lancer le serveur
python manage.py runserver
```

## URLs disponibles

| URL | Description |
|-----|-------------|
| `http://127.0.0.1:8000/` | Page principale (Vue.js) |
| `http://127.0.0.1:8000/api/planets/` | API JSON des planètes |
| `http://127.0.0.1:8000/admin/` | Interface d'administration |

## Identifiants admin

- **Utilisateur** : `admin`
- **Mot de passe** : `admin`
