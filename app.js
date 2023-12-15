Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#your-scanner-element'), // Agrega un elemento HTML para mostrar la vista previa de la cámara
    },
    decoder: {
      readers: ["pdf417_reader"], // Utiliza el lector de PDF417
    },
  }, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    Quagga.start();
  });
  
  Quagga.onDetected(function(result) {
    console.log(result.codeResult.code); // Aquí puedes procesar los datos del código PDF417
  });
  