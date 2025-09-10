# proyecto Bit Frontend by jonathan viracachá

Frontend del proyecto **Bit**, desarrollado con Angular, que permite la gestión y visualización de clientes y registros financieros, consumiendo la API del backend.

## 🚀 Tecnologías
- Angular 17
- TypeScript
- RxJS
- Angular CLI
- CSS

## 📂 Estructura del proyecto
```
src/
 ├── app/                # Módulo principal
 │   ├── components/     # Componentes reutilizables
 │   ├── pages/          # Páginas principales (views)
 │   ├── services/       # Servicios para consumo de API
 │   ├── shared/         # Elementos compartidos
 │   ├── app.config.ts   # Configuración de rutas/endpoints
 │   ├── app.routes.ts   # Definición de rutas Angular
 │   └── app.ts          # Módulo principal
 ├── assets/             # Recursos estáticos
 ├── index.html          # HTML principal
 └── styles.css          # Estilos globales
```

## ⚙️ Instalación
Clona el repositorio:
```bash
git clone https://github.com/Jviracacha/bit-frontend.git
cd bit-frontend
```

Instala dependencias:
```bash
npm install
```

## ▶️ Ejecución
En modo desarrollo:
```bash
ng serve -o
```

Esto abrirá automáticamente la app en:
```
http://localhost:4200
```

## 🔗 Conexión con el Backend
En el archivo `src/app/services/app.config.ts` configura la URL base de la API:
```ts
export const API_URL = 'http://localhost:4000/api';
```

De esta forma, el frontend se conecta al backend (`bit-backend`).

## 📡 Funcionalidades principales
- 📋 Listar clientes desde la API  
- ➕ Crear nuevos clientes  
- 📊 Listar registros de movimientos  
- ➕ Registrar nuevos movimientos  
