# Backend para TechNova Solutions | G11 | TP3

## Descripción

### TechNova Solutions

Proyecto de Front-End + Back-End para la empresa ficticia TechNova Solutions.
El proyecto consiste en la unión del trabajo práctico N°1 (Front-End) con el trabajo práctico N°3 (actual) (Back-End), utilizando [Render]:https://render.com para hostearlo de manera pública.

El enlace al deploy se encuentra a continuación:
https://g11-tp3-technovasolutions.onrender.com

## Grupo 11

### Integrantes

- Matías Carrizo
- Jeremías Claros
- María Rodríguez
- Matko Scabusso

### Metodología de Git

- Rama `main`: Versión final del Back-End.
- Rama `dev`: Rama donde juntamos todos los cambios hechos en cada rama personal.
- Rama `Jeremias`: Espacio de trabajo de Jeremías Claros.
- Rama `maria`: Espacio de trabajo de María Rodríguez.
- Rama `matias`: Espacio de trabajo de Matías Carrizo.
- Rama `matko`: Espacio de trabajo de Matko Scabusso.

### División del trabajo

Matías: Página login/perfil, unión del Back-End con el Front-End y deploy de Front-End en GitHub Pages.
Jeremías: Front-End.
María: API de equipos.
Matko: API de servicios y deploy del Back-End en Render.

## Tecnologías utilizadas

- Front-End:
  - HTML5
  - CSS3
  - JavaScript

- Back-End
  - JavaScript
  - JSON
  - Node.js + npm
    Módulos:
    - Express
    - Nodemon
    - Eslint
    - Cors
    - dotenv

## Distribución del repositorio

```
G11-TP3-TechNovaSolutions/
├── assets/
│   └── icon/
│       ├── ariana.jpeg
│       ├── jeremias.jpeg
│       ├── matias.jpeg
│       └── matko.jpeg
├── controllers/
│   ├── equiposController.js
│   └── servicesController.js
├── data/
│   ├── equipos.json
│   └── services.json
├── models/
│   └── server.js
├── routes/
│   ├── equiposRoutes.js
│   └── serviceRoutes.js
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Funciones

### `/controllers`

#### `equiposController.js`

##### `getEquipos`

Esta función convierte al archivo `equipos.json` de un string de texto a un conjunto de objetos para poder utilizar su contenido en la página de equipo de la empresa.

#### `servicesController.js`

##### `getServices`

Esta función cumple la misma función que `getEquipos`, con la diferencia de que este se encarga de convertir a objetos los servicios de `services.json` y devuelve _todos_ los servicios disponibles.

##### `getServiceById`

Esta función muestra únicamente el servicio deseado mediante su selección por su ID, si el ID introducido no coincide con ningún servicio, devolverá un error de página no encontrada.

##### `getSubserviceById`

Esta función muestra los servicios secundarios incluidos dentro de un servicio principal. Se usa principalmente para elegir detalles de los servicios deseados y funciona de manera similar a `getServiceById`, insertando primero el ID del servicio principal, y luego el ID del subservicio. Si no existe un subservicio con dicho ID, se devolverá un error `404 - Page Not Found`.

### `/routes`

Acá se encuentran los archivos que contienen las rutas con las que se accede a la información de la carpeta `/data` utilizando los controladores como middleware.

`equiposRoutes.js` contiene la ruta para mostrar los datos del equipo de la empresa, mientras que `servicesRoutes.js` contiene las rutas para mostrar los diferentes servicios y subservicios que ofrece la empresa.

### `app.js`

Este es el archivo principal, encargado de configurar la aplicación Express,
registrando middlewares y rutas para manejar las peticiones HTTP.

### `/models/server.js`

Este archivo es el encargado de levantar y lanzar el servidor, y el que permite recibir peticiones.

## Estructura de objetos JSON

`services.json`:

```
{
  "id": 1,
  "nombre": "Desarrollo de software",
  "descripcionCorta": "Creación de aplicaciones a medida según sus necesidades.",
  "descripcionLarga": "Creamos soluciones de software personalizadas para su negocio o necesidades, desde aplicaciones web como plataformas e-commerce, hasta aplicaciones de escritorio o apps móviles para conectar con sus usuarios y clientes. Nuestro equipo de expertos en desarrollo de software trabaja con las últimas tecnologías para garantizar que su proyecto sea innovador, eficiente y escalable.",
  "subservicios": [
    {
      "id": 1,
      "nombre": "Aplicaciones web",
      "descripcionCorta": "Desarrollo de aplicaciones web personalizadas.",
      "descripcionLarga": "Desarrollo de aplicaciones web que se ajustan a sus necesidades, cubriendo todo el proceso, desde el diseño de la interfaz de usuario hasta la implementación de funcionalidades avanzadas. Utilizamos tecnologías modernas para crear aplicaciones web rápidas, seguras y intuitivas.",
      "precio": 1000,
      "duracion": "30 días",
      "contiene": ["Frontend", "Backend", "APIs", "Bases de datos"]
    }
  ]
}
```

`equipos.json`:

```
{
  "id": 1,
  "nombre": "Ariana",
  "rol": "Backend Developer",
  "foto": "/assets/icon/ariana.jpeg",
  "descripcion": "Especialista en desarrollo y soluciones tecnológicas."
}
```
