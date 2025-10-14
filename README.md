# 🌐 Simple Node.js API – Deploy en Render

![Security](https://img.shields.io/badge/Security-CWE--200%20Fixed-green?style=flat-square&logo=shield)
![Node.js](https://img.shields.io/badge/Node.js-Express-brightgreen?style=flat-square&logo=node.js)
![Status](https://img.shields.io/badge/Status-Production-success?style=flat-square)

Esta es una API básica desarrollada con **Node.js** y **Express**, desplegada en [Render.com](https://render.com).  
Sirve como ejemplo para iniciar proyectos backend, comprender la estructura de una API REST y cómo hacer un despliegue gratuito en la nube.

**🛡️ Seguridad:** Este proyecto implementa medidas de seguridad actualizadas y ha solucionado vulnerabilidades conocidas.

---

## 🚀 Enlace en producción
🔗 **API URL:** [https://new-api-5g3h.onrender.com](https://new-api-5g3h.onrender.com)

Puedes probar la API en tu navegador o desde Postman / cURL.

---

## 📂 Estructura del proyecto

├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md


---

## 🧠 Endpoints disponibles

| Método | Ruta        | Descripción                  |
|--------|-------------|------------------------------|
| GET    | `/`         | Devuelve un mensaje simple   |
| GET    | `/usuarios` | Lista de usuarios simulados  |

---

## ⚙️ Cómo ejecutarlo localmente

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/new_api.git
   cd new_api
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor:**
   ```bash
   node index.js
   ```

El servidor se iniciará en: **http://localhost:3000**

---

## 🛡️ Seguridad implementada

### ✅ Vulnerabilidades solucionadas

| Vulnerabilidad | Código | Estado | Solución |
|----------------|--------|---------|----------|
| Information Exposure - X-Powered-By Header | CWE-200 | ✅ **FIXED** | `app.disable('x-powered-by')` |

**📸 Evidencia de resolución:**

![Vulnerabilidad Resuelta](vulnerabilidad-resuelta.jpg)
*Captura que muestra la vulnerabilidad CWE-200 identificada y posteriormente solucionada en el código.*

### 🔒 Medidas de seguridad aplicadas

- ✅ **Header X-Powered-By deshabilitado** - Previene exposición de información del framework
- ✅ **Middleware JSON habilitado** - Parsing seguro de datos JSON
- ✅ **Estructura REST básica** - Endpoints organizados y documentados

> **Nota:** Esta API sigue las mejores prácticas de seguridad recomendadas para aplicaciones Node.js/Express en producción.

---

## 📝 Contribuciones

¿Encontraste algún problema o tienes una sugerencia? ¡Abre un issue o envía un pull request!

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.