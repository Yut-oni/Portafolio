function abrirGmailOcopiar() {
    const email = "www.hospitaldechancay.gob.pe";
    const asunto = encodeURIComponent("Validación de Constancia Laboral - Jean Mario Paredes");
    const cuerpo = encodeURIComponent("Estimados, solicito la confirmación de veracidad de la Constancia de Prácticas del estudiante Jean Mario Paredes Lazaro.");
    
    // 1. Intentar abrir Gmail Web directamente en una pestaña nueva
    // Esto funciona aunque tengas mil perfiles, te pedirá elegir uno o usará el actual.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${asunto}&body=${cuerpo}`;
    window.open(gmailUrl, '_blank');

    // 2. Por si acaso el navegador bloquea la ventana emergente, 
    // también copiamos los datos al portapapeles como respaldo.
    const textoParaCopiar = `Destinatario: mariojean117@gmail.com\nAsunto: Validación de Constancia Laboral\n\nMensaje: Estimados, solicito la confirmación de veracidad de la Constancia de Prácticas...`;
    
    navigator.clipboard.writeText(textoParaCopiar);
    
    const alerta = document.getElementById('alertaCopiadoInst');
    if(alerta) {
        alerta.style.display = 'block';
        setTimeout(() => { alerta.style.display = 'none'; }, 4000);
    }
}