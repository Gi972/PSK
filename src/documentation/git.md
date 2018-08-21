
# Cheatsheet git

Instalation de Git:

Télécharger via le site [Git](https://git-scm.com/)
ici se trouve les commandes utilisées fréquement , pour plus de détails : [githowto](https://githowto.com/)


pour créer un dépot via :

```
git init
```
pour un projet vierge

ou 
```
git clone
```

pour cloner le dépot d'un projet existant 

pour savoir quel est la situation de votre branche  un seul mot clef:

```
git status
```

Après avoir mis en place la structure du projet, on crée une branche pour sa effectuer sa tâche.

```
git branch nouvelle-branche
```
tips: La branche principale sur laquelle vous serez par défaut principale sera appelé master.

Pour se déplacer dans cette branche:

```
git checkout nouvelle-branche
```

tips :
Pour pouvoir créer et aller directement sur cette branche:

```
git checkout -b nouvelle-branche
```

Maintenant que vous avez fait vos modifications


```
git status 
```
Pour connaitre les fichiers qui  sont crées, modifiés ou supprimé

```
git add fichier-modifié
```
tips: les commandes sont indiqués sur la ligne de commande donc normalement on est pas trop perdu

Maintenant on commit le tout 
```
git commit -m "le message indiquant les modifications qui ont été effectuées"
```

maintenant  il reste a merger 

```
git checkout master
git merge nouvelle-branche
```

