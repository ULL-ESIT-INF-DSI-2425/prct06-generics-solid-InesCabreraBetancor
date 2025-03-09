[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/hGiCucuU)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=18558878)

# <span style="color: #8b0fb6;">PRÁCTICA 5 - OBJETOS, CLASES E INTERFACES</span>
## DESARROLLO EN SISTEMAS INFORMÁTICOS 
### INÉS CABRERA BETANCOR

En esta página se podrá acceder a toda la información que concierne a la práctica 6 de la asignatura. Donde se mostrará en detalle, la documentación asociada a cada función generada para la resolución de los ejercicios pautados, tanto para realizar en casa como los que se pedirán desarrollar en el aula.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-InesCabreraBetancor/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-InesCabreraBetancor?branch=main)

[![CI tests](https://github.com/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-InesCabreraBetancor/actions/workflows/ci.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2425/prct06-generics-solid-InesCabreraBetancor/actions/workflows/ci.yml)


## EJRECICIO - 3
A continuación se explican los criterios SOLID que no siguen el código ejemplo proporcionado en el enunciado del ejercicio 3:
### 1. Violación del Principio de Responsabilidad Única (SRP - Single Responsibility Principle)
La clase FileManager tiene dos responsabilidades:
- Leer y escribir archivos
- Manejar errores y mostrar mensajes por consola

Esto significa que a la hora de quere cambiar la forma en que se manejan los errores o mensajes por consola, deberiamos modificar esta clase. Lo cual la hace poco modular.

### 2. Violación del Principio de Inversión de Dependencias (DIP - Dependency Inversion Principle)
La clase FileManager depende directamente del modulo fs de Node.js, lo que significa que está limitada a un sistema específico de archivos. Si a futuro quisieramos usar otros archivos tendríamos que modificar todo el código.

## EJERCICIO - 4
A continuación se explican los criterios SOLID que no siguen el código ejemplo proporcionado en el enunciado del ejercicio 4:
### 1. Principio de Segregación de Interfaces (ISP)
Porque la interfaz PrintableScannable obliga a todas las clases que la implementan a definir los métodos print y scan, incluso si no los usan (como en Printer y Scanner).

## EJERICIO - 5
Si bien cumple varios principios SOLID como solo hacer un propóstito por clase. Vemos que la clase Notifier no cumple con el principio 
de Sustitución de Liskov (LSP):
En el diseño original, la clase Notifier espera un argumento de tipo EmailService | ShortMessageService, lo que significa que se limita a una de las dos clases concretas. Si se agregara otro tipo de notificación, se estaría violando la LSP al no poder sustituir EmailService o ShortMessageService por otras implementaciones sin alterar el comportamiento esperado.

## EJERCICIO - 6
En el código presentado, el principio SOLID que se está violando es el Principio de Sustitución de Liskov (LSP). Este principio establece que las clases derivadas deberían ser intercambiables por sus clases base sin alterar el comportamiento esperado del sistema.

Por ejemplo, en este caso la clase Bird tiene un metodo fly() pero si tuviesemos una clase Pingüino obligaría a ese pingüino a volar y en la realidad no vuelan. Por tanto la herencia de Bird a Pingüino no sería correcta segun en el principio de Liskov.