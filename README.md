# Catálogo de Autos (PostgreSQL) y Charlas (MongoDB)

Este es un proyecto Full-Stack desarrollado con **Node.js, Express y EJS** que se conecta a dos bases de datos simultáneamente:
1. **PostgreSQL** (para la gestión y catálogo de autos con filtros).
2. **MongoDB Atlas** (para el listado de charlas en un auditorio).

## 🚀 Requisitos Previos

Antes de ejecutar este proyecto en tu PC, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/es/) (Versión 18 o superior).
- [PostgreSQL](https://www.postgresql.org/download/) instalado y corriendo localmente.
- Una cuenta y clúster activo en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio e instalar dependencias
Abre la terminal en la carpeta donde deseas guardar el proyecto y ejecuta:
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd Lab2_Web
npm install
```

### 2. Configurar las Variables de Entorno
1. Crea un archivo llamado `.env` en la raíz del proyecto.
2. Copia el contenido del archivo `.env.example` y pégalo en tu nuevo archivo `.env`.
3. Rellena los valores reales de tus credenciales (Tu contraseña de Postgres, y tu URI de MongoDB Atlas).

### 3. Configurar PostgreSQL (Autos)
Para que el catálogo de autos funcione, debes crear la base de datos y sus tablas:
1. Abre pgAdmin o psql.
2. Crea una base de datos con el nombre que colocaste en `PG_DATABASE` (ej. `Autos`).
3. Ejecuta los scripts SQL correspondientes para crear las tablas `categorias`, `proveedores` y `autos`, e insertar la información. *(Asegúrate de haber guardado tu script SQL de creación)*.

### 4. Configurar MongoDB (Charlas)
La base de datos en la nube está vacía por defecto. Para llenarla automáticamente con la información inicial de las charlas, ejecuta el siguiente script:
```bash
node seed.js
```
*Si ves el mensaje "Datos de las charlas inyectados con éxito", todo salió bien.*

### 5. Iniciar el Servidor
Finalmente, levanta el proyecto ejecutando:
```bash
node index.js
```
Abre tu navegador y entra a **[http://localhost:3000](http://localhost:3000)** para interactuar con el sistema.

