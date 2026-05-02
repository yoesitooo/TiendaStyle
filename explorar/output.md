### Stack Técnico

- **Frontend:** React 18 con Vite para el bundling y TypeScript para el tipado.
- **Styling:** Tailwind CSS para la estilización de componentes y custom CSS variables para el diseño del sistema.
- **Efectos de Animación:** Framer Motion para transiciones y efectos de hover.
- **Íconos:** Lucide React para una variedad de íconos modernos.
- **Carousel/Slider:** Embla Carousel para implementar carousels personalizados.
- **Fuentes:** Google Fonts (Playfair Display, DM Sans, Space Mono) importadas en el CSS.
- **Imagenes:** URLs de imágenes de Unsplash sin autenticación necesaria.
- **Efectos de Scrolling:** Intersection Observer API para animaciones de fade-in al hacer scroll.
- **3D Graphics:** Three.js para elementos 3D en la sección Hero.

### Estructura del Proyecto

El proyecto está organizado en una estructura jerárquica con los siguientes componentes principales:

1. **Componentes Reutilizables:**
   - `Navbar.tsx`: Barra de navegación.
   - `Hero.tsx`: Sección Hero principal que incluye un elemento 3D.
   - `AnnouncementBar.tsx`: Barra de anuncio.
   - `CategoriesGrid.tsx`: Grilla de categorías de productos.
   - `NewArrivals.tsx`: Sección de nuevos productos llegados.
   - `EditorialBanner.tsx`: Banner editorial.
   - `Bestsellers.tsx`: Sección de mejores vendedores.
   - `BrandValues.tsx`: Valores de la marca.
   - `InstagramGrid.tsx`: Grilla de fotos de Instagram.
   - `Newsletter.tsx`: Formulario de suscripción a newsletter.
   - `Footer.tsx`: Pie de página.

2. **Archivos Principales:**
   - `App.tsx`: Componente principal que combina todos los componentes en una página completa.
   - `index.css`: Archivo para definir variables CSS y estilos globales.
   - `main.tsx`: Punto de entrada del proyecto donde se inicializa la aplicación.

### Deuda Técnica

1. **Dependencias Inconsistente:**
   - El proyecto utiliza tanto Tailwind CSS como custom CSS variables, lo que puede crear conflictos de estilo y dificultar el mantenimiento.

2. **Lack of Documentation:**
   - Falta documentación detallada de las funciones y componentes, lo que hace difícil entender su uso sin inspeccionar el código fuente directamente.

3. **Inconsistencias en Diseño:**
   - A pesar de definir un design system premium, se pueden observar inconsistencias en la aplicación del estilo (por ejemplo, colores, tipografías, bordes).

4. **Repetición de Código:**
   - Existe cierto nivel de repetición en el código, especialmente en componentes como `NewArrivals`, `Bestsellers` y similares que pueden estar utilizando el mismo componente base con diferentes propiedades.

5. **Lack of Testing:**
   - El proyecto no incluye pruebas unitarias o integración, lo que podría llevar a problemas de funcionalidad inesperados sin descubrimiento proactivo.

6. **Hardcoded Values:**
   - Algunos valores como las URLs de imágenes de Unsplash y los colores del diseño se encuentran codificados en el código fuente, lo que dificulta la personalización y mantenimiento a largo plazo.

7. **Ineficiencias en el Desempeño:**
   - El uso de Intersection Observer API para animaciones puede tener una sobrecarga si no se optimiza correctamente.
   - La carga del proyecto podría ser lenta debido al tamaño de las imágenes y la complejidad del código 3D.

[EXPLORACIÓN_COMPLETA]