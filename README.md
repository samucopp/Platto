# Platto

Este proyecto es una aplicación web diseñada para la gestión eficiente de un restaurante, permitiendo la administración de mesas, trabajadores, productos, categorías de productos y el histórico de comandas. Está pensada para ser utilizada en tabletas, facilitando a los camareros la toma y gestión de las comandas directamente desde la página principal de la aplicación.

## Características Principales

- **Gestión de Trabajadores**: Permite gestionar los trabajadores del restaurante con roles específicos (Admin, Camarero, Cocinero), cada uno con diferentes niveles de acceso.
  - **Admin**: Acceso total, incluyendo la gestión de usuarios y el acceso al histórico de comandas.
  - **Camarero**: Acceso para crear, modificar y eliminar comandas, además de gestionar mesas.
  - **Cocinero**: Acceso para gestionar productos y categorías de productos.

- **Gestión de Mesas**: Los camareros pueden asignar mesas a los clientes y actualizar su estado en tiempo real.

- **Gestión de Productos y Categorías**: Los cocineros pueden gestionar el menú, añadiendo, eliminando o modificando productos y categorías de productos.

- **Comandas**: Los camareros pueden crear nuevas comandas y asignarlas a las mesas. Además, pueden añadir o eliminar productos de las comandas existentes.

- **Histórico de Comandas**: Una vez cerrada una comanda, se guarda en un histórico accesible para los administradores y gerentes, facilitando el análisis de ventas y el control de la actividad del restaurante.

## Tecnologías

Este proyecto está construido con **React** para la interfaz de usuario y **Platto** como la API de backend para gestionar los aspectos clave del restaurante.

### Backend (Platto)

La API backend llamada **Platto** gestiona los siguientes aspectos:

- **Gestión de Trabajadores**: Con roles y permisos específicos para cada tipo de trabajador.
- **Gestión de Mesas**: Los camareros pueden asignar y actualizar mesas.
- **Gestión de Productos y Categorías**: Los cocineros gestionan el menú.
- **Comandas**: Los camareros gestionan las comandas en tiempo real.
- **Histórico de Comandas**: Se almacenan las comandas cerradas para su posterior análisis.
- **Autenticación Segura**: Mediante JWT y protección de contraseñas con bcrypt.

Para usar esta aplicación, es necesario descargar la API de **Platto** desde el siguiente enlace:  
[Platto-API](https://github.com/samucopp/Platto-API)

## Instalación

### Prerrequisitos

- Tener **Node.js** y **npm** instalados en tu máquina.
- La API de **Platto** debe estar corriendo en el backend.

### Pasos de Instalación

1. Clona el repositorio de este proyecto.
   ```bash
   git clone https://github.com/samucopp/Platto.git
   ```

2. Entra en la carpeta del proyecto.
   ```bash
   cd Platto
   ```

3. Instala las dependencias del proyecto.
   ```bash
   npm install
   ```

4. Inicia el proyecto.
   ```bash
   npm run dev
   ```

La aplicación debería estar disponible en tu navegador en http://localhost:5173

## Contribuciones

Si tienes alguna sugerencia para mejorar la aplicación o encuentras un bug, no dudes en abrir un issue en el repositorio de GitHub.