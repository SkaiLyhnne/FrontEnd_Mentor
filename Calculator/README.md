# Documentation

## Introduction
Hello and welcome. The purpose of this exercise is to reproduce a calculator from the Frontend Mentor site. It can solve basic expressions and change color theme. The typescript overlay is used for the logic part and CSS clas for styling.

Link: https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29

## Component(s)

`<Fileby/>` is a file used as a footer that contains redirects to Frontend Mentor and GitHub and contains it own css style. The @ts-nocheck comment above ignores a warning raised by Svelte when importing the component.


## Variable(s)

**onScreen** : A `string variable`, initialized to an empty string. It contains the mathematical expression displayed on the calculator screen. It is also used to display the solution returned by the solve() function.

**current** : A `numeric variable`, initialized to zero. It represents the calculator's current theme and is used to synchronize the DOM with the logic.


## Focntion(s)

- **solve()** : This function solves the mathematical expression contained in `onScreen` using the eval() function and updates `onScreen` with the result converted to a string. NB: (eval() isn't very safe... but I 	don't really care)

- **remove()** : This function removes the last character from the onScreen string using the slice() method. It updates `onScreen` with the new truncated string.


## Classe(s)

**#body**: élément contenant le corps de la calculatrice.
	└ **.colorBody1, 2, 3**: classe contenant la couleur de fond principale.


**#calculator**: élément contenant l'ensemble des composants de la calculatrice.


**#header**: élément parent dicisé en deux situé au-dessus de l'écran de la calculatrice.


**#themePannel**: élément du header positionné à droite contenant la partie du changement de thème.


**toggleSpan**: élément contenant les boutons de changement de thème.
	└ **.toggle1, 2, 3**: style de l'élément bordure et couleur.



**.themeActif1, 2, 3**: mise en surbrillance du bouton suivant le thème courrant.

**.themeInactif1, 2, 3**: mise en retrait du bouton suivant le thème courrant.

**.flyingTxt**: classe plaçant le texte des boutons de themes au-dessus de ces derniers.



**#screen**: élément de l'écran de la calculatrice avec effet de bordure et alignant le texte à droite.
	└ **.colorScreen1, 2, 3**: classe contenant les couleurs de font et du texte de l'écran.


**#keyboard**: élément parent contenant l'ensemble des éléments du clavier.
	└ **.keyboardColor1, 2, 3**: classe appliquant le stye de fond de la zone du clavier.

**.divKeyboard**: élément parents des bouton du clavier appliquant un style d'alignement.

**.touch1, 2, 3**: classe définissant le style des boutons tel que la couleur de fond, texte, l'ombre, la bordure.

**.delete1, 2, 3**: classe contenant le style de couleur de fond et de texte pour le bouton DEL suivant le theme.

**.reset1, 2, 3**: classe contenant le style de couleur de fond et de texte pour le bouton RESET suivant le theme.

**.equals1, 2, 3**: classe contenant le style de couleur de fond et de texte pour le bouton = (égal) suivant le theme.