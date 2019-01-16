export const FORMATEANDOTIEMPO = tiempoSeg => {
  const minutos = parseInt(tiempoSeg / 60, 10);
  const segundos = parseInt(tiempoSeg % 60, 10);

  return `${leftPad( minutos.toString() )} : ${leftPad( segundos.toString() )}`;
}

const leftPad = numero => {
  const pad = '00';
  return pad.substring(0, pad.length - numero.length) + numero;
}

export const FULLSCREEN = {
  // --- Preguntar si el SullScreen esta activado
  isFullScreen: () => {
      console.log(document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen)
      return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen
  },

  // --- solicitar FullScreen al navegador para el elemento dado
  requestFullScreen: element => {
      try { element.requestFullscreen() } catch (e) {
          try { element.webkitRequestFullscreen() } catch (e) {
              try { element.mozRequestFullScreen() } catch (e) {
                  try { element.msRequestFullscreen() } catch (e) {
                      console.log(e)
                  }
              }
          }
      }
  },

  // --- salir del FullScreen
   exitFullScreen: () => {
      try { document.exitFullscreen() } catch (e) {
          try { document.webkitExitFullscreen() } catch (e) {
              try { document.mozCancelFullScreen() } catch (e) {
                  try { document.msExitFullscreen() } catch (e) {
                      console.log(e)
                  }
              }
          }
      }
  }
}