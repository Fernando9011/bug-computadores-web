/* ============================================
   FUNCIÓN: Obtener ubicación automática (Ciudad y País)
   Usa una API gratuita que detecta tu IP
   ============================================ */
async function obtenerUbicacion() {
  // 'async' permite usar 'await' para esperar respuestas de internet
  
  try {
    // Intenta ejecutar este código. Si falla, va al 'catch'
    
    const respuesta = await fetch('https://ipapi.co');
    // 'fetch' hace una petición HTTP a la API
    // 'await' espera a que llegue la respuesta (puede tardar)
    
    const datos = await respuesta.json();
    // Convierte la respuesta a formato JSON (objeto JavaScript)
    // JSON es como un diccionario: {city: "Popayán", country_name: "Colombia", ...}
    
    document.getElementById('ubicacion').innerText = 
      `${datos.city}, ${datos.country_name}`.toUpperCase();
    // Busca el elemento con id="ubicacion" en el HTML
    // .innerText cambia el texto visible
    // Template literal: ${variable} inserta valores
    // .toUpperCase() convierte todo a MAYÚSCULAS
    
  } catch (error) {
    // Si algo falla (sin internet, API caída, etc.), ejecuta esto:
    
    document.getElementById('ubicacion').innerText = "UBICACIÓN NO DISPONIBLE";
    // Muestra mensaje de error en lugar de dejarlo vacío
  }
}

/* ============================================
   FUNCIÓN: Actualizar reloj en tiempo real
   ============================================ */
function actualizarReloj() {
  const ahora = new Date();
  // Crea un objeto Date con la fecha y hora actual del sistema
  
  let horas = ahora.getHours();
  // Obtiene la hora (0-23)
  
  let minutos = ahora.getMinutes();
  // Obtiene los minutos (0-59)
  
  let segundos = ahora.getSeconds();
  // Obtiene los segundos (0-59)
  
  // ==========================================
  // FORMATO: Agrega '0' inicial si es menor a 10
  // Ejemplo: 9 → "09", 15 → "15"
  // ==========================================
  horas = horas < 10 ? '0' + horas : horas;
  // Operador ternario: condición ? valor_si_verdad : valor_si_falso
  
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  
  // ==========================================
  // Construye el string final: "HH:MM:SS"
  // ==========================================
  const horaActual = `${horas}:${minutos}:${segundos}`;
  // Template literal: combina variables con texto
  
  document.getElementById('reloj').innerText = horaActual;
  // Actualiza el elemento con id="reloj" en el HTML
}

/* ============================================
   EJECUCIÓN AUTOMÁTICA
   ============================================ */
setInterval(actualizarReloj, 1000);
// Ejecuta 'actualizarReloj' cada 1000 milisegundos (1 segundo)
// Esto hace que el reloj se actualice constantemente

actualizarReloj();
// Llama a la función INMEDIATAMENTE al cargar la página
// (si no, tendrías que esperar 1 segundo para ver la hora)

obtenerUbicacion();
// Llama a la función de ubicación UNA SOLA VEZ al cargar
// (no necesita actualizarse constantemente)