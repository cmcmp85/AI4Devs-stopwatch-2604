### 1 Gemini

NO ejecutes el plan ni modificaciones en los ficheros. Tu objetivo es generar el prompt necesario para describir la implementación a realizar.

La base del prompt es la siguiente (detalla según sea necesario pero no te salgas del caso de uso inicial descrito en el README.md)

---

**Titulo:** Cronómetro y cuenta atras

**Como** usuario de la web 
**Quiero**  que al presionar el boton Start inicie un contador(tiempo) que se muestre en pantalla, el boton cambiara su testo a "Pause" al iniciar el contador, cuando se pulse este nuevo boton "Clear" se parará el contador y se convertirá en el boton "Continue" que al pulsarlo continuará el contador por donde se habia quedado. Si se presiona el boton "Clear" se reiniciará el contador poniendolo a 00:00:00 y el boton de continue o "Pause" volverá a ser "Start"

**Criterios de aceptación**
- La apariencia de la web TIENE que coincidir con la muestra que se establece en la imagen `.\res\stopwhatch.png`

---

Si hay puntos que no estén claros preguntame. Ignora los casos de uso que NO están descritos en el README.md. y no he especificado en esta descripcion

### 2 GPT
Actúa como un Desarrollador Front-end experto con buen ojo para el diseño UI/UX.

Tarea:
Crea un cronómetro funcional utilizando HTML, CSS y JavaScript dividido en tres archivos (index.html, style.css, script.js). El diseño debe ser una réplica exacta de la imagen adjunta (stopwatch.png).

Requisitos Visuales (Referencia: stopwatch.png):

Display: Un contenedor principal con bordes muy redondeados y un borde oscuro. El fondo del display debe ser de un tono gris muy claro o azulado pálido.

Tipografía: Los dígitos deben ser grandes y de color negro. El formato es HH:MM:SS. Debajo de los segundos, en la esquina inferior derecha del display, deben aparecer los milisegundos (000) en un tamaño de fuente más pequeño.

Botones: * Dos botones grandes con bordes redondeados.

Botón de acción (Izquierda): Color verde con degradado sutil y texto en negro.

Botón de reinicio (Derecha): Color rojo con degradado sutil y texto en negro.

Lógica de Funcionamiento:

Estado Inicial: Se muestra "00:00:00" (milisegundos en "000"). El botón izquierdo dice "Start" y el derecho "Clear".

Al pulsar "Start": El cronómetro comienza a contar. El texto del botón cambia a "Pause".

Al pulsar "Pause": El tiempo se detiene. El texto del botón cambia a "Continue".

Al pulsar "Continue": El tiempo se reanuda desde donde se detuvo. El texto vuelve a ser "Pause".

Al pulsar "Clear": En cualquier momento, el tiempo se detiene y vuelve a "00:00:00" con milisegundos en "000". El botón izquierdo vuelve a mostrar el texto "Start".

Restricciones Técnicas:

Proporciona el código en tres bloques independientes: HTML, CSS y JavaScript.

El código debe ser limpio, comentado y fácil de entender.

Asegúrate de que el diseño sea responsivo y esté centrado en la pantalla.