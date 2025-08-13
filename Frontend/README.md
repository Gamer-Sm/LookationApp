# 📌 Lookation - Estructura de Carpetas

Este documento describe la organización del proyecto **Lookation**, separando la lógica de **frontend** y **backend**.

## 📂 Estructura General

Lookation/
├── frontend/ # Aplicación móvil en React Native
│ ├── src/ # Código fuente del frontend
│ │ ├── assets/ # Imágenes, íconos y fuentes
│ │ ├── components/ # Componentes reutilizables de UI
│ │ ├── screens/ # Pantallas principales de la app
│ │ ├── navigation/ # Configuración de navegación
│ │ ├── services/ # Conexión a APIs y Firebase
│ │ ├── firebaseConfig.js # Configuración de Firebase
│ │ └── App.tsx # Componente raíz de la app
│ ├── package.json # Dependencias del frontend
│ └── ... # Archivos de configuración RN
│
├── backend/ # Lógica del servidor (opcional con Firebase Functions)
│ ├── functions/ # Cloud Functions de Firebase
│ ├── package.json # Dependencias del backend
│ └── index.js # Punto de entrada backend
│
├── README.md # Documentación del proyecto
└── .gitignore # Archivos y carpetas ignorados por Git

markdown
Copiar
Editar
