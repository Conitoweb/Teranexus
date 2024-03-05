document.addEventListener('DOMContentLoaded', function () {
    var cardList = document.querySelector('.card-list');

    cardList.addEventListener('click', function (event) {
        var pregunta = event.target.closest('li[data-pregunta]');
        if (pregunta) {
            var numeroPregunta = pregunta.getAttribute('data-pregunta');
            mostrarRespuesta(numeroPregunta);
        }
    });
});

function mostrarRespuesta(numero) {
    var respuestas = document.querySelectorAll('.respuesta-container');
    respuestas.forEach(function (respuesta) {
        respuesta.style.opacity = '0'; 
        respuesta.style.display = 'none';
        respuesta.style.margin = '10px'; 
        
    });

    var respuestaContainer = document.querySelector('.respuesta-container[data-respuesta="' + numero + '"]');
    
    switch (numero) {
        case '1':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, conLorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consectesectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '2':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '3':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '4':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '5':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '6':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '7':
            respuestaContainer.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        case '8':
            respuestaContainer.innerHTML = '<p>puto el que lea jajajLorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur, urna nec fermentum interdum, ligula mauris dictum nunc, ac tincidunt.</p>';
            break;
        default:
            respuestaContainer.innerHTML = '<h3>Pregunta no reconocida</h3>';
    }

    setTimeout(function() {
        respuestaContainer.style.opacity = '1';
        respuestaContainer.style.display = 'block';
    }, 100);
}
