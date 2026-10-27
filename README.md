# Práctica: RWD vs AWD 

Este repositorio contiene el código fuente de la práctica comparativa entre Responsive Web Design (RWD) y Adaptive Web Design (AWD) utilizando Node.js y Express.

## Requisitos Previos
* Tener instalado [Node.js](https://nodejs.org/)

## Instrucciones de Instalación
1. descargar este repositorio en tu computadora.
2. Abrir la carpeta del proyecto en la terminal.
3. Ejecutar el siguiente comando para instalar las dependencias necesarias:
   npm install

## Instrucciones de Arranque Local
1. En la misma terminal, encender el servidor con el comando:
   node server.js
2. Abrir el navegador web y visitar las siguientes rutas:
   * Versión Responsiva (RWD): http://localhost:3000/responsive
   * Versión Adaptativa (AWD): http://localhost:3000/adaptive
   * Vista para tablet: http://localhost:3000/tablet

La ruta adaptativa detecta dispositivos móviles, tabletas y escritorio para servir
la vista correspondiente.