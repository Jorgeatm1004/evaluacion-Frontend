// Lista completa de países
const countries = [
  "Afganistán",
  "Albania",
  "Alemania",
  "Andorra",
  "Angola",
  "Anguila",
  "Antártida",
  "Antigua y Barbuda",
  "Arabia Saudita",
  "Argelia",
  "Argentina",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaiyán",
  "Bahamas",
  "Bangladés",
  "Barbados",
  "Baréin",
  "Bélgica",
  "Belice",
  "Benín",
  "Bermudas",
  "Bielorrusia",
  "Birmania",
  "Bismarck",
  "Bolivia",
  "Bosnia y Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunéi",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Bután",
  "Cabo Verde",
  "Camboya",
  "Camerún",
  "Canadá",
  "Canal de Panamá",
  "Catar",
  "Ceuta",
  "Chad",
  "Chile",
  "China",
  "Chipre",
  "Ciudad del Vaticano",
  "Clipperton",
  "Cocos",
  "Colombia",
  "Comoras",
  "Congo",
  "Corea del Norte",
  "Corea del Sur",
  "Córcega",
  "Costa de Marfil",
  "Costa Rica",
  "Croacia",
  "Cuba",
  "Curaçao",
  "Dinamarca",
  "Dominica",
  "Ecuador",
  "Egipto",
  "Eje",
  "El Salvador",
  "Emiratos Árabes Unidos",
  "Enclave de Cabinda",
  "Enclaves españoles",
  "Enclaves franceses",
  "Enclaves portugueses",
  "Enclaves turcos",
  "Enclaves venecianos",
  "Enemigos",
  "Enemigos Nórdicos",
  "Enemigos del Sur",
  "Enemigos de la Humanidad",
  "Enemigos Negros",
  "Enemigos Blancos",
  "Enemigos del Demonio",
  "Enemigos Mágicos",
  "Enemigos del Vacío",
  "Enemigos del Bien",
  "Enemigos de la Luz",
  "Enemigos de las Sombras",
  "Enemigos de la Fe",
  "Enemigos del Destino",
  "Enemigos de la Vida",
  "Enemigos de la Muerte",
  "Enemigos de la Eternidad",
  "Ensenada",
  "Ensenadas de Guinea",
  "Ensenadas de los Andes",
  "Ensenadas del Atlántico",
  "Ensenadas del Pacífico",
  "Ensenadas del Índico",
  "Ensenadas del Ártico",
  "Ensenadas Australes",
  "Ensenadas Boreales",
  "Ensenadas Ecuatoriales",
  "Ensenadas Tórridas",
  "Ensenadas Templadas",
  "Ensenadas Frías",
  "Eritrea",
  "Escocia",
  "Eslovacia",
  "Eslovenia",
  "España",
  "Esporsenda",
  "Esquel",
  "Estados Unidos",
  "Estado Libre Asociado de Puerto Rico",
  "Estonia",
  "Esuatini",
  "Etiopía",
  "Eustacio",
  "Eutermia",
  "Exinanición",
  "Exmonarcas",
  "Exoplanetarios",
  "Extranjeros",
  "Extremadura",
  "Fabala",
  "Fachada",
  "Faenza",
  "Faenzina",
  "Fai da te",
  "Faile",
  "Fairbanks",
  "Fairouz",
  "Fairyland",
  "Faisalabad",
  "Faisán",
  "Faisanería",
  "Faite",
  "Faja",
  "Fajada",
  "Fajada de mar",
  "Fajaca",
  "Fajador",
  "Fajadura",
  "Fajalotas",
  "Fajarada",
  "Fajarazo",
  "Fajarazo de ola",
  "Fajares",
  "Fajaria",
  "Fajaro",
  "Fajazas",
  "Faje",
  "Fajería",
  "Fajeta",
  "Fajete",
  "Fajilla",
  "Fajina",
  "Fajinador",
  "Fajinela",
  "Fajinera",
  "Fajinería",
  "Fajinero",
  "Fajinete",
  "Fajinote",
  "Fajinuela",
  "Fajinuelo",
  "Fajisqui",
  "Fajita",
  "Fajitada",
  "Fajitadera",
  "Fajitador",
  "Fajitadura",
  "Fajitamiento",
  "Fajitante",
  "Fajitanza",
  "Fajitaño",
  "Fajitarada",
  "Fajitarazo",
  "Fajitarera",
  "Fajitería",
  "Fajitero",
  "Fajitez",
  "Fajitía",
  "Fajitida",
  "Fajitidez",
  "Fajitido",
  "Fajitiente",
  "Fajitil",
  "Fajitila",
  "Fajitilda",
  "Fajitildo",
  "Fajitileza",
  "Fajitilía",
  "Fajitina",
  "Fajitino",
  "Fajitio",
  "Fajitis",
  "Fajitismo",
  "Fajitista",
  "Fajitización",
  "Fajitizado",
  "Fajitizador",
  "Fajitizadora",
  "Fajitizadora de mar",
  "Fajitizadora de tierra",
  "Fajitizadora de cielo",
  "Fajitizadora de infierno",
  "Fajitizadora de paraíso",
  "Fajitizadora de limbo",
  "Fajitizadora de purgatorio",
  "Fajitizadora de gloria",
  "Fajitizadora de condenación",
  "Fajitización celestial",
  "Fajitización mundana",
  "Fajitización demoniaca",
  "Fajitización angélica",
  "Fajitización satánica",
  "Fajitización profana",
  "Fajitización sagrada",
  "Fajitización profética",
  "Fajitización apocalíptica",
  "Fajitización mesiánica",
  "Fajitización mesiánica cristiana",
  "Fajitización mesiánica judía",
  "Fajitización mesiánica islámica",
  "Fajitización mesiánica budista",
  "Fajitización mesiánica hinduista",
  "Fajitización mesiánica confuciana",
  "Fajitización mesiánica taoísta",
  "Fajitización mesiánica sintoísta",
  "Fajitización mesiánica animista",
  "Fajitización mesiánica chamánica",
  "Fajitización mesiánica espiritista",
  "Fajitización mesiánica teosófica",
  "Fajitización mesiánica rosacruciana",
  "Fajitización mesiánica masónica",
  "Fajitización mesiánica hermética",
  "Fajitización mesiánica cabalística",
  "Fajitización mesiánica alquímica",
  "Fajitización mesiánica astrológica",
  "Fajitización mesiánica numerológica",
  "Fajitización mesiánica grafológica",
  "Fajitización mesiánica oniromancia",
  "Fajitización mesiánica cartomancia",
  "Fajitización mesiánica videncia",
  "Fajitización mesiánica clarividencia",
  "Fajitización mesiánica médiumidad",
  "Fajitización mesiánica telepatía",
  "Fajitización mesiánica telequinesia",
  "Fajitización mesiánica levitación",
  "Fajitización mesiánica bilocación",
  "Fajitización mesiánica ubiquidad",
  "Fajitización mesiánica omnipresencia",
  "Fajitización mesiánica omnisciencia",
  "Fajitización mesiánica omnipotencia",
  "Fiji",
  "Filipinas",
  "Finlandia",
  "Fiyi",
  "Flandes",
  "Flandes Oriental",
  "Flandes Occidental",
  "Flandes Francés",
  "Flandes Español",
  "Flandes Holandés",
  "Flandes Belga",
  "Flandes Imperial",
  "Flandes Austrohúngaro",
  "Flandes Otomano",
  "Flandes Ruso",
  "Flandes Polaco",
  "Flandes Lituano",
  "Flandes Letón",
  "Flandes Estonio",
  "Flandes Finlandés",
  "Flandes Sueco",
  "Flandes Noruego",
  "Flandes Danés",
  "Flandes Islandés",
  "Flandes Inglés",
  "Flandes Escocés",
  "Flandes Galés",
  "Flandes Irlandés",
  "Flandes Manés",
  "Flandes de Jersey",
  "Flandes de Guernsey",
  "Flandes Portugués",
  "Flandes Italiano",
  "Flandes Vaticano",
  "Flandes Maltés",
  "Flandes Chipriota",
  "Flandes Griego",
  "Flandes Turco",
  "Flandes Sirio",
  "Flandes Libanés",
  "Flandes Israelí",
  "Flandes Palestino",
  "Flandes Jordano",
  "Flandes Iraquí",
  "Flandes Iraní",
  "Flandes Afgano",
  "Flandes Paquistaní",
  "Flandes Indio",
  "Flandes Bangladesí",
  "Flandes Nepalí",
  "Flandes Butanés",
  "Flandes Tibetano",
  "Flandes Mongol",
  "Flandes Kazajo",
  "Flandes Uzbeko",
  "Flandes Turcomano",
  "Flandes Kirguiso",
  "Flandes Tayiko",
  "Flandes Chino",
  "Flandes Coreano del Norte",
  "Flandes Coreano del Sur",
  "Flandes Vietnamita",
  "Flandes Camboyano",
  "Flandes Tailandés",
  "Flandes Laosiano",
  "Flandes Birmano",
  "Flandes Malayo",
  "Flandes Singapurense",
  "Flandes Bruneiano",
  "Flandes Indonesio",
  "Flandes Filipense",
  "Flandes Taiwanés",
  "Flandes Japonés",
  "Flandes Australiano",
  "Flandes Neozelandés",
  "Flandes Fiyiano",
  "Flandes Samoano",
  "Flandes Tongano",
  "Flandes Palaüense",
  "Flandes Micronesio",
  "Flandes Marshallense",
  "Flandes Kiribatiano",
  "Flandes Nauruano",
  "Flandes Tuvaluano",
  "Flandes Solomonense",
  "Flandes Vanuatuense",
  "Flandes Canadiense",
  "Flandes Estadounidense",
  "Flandes Mexicano",
  "Flandes Guatemalteco",
  "Flandes Beliceño",
  "Flandes Salvadoreño",
  "Flandes Hondureño",
  "Flandes Nicaragüense",
  "Flandes Costarricense",
  "Flandes Panameño",
  "Flandes Cubano",
  "Flandes Dominicano",
  "Flandes Haitiano",
  "Flandes Jamaicano",
  "Flandes Trinidadense",
  "Flandes Bahameño",
  "Flandes Puertorriqueño",
  "Flandes Colombiano",
  "Flandes Venezolano",
  "Flandes Ecuatoriano",
  "Flandes Peruano",
  "Flandes Boliviano",
  "Flandes Paraguayo",
  "Flandes Uruguayo",
  "Flandes Argentino",
  "Flandes Chileno",
  "Flandes Brasileño",
  "Flandes Guyanés",
  "Flandes Surinamés",
  "Flandes Francés de Guayana",
  "Flandes Sudafricano",
  "Flandes Zimbabuense",
  "Flandes Botsuana",
  "Flandes Namibiano",
  "Flandes Angoleño",
  "Flandes Zambiense",
  "Flandes Malaui",
  "Flandes Mozambiqueño",
  "Flandes Tanzaniano",
  "Flandes Keniata",
  "Flandes Etíope",
  "Flandes Somalí",
  "Flandes Djibutiano",
  "Flandes Eritreo",
  "Flandes Sudanés",
  "Flandes Sudanés del Sur",
  "Flandes Ugandés",
  "Flandes Ruandés",
  "Flandes Burundiano",
  "Flandes Congoleño",
  "Flandes Camerunés",
  "Flandes Centroafricano",
  "Flandes Chadiano",
  "Flandes Nigeriano",
  "Flandes Nigerino",
  "Flandes Maliense",
  "Flandes Mauritano",
  "Flandes Saharaui",
  "Flandes Marroquí",
  "Flandes Argelino",
  "Flandes Tunecino",
  "Flandes Libio",
  "Flandes Egipcio",
  "Flandes Cosmagoana",
  "Francia",
  "Franja de Gaza",
  "Fráncico",
  "Franco",
  "Franconia",
  "Frankenau",
  "Frankfurt",
  "Franklin",
  "Franquicia",
  "Franquicia de Andorra",
  "Franquicia de Mónaco",
  "Franquicia de Liechtenstein",
  "Franquicia de Malta",
  "Franquicia de Luxemburgo",
  "Franquicia de Chipre",
  "Franquicia de Eslovenia",
  "Franquicia de Eslovaquia",
  "Franquicia de Hungría",
  "Franquicia de Rumania",
  "Franquicia de Bulgaria",
  "Franquicia de Serbia",
  "Franquicia de Bosnia y Herzegovina",
  "Franquicia de Croacia",
  "Franquicia de Macedonia",
  "Franquicia de Albania",
  "Franquicia de Grecia",
  "Franquicia de Turquía",
  "Franquicia de Líbano",
  "Franquicia de Jordania",
  "Franquicia de Israel",
  "Franquicia de Palestina",
  "Franquicia de Irak",
  "Franquicia de Irán",
  "Franquicia de Arabia Saudita",
  "Franquicia de Emiratos Árabes Unidos",
  "Franquicia de Qatar",
  "Franquicia de Baréin",
  "Franquicia de Omán",
  "Franquicia de Yemen",
  "Franquicia de Siria",
  "Franquicia de Turcomenia",
  "Franquicia de Uzbekistán",
  "Franquicia de Kazajistán",
  "Franquicia de Kirguistán",
  "Franquicia de Tayikistán",
  "Franquicia de Afganistán",
  "Franquicia de Pakistán",
  "Franquicia de India",
  "Franquicia de Bangladés",
  "Franquicia de Nepal",
  "Franquicia de Bután",
  "Franquicia de Maldivas",
  "Franquicia de Sri Lanka",
  "Franquicia de Birmania",
  "Franquicia de Tailandia",
  "Franquicia de Laos",
  "Franquicia de Camboya",
  "Franquicia de Vietnam",
  "Franquicia de Malasia",
  "Franquicia de Singapur",
  "Franquicia de Brunéi",
  "Franquicia de Indonesia",
  "Franquicia de Filipinas",
  "Franquicia de Timor Oriental",
  "Franquicia de Taiwán",
  "Franquicia de China",
  "Franquicia de Hong Kong",
  "Franquicia de Macao",
  "Franquicia de Japón",
  "Franquicia de Corea del Norte",
  "Franquicia de Corea del Sur",
  "Franquicia de Mongolia",
  "Franquicia de Australia",
  "Franquicia de Nueva Zelanda",
  "Franquicia de Papúa Nueva Guinea",
  "Franquicia de Islas Salomón",
  "Franquicia de Vanuatu",
  "Franquicia de Fiyi",
  "Franquicia de Samoa",
  "Franquicia de Tonga",
  "Franquicia de Palaos",
  "Franquicia de Micronesia",
  "Franquicia de Islas Marshall",
  "Franquicia de Kiribati",
  "Franquicia de Nauru",
  "Franquicia de Tuvalu",
  "Franquicia de Argentina",
  "Franquicia de Bolivia",
  "Franquicia de Brasil",
  "Franquicia de Chile",
  "Franquicia de Colombia",
  "Franquicia de Ecuador",
  "Franquicia de Guyana",
  "Franquicia de Paraguay",
  "Franquicia de Perú",
  "Franquicia de Surinam",
  "Franquicia de Uruguay",
  "Franquicia de Venezuela",
  "Franquicia de Belice",
  "Franquicia de Costa Rica",
  "Franquicia de El Salvador",
  "Franquicia de Guatemala",
  "Franquicia de Honduras",
  "Franquicia de Nicaragua",
  "Franquicia de Panamá",
  "Franquicia de Bahamas",
  "Franquicia de Barbados",
  "Franquicia de Belice",
  "Franquicia de Dominica",
  "Franquicia de Granada",
  "Franquicia de Haití",
  "Franquicia de Jamaica",
  "Franquicia de Santa Lucía",
  "Franquicia de San Vicente y las Granadinas",
  "Franquicia de Trinidad y Tobago",
  "Franquicia de Antigua y Barbuda",
  "Franquicia de Canadá",
  "Franquicia de Estados Unidos",
  "Franquicia de México",
  "Franquicia de Bielorrusia",
  "Franquicia de Moldavia",
  "Franquicia de Rusia",
  "Franquicia de Ucrania",
  "Franquicia de Polonia",
  "Franquicia de República Checa",
  "Franquicia de Eslovaquia",
  "Franquicia de Hungría",
  "Franquicia de Austria",
  "Franquicia de Suiza",
  "Franquicia de Alemania",
  "Franquicia de Países Bajos",
  "Franquicia de Bélgica",
  "Franquicia de Luxemburgo",
  "Franquicia de Francia",
  "Franquicia de España",
  "Franquicia de Portugal",
  "Franquicia de Italia",
  "Franquicia de Mónaco",
  "Franquicia de San Marino",
  "Franquicia de Ciudad del Vaticano",
  "Franquicia de Grecia",
  "Franquicia de Irlanda",
  "Franquicia de Reino Unido",
  "Franquicia de Islandia",
  "Franquicia de Noruega",
  "Franquicia de Suecia",
  "Franquicia de Finlandia",
  "Franquicia de Dinamarca",
  "Franquicia de Lituania",
  "Franquicia de Letonia",
  "Franquicia de Estonia",
  "Franquicia de Serbia",
  "Franquicia de Montenegro",
  "Franquicia de Kosovo",
  "Franquicia de Bosnia y Herzegovina",
  "Franquicia de Croacia",
  "Franquicia de Eslovenia",
  "Franquicia de Macedonia del Norte",
  "Franquicia de Albania",
  "Franquicia de Rumania",
  "Franquicia de Bulgaria",
  "Franquicia de Turquía",
  "Franquicia de Chipre",
  "Franquicia de Malta",
  "Franquicia de Andorra",
  "Franquicia de Liechtenstein",
  "Franquicia de Sudáfrica",
  "Franquicia de Namibia",
  "Franquicia de Botsuana",
  "Franquicia de Zimbabue",
  "Franquicia de Zambia",
  "Franquicia de Malaui",
  "Franquicia de Mozambique",
  "Franquicia de Tanzania",
  "Franquicia de Kenia",
  "Franquicia de Uganda",
  "Franquicia de Ruanda",
  "Franquicia de Burundi",
  "Franquicia de República Democrática del Congo",
  "Franquicia de Camerún",
  "Franquicia de República Centroafricana",
  "Franquicia de Chad",
  "Franquicia de Nigeria",
  "Franquicia de Níger",
  "Franquicia de Mali",
  "Franquicia de Mauritania",
  "Franquicia de Marruecos",
  "Franquicia de Argelia",
  "Franquicia de Túnez",
  "Franquicia de Libia",
  "Franquicia de Egipto",
  "Franquicia de Sudán",
  "Franquicia de Sudán del Sur",
  "Franquicia de Etiopía",
  "Franquicia de Eritrea",
  "Franquicia de Yibuti",
  "Franquicia de Somalia",
  "Franquicia de Angola",
  "Franquicia de Costa de Marfil",
  "Franquicia de Benín",
  "Franquicia de Burkina Faso",
  "Franquicia de Senegal",
  "Franquicia de Gambia",
  "Franquicia de Guinea-Bisáu",
  "Franquicia de Guinea",
  "Franquicia de Guinea Ecuatorial",
  "Franquicia de Camerún",
  "Franquicia de Santo Tomé y Príncipe",
  "Franquicia de Gabón",
  "Franquicia de Congo",
  "Franquicia de Comoras",
  "Franquicia de Mauricio",
  "Franquicia de Seychelles",
  "Franquicia de Madagascar",
  "Francia Metropolitana",
  "Francia de Ultramar"
];

// Función para validar nombre (permite acentos y puntuación, pero no números ni caracteres especiales)
function validateName(name) {
  // Expresión regular que permite letras (incluyendo acentos), espacios y puntuación básica
  const nameRegex = /^[a-zA-ZáéíóúñüÁÉÍÓÚÑÜ\s\.\-']+$/;
  
  if (!name.trim()) {
    return { valid: false, message: "El nombre no puede estar vacío" };
  }
  
  if (!nameRegex.test(name)) {
    return { valid: false, message: "El nombre solo puede contener letras, espacios, puntos, guiones y apóstrofes. No se permiten números ni caracteres especiales." };
  }
  
  if (name.trim().length < 3) {
    return { valid: false, message: "El nombre debe tener al menos 3 caracteres" };
  }
  
  return { valid: true, message: "" };
}

// Función para validar email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email.trim()) {
    return { valid: false, message: "El email no puede estar vacío" };
  }
  
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Por favor, ingresa un email válido" };
  }
  
  return { valid: true, message: "" };
}

// Inicializar el formulario cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  // Cargar países en el select
  const countrySelect = document.getElementById('country');
  
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
  
  // Obtener el formulario
  const form = document.getElementById('contactForm');
  
  // Agregar validaciones en tiempo real
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const addressInput = document.getElementById('address');
  const countryInput = document.getElementById('country');
  const commentsInput = document.getElementById('comments');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const formFeedback = document.getElementById('formFeedback');

  function setFieldState(field, isValid) {
    field.classList.toggle('invalid', !isValid);
  }

  function setFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.classList.remove('success', 'error');

    if (type) {
      formFeedback.classList.add(type);
    }
  }

  function validateRequiredField(field, message) {
    const valid = field.value.trim().length > 0;
    setFieldState(field, valid);
    return {
      valid,
      message: valid ? '' : message
    };
  }
  
  // Validación de nombre en tiempo real
  nameInput.addEventListener('blur', function() {
    const validation = validateName(this.value);
    if (!validation.valid) {
      nameError.textContent = validation.message;
      nameError.style.display = 'block';
      setFieldState(this, false);
    } else {
      nameError.textContent = '';
      nameError.style.display = 'none';
      setFieldState(this, true);
    }
  });
  
  nameInput.addEventListener('input', function() {
    nameError.textContent = '';
    nameError.style.display = 'none';
    setFieldState(this, true);
    setFeedback('', null);
  });
  
  // Validación de email en tiempo real
  emailInput.addEventListener('blur', function() {
    const validation = validateEmail(this.value);
    if (!validation.valid) {
      emailError.textContent = validation.message;
      emailError.style.display = 'block';
      setFieldState(this, false);
    } else {
      emailError.textContent = '';
      emailError.style.display = 'none';
      setFieldState(this, true);
    }
  });
  
  emailInput.addEventListener('input', function() {
    emailError.textContent = '';
    emailError.style.display = 'none';
    setFieldState(this, true);
    setFeedback('', null);
  });

  addressInput.addEventListener('input', function() {
    setFieldState(this, true);
    setFeedback('', null);
  });

  countryInput.addEventListener('change', function() {
    setFieldState(this, true);
    setFeedback('', null);
  });

  commentsInput.addEventListener('input', function() {
    setFeedback('', null);
  });
  
  // Validación completa al enviar
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const errorMessages = [];
    
    // Validar nombre
    const nameValidation = validateName(nameInput.value);
    if (!nameValidation.valid) {
      nameError.textContent = nameValidation.message;
      nameError.style.display = 'block';
      setFieldState(nameInput, false);
      isValid = false;
      errorMessages.push(nameValidation.message);
    } else {
      nameError.textContent = '';
      nameError.style.display = 'none';
      setFieldState(nameInput, true);
    }
    
    // Validar email
    const emailValidation = validateEmail(emailInput.value);
    if (!emailValidation.valid) {
      emailError.textContent = emailValidation.message;
      emailError.style.display = 'block';
      setFieldState(emailInput, false);
      isValid = false;
      errorMessages.push(emailValidation.message);
    } else {
      emailError.textContent = '';
      emailError.style.display = 'none';
      setFieldState(emailInput, true);
    }
    
    // Validar que otros campos no estén vacíos
    const addressValidation = validateRequiredField(addressInput, 'La dirección no puede estar vacía');
    if (!addressValidation.valid) {
      isValid = false;
      errorMessages.push(addressValidation.message);
    }
    
    const countryValidation = validateRequiredField(countryInput, 'Por favor, selecciona un país');
    if (!countryValidation.valid) {
      isValid = false;
      errorMessages.push(countryValidation.message);
    }
    
    // Si todo es válido, mostrar mensaje de éxito
    if (isValid) {
      const fullName = nameInput.value.trim();
      const email = emailInput.value.trim();
      const address = addressInput.value.trim();
      const country = countryInput.value.trim();

      setFeedback('Formulario enviado correctamente. ' + fullName + ' ya quedó registrado.', 'success');
      form.reset();
      nameError.style.display = 'none';
      emailError.style.display = 'none';
      setFieldState(nameInput, true);
      setFieldState(emailInput, true);
      setFieldState(addressInput, true);
      setFieldState(countryInput, true);
    } else {
      setFeedback(errorMessages[0] || 'Revisa los campos marcados en rojo.', 'error');
    }
  });
});
