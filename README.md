

# <h1 align="center">Just Stream It</h1>
</br>
<p align="center">
    <img src="https://user.oc-static.com/upload/2020/09/18/16004298163529_P5.png" 
            alt="le logo de de Just Strem It" 
            width="250" 
            height="200"/>
</p>


Just Stream It est une application web permettant de visualiser en temps réel un classement de films intéressants provenant d'une API(interface de programmation d'application).

# Utilisation

- Pour fonctionner le site à besoin de l'api OC Movies afin d'en extraire les données pour les afficher. Il faudra donc d'abord procéder à son installation.

## Installation d'OC-MOVIES

Cette API exécutable localement peut être installée en suivant les étapes décrites ci-dessous. L'usage de pipenv est recommandé, mais des instuctions utilisant venv et pip sont également fournies plus bas. Si pipenv n'est pas encore installé sur votre ordinateur, vous trouverez des instuctions d'installation détaillées [sur cette page](docs/pipenv/installation-fr.md).

### Installation et exécution de l'application avec pipenv

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Installez les dépendances du projet à l'aide de la commande `pipenv install` 
4. Créer et alimenter la base de données à l'aide de la commande `pipenv run python manage.py create_db`
5. Démarrer le serveur avec `pipenv run python manage.py runserver`

Lorsque le serveur fonctionne, après l'étape 5 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/). Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/titles](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 4 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter l'étape 5 à partir du répertoire racine du projet.

### Installation et exécution de l'application sans pipenv (avec venv et pip)

1. Cloner ce dépôt de code à l'aide de la commande `$ git clone clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git` (vous pouvez également télécharger le code [en temps qu'archive zip](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR/archive/refs/heads/master.zip))
2. Rendez-vous depuis un terminal à la racine du répertoire ocmovies-api-fr avec la commande `$ cd ocmovies-api-fr`
3. Créer un environnement virtuel pour le projet avec `$ python -m venv env` sous windows ou `$ python3 -m venv env` sous macos ou linux.
4. Activez l'environnement virtuel avec `$ env\Scripts\activate` sous windows ou `$ source env/bin/activate` sous macos ou linux.
5. Installez les dépendances du projet avec la commande `$ pip install -r requirements.txt`
6. Créer et alimenter la base de données avec la commande `$ python manage.py create_db`
7. Démarrer le serveur avec `$ python manage.py runserver`

Lorsque le serveur fonctionne, après l'étape 7 de la procédure, l'API OCMovies peut être interrogée à partir des points d'entrée commençant par l'url de base [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/). Le point d'entrée principal permettant de consulter les films est [http://localhost:8000/api/v1/titles](http://localhost:8000/api/v1/titles/). Si vous accédez à cette url depuis un navigateur,ce dernier vous présentera une interface naviguable servant de documentation et de laboratoire d'expériementation. Vous trouvez également une documentation plus formelle en bas de ce README.

Les étapes 1 à 6 ne sont requises que pout l'installation initiale. Pour les lancements ultérieurs du serveur de l'API, il suffit d'exécuter les étapes 4 et 7 à partir du répertoire racine du projet.

*Pour plus de détails concernant les points d'entrées veuillez vous référer à la documentation de l'API.

# Installation de Just Stream It :

1. Placez-vous dans le répertoire qui contiendra le projet 
  
2. Récupérer le code venant de GitHub (faire un clone) :  
    ```
    git clone https://github.com/glgstyle/JustStreamIt.git
    cd JustStreamIt
    ```
3. Créer un environnement virtuel : 

    ```python -m venv env```

4. Activer l'environnement :  

    ```source env/bin/activate ```

5. Démarrer le serveur(le port 50 est un exemple et est modifiable) :

     ```python -m http.server 50```

6. Accéder au site depuis votre navigateur en tappant dans la barre d'adresse url(50 ou un autre port si différent) :

    ```localhost:50```

# Modification du style

Just Stream It utilise Sass, un langage de script préprocesseur qui est compilé ou interprété en CSS (Cascading Style Sheets). Pour modifier ou créer des feuilles de style il faudra donc l'installer afin de compiler vos modifications.

## Installation de Sass

Placez vous dans le terminal du projet Just Stream it et suivez les instructions suivantes. 

### Si vous utilisez Node.js

```npm install -g sass```

### Si vous utilisez Chocolatey

```choco install sass```

### Si vous utilisez Homebrew

```brew install sass/sass/sass```

## Utilisation

A- Création d'une feuille de style:

1. Tapper la commande suivante(_file est à remplacer par le nom du fichier à créer):

```sass source/style/_file.scss build/style/_file.css```

2. Compiler de sass en css avec la commande suivante(_file est à remplacer par le nom du fichier crée):

```sass --watch style/_file.scss style/_file.css```

B- Modification du style:

1. Tapper la commande suivante(_file est à remplacer par le nom du fichier à modifier):

```sass --watch style/_file.scss style/_file.css```