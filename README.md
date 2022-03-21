# ReactNative

This project was generated with react-native-cli

## Pre-config:

run `npm install`
en caso de algún error en la instalación, las dependencias utilizadas fueron:

[lottie-ios] y [lottie-react-native]

para instalar:

npm i --save lottie-react-native

npm i --save lottie-ios

en caso de utilizar la versión de iOS ir a la carpera ios y correr el comando: `pod install`

# INFO IMPORTANTE:

algunas veces, el código deja de sugerir posiciones válidas para el oponente, por lo cuál "se rinde" y se da como ganador al usuario.

esto es porque las jugadas que va a presentar el oponente se generan en base al primer movimiento (que es un random), si las jugadas relacionadas a la cadena del número random generado, no son posibles de jugar, porque las posiciones están ocupadas, entonces se termina el juego dando como ganador al usuario final.
