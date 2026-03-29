---
trigger: always_on
---

# Rol
Actúa como un *Ingeniero Frontend Senior* de clase mundial especializado en landing pages de alta conversión para negocios locales. Tu objetivo es construir una landing page de alta fidelidad para una peluquería — cinematográfica, con precisión "1:1 Pixel Perfect" y orientada a conseguir reservas de cita. Cada sección debe sentirse como un instrumento de captación: cada scroll debe ser intencional, cada animación debe tener peso y profesionalismo, y cada bloque debe empujar al visitante hacia la reserva.

---

# Identidad de Marca (NO PREGUNTAR)

- **Nombre:** Peluquería Estil
- **Propósito:** Peluquería boutique de confianza en el centro de Tarragona. Especialistas en corte, color, mechas y tratamientos capilares. Llevan desde 2012 haciendo que sus clientes salgan sintiéndose increíbles.
- **CTA primario:** Reservar cita (formulario o WhatsApp)
- **Dirección estética:** Atelier de belleza artesanal — elegancia cálida y accesible, sin frialdad clínica. Material rico, textura dorada, calidad percibida máxima.

---

# Sistema de Diseño Fijo (NUNCA CAMBIAR)

## Paleta de colores oficial (extraída del diseño fuente)
```
--color-primario:      #1C1C1E   ← Carbón profundo (fondo oscuro, navbar, footer)
--color-acento:        #C9A96E   ← Oro cálido (acentos, CTAs, highlights)
--color-acento-claro:  #E8D5B0   ← Oro pálido (variantes suaves del acento)
--color-fondo:         #FAFAF8   ← Blanco roto (fondo base de secciones claras)
--color-texto:         #2C2C2E   ← Carbón de lectura
--color-texto-suave:   #6B6B6B   ← Gris cálido para subtextos y meta-info
--color-blanco:        #FFFFFF   ← Blanco puro
--color-borde:         #E8E4DC   ← Beige arena para bordes y separadores
--color-cream:         #F5F0E8   ← Crema para secciones alternas
```

## Tipografía oficial
- **Títulos / Drama serif:** `'Cormorant Garamond'` (Google Fonts) — especialmente en italic para nombres de sección y titulares con peso emocional
- **Cuerpo / UI:** `'DM Sans'` (Google Fonts) — pesos 300, 400, 500, 600 para todo el texto funcional
- **Jerarquía:** Títulos de sección entre 32px y 52px (clamp); H1 del hero entre 42px y 72px (clamp); labels en uppercase con letter-spacing 2px

## Textura y acabado visual
- Implementar un overlay global de ruido CSS sutil usando un patrón SVG con `<circle>` y opacidad `0.02` — no usar `<feTurbulence>`, sino un `<pattern>` SVG inline en `::after` del body o el hero
- Usar radios de curvatura bajos y contenidos: `border-radius: 4px–8px` para tarjetas, `50px` solo para píldoras/badges y botones whatsapp
- Divisores de sección: barras horizontales de `width: 48px; height: 3px; background: --color-acento`
- Sombras: `0 4px 24px rgba(0,0,0,0.08)` (suave) y `0 8px 40px rgba(0,0,0,0.15)` (fuerte)

## Interacciones
- Botones primarios (fondo dorado): hover → `background: #B8904A; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.4)`
- Botones WhatsApp: `background: #25D366` → hover `#1FAD54`
- Tarjetas de servicio: hover → `transform: translateY(-4px)` + sombra fuerte + barra de acento superior que hace `scaleX(0→1)` desde la izquierda
- Transición global: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

## Animación scroll
- Usar clase `.fade-up` con `opacity: 0; transform: translateY(30px)` que transiciona a visible cuando el elemento entra en viewport (IntersectionObserver, threshold 0.1, rootMargin "-50px")
- Aplicar delays escalonados a hijos: `nth-child(2) → 0.1s`, `nth-child(3) → 0.2s`, etc.
- Si se usa GSAP, usar `gsap.context()` dentro de `useEffect` con `power3.out` para todas las entradas

---

# Arquitectura de Componentes (ESTRUCTURA EXACTA — NO MODIFICAR)

Construye las siguientes secciones en este orden exacto:

## 1. TOPBAR
Barra fina superior con `background: #1C1C1E`. Dos columnas: izquierda con horario (Lun–Vie 9:00–20:00 · Sáb 9:00–14:00), derecha con teléfono clicable, enlace WhatsApp y dirección física. Texto `rgba(255,255,255,0.75)`, hover en `--color-acento`. Ocultar en mobile.

## 2. NAVBAR
`position: sticky; top: 0; z-index: 100`. Fondo `rgba(250,250,248,0.95)` con `backdrop-filter: blur(12px)` y borde inferior `1px solid #E8E4DC`. Al hacer scroll > 60px, añadir `box-shadow: 0 2px 20px rgba(0,0,0,0.08)`.
- Logo: `font-family: Cormorant Garamond; font-size: 26px; font-weight: 700` — "Peluquería" en carbón, "Estil" en `--color-acento`
- Links de navegación: Servicios · Trabajos · Equipo · Reseñas (ocultos en mobile)
- CTAs: botón "📞 Llamar" con borde carbón + botón "Reservar cita" dorado
- Hamburger para mobile → abre menú fullscreen con los mismos links en tipografía serif grande

## 3. HERO
`min-height: 92vh`. Fondo oscuro `#1C1C1E` con gradiente sutil `135deg` desde `#1C1C1E → #2C2416 → #1C1C1E`. Elementos decorativos: panel diagonal derecho con `rgba(201,169,110,0.08)` usando `clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%)` + línea vertical central de `rgba(201,169,110,0.2)`. Placeholder de imagen fotográfica a la derecha (36% ancho, alineado abajo).
- **Badge:** píldora dorada con `✦ Peluquería en Tarragona desde 2012`
- **H1:** `"Tu look, tu <em>identidad.</em><br>Tu peluquería en Tarragona"` — el `<em>` en italic dorado
- **Subtítulo:** Cortes, color y tratamientos con técnicas actualizadas y productos premium. Más de 500 clientes felices en el centro de Tarragona.
- **CTAs:** `📅 Reservar cita ahora` (dorado) + `💬 Escribir por WhatsApp` (borde blanco semitransparente)
- **Stats:** Tres métricas separadas por borde superior: `4.9★ / 127 reseñas en Google`, `12+ / Años de experiencia`, `500+ / Clientes satisfechos` — números en Cormorant Garamond dorado 36px

## 4. BARRA DE CONFIANZA
Franja horizontal `background: #C9A96E`, padding 20px. Fila centrada de 5 ítems con iconos emoji y texto en `font-weight: 600; color: #1C1C1E`: `⭐ 4.9 en Google · 127 reseñas`, `✂️ +12 años de experiencia`, `🎨 Especialistas en color y mechas`, `📍 Centro de Tarragona`, `⚡ Cita disponible esta semana`.

## 5. SERVICIOS
Sección clara (`--color-fondo`). Header izquierdo con tag "NUESTROS SERVICIOS", H2 "Todo lo que tu cabello necesita", divisor dorado y subtítulo. Grid `auto-fit, minmax(260px, 1fr)` de tarjetas de servicio. Cada tarjeta: fondo blanco, borde `#E8E4DC`, radio 8px, con barra de acento superior que aparece en hover desde la izquierda. Contenido: icono emoji grande (32px), nombre en Cormorant Garamond 22px, descripción gris 14px, precio en dorado `font-weight: 600`, enlace "Reservar →" con subrayado dorado. Los 6 servicios son:
- ✂️ **Corte de pelo** — Desde 18€
- 🎨 **Coloración** — Desde 35€
- ✨ **Balayage & Mechas** — Desde 65€
- 💆 **Tratamientos** (keratina, hidratación, botox capilar) — Desde 45€
- 👰 **Peinados & Recogidos** — Desde 30€
- 🌊 **Alisado permanente** — Desde 80€

## 6. GALERÍA / ANTES-DESPUÉS
Sección crema (`#F5F0E8`). Header a la izquierda ("NUESTROS TRABAJOS" / "El resultado habla por sí solo"). Grid de 3 columnas con primera imagen ocupando 2 filas (aspect-ratio 3:4 para el resto). Cada ítem: `border-radius: 6px`, overflow hidden, background placeholder en tonos beige `#E8E4DC → #D4CFC4`. Hover: escala la imagen al 1.05 + aparece overlay oscuro desde abajo con tag de categoría en blanco (`font-size: 12px, font-weight: 600`). CTA centrado al pie: "Ver más en Instagram →". En mobile (768px) pasar a 2 columnas.

## 7. POR QUÉ ELEGIRNOS
Sección clara. Layout 2 columnas (gap 80px): izquierda visual con caja de imagen placeholder (background `rgba(201,169,110,0.15)`, borde dorado sutil, `padding-bottom: 125%`) y badge flotante abajo-derecha (`background: #C9A96E; color: #1C1C1E`) con número grande "12+" en Cormorant Garamond y label "Años de experiencia"; derecha con header ("POR QUÉ ELEGIRNOS" / "Más que una peluquería, un espacio para ti") y 4 feature items. Cada feature: icono en caja `rgba(201,169,110,0.12)` 44×44px + título bold + descripción gris 14px. Los 4 features:
- 🎯 **Consulta personalizada incluida** — Cada visita empieza con un análisis de tu cabello y de lo que buscas
- 🌿 **Productos premium certificados** — Trabajamos con Wella, Schwarzkopf y marcas libres de amoniaco
- ⏱️ **Puntualidad garantizada** — Tu tiempo es sagrado. Nunca esperas más de 5 minutos
- 🔄 **Seguimiento post-servicio** — Te enviamos consejos de mantenimiento adaptados a tu tratamiento

## 8. EQUIPO
Sección crema (`#F5F0E8`). Header centrado ("NUESTRO EQUIPO" / "Las manos detrás de cada look"). Grid `auto-fit, minmax(220px, 1fr)`. Cada tarjeta centrada: foto circular 160×160px con borde `#E8E4DC` → en hover borde dorado + `scale(1.03)`, placeholder con emoji 48px, nombre en Cormorant Garamond 22px, rol en dorado uppercase 13px, descripción gris 14px. Equipo de 3 personas: `💇 María García / Directora & Colorista`, `✂️ Carlos López / Especialista en Corte`, `🌟 Ana Martínez / Técnica en Tratamientos`.

## 9. RESEÑAS
Sección clara. Header row con dos columnas: izquierda con H2 ("Lo que dicen nuestros clientes"), derecha con puntuación grande — número `4.9` en Cormorant Garamond 64px dorado, estrellas `★★★★★` en dorado, label "Basado en 127 reseñas de Google". Grid `auto-fit, minmax(300px, 1fr)` de tarjetas de reseña: fondo blanco, borde arena, padding 28px. Cada tarjeta: avatar circular con inicial en carbón + nombre + fecha / estrellas doradas / texto en italic gris. 3 reseñas de ejemplo auténticas. Enlace centrado al pie: "Ver todas las reseñas en Google Maps →" en dorado.

## 10. CÓMO RESERVAR
Sección oscura (`#1C1C1E`). Header centrado con tag "RESERVA EN 2 MINUTOS" (dorado) y H2 blanco "Así de fácil es conseguir tu cita". Grid de 3 pasos conectados por línea horizontal dorada semitransparente (`opacity: 0.3`). Cada paso: número en círculo 64px (fondo carbón, texto dorado, borde dorado sutil), título en Cormorant Garamond blanco 22px, descripción `rgba(255,255,255,0.55)`. Los pasos: `1. Elige tu servicio`, `2. Escríbenos`, `3. ¡Listo!`. CTAs centrados debajo (flex, gap 16px, wrap): `📅 Reservar por formulario` (dorado) + `💬 Reservar por WhatsApp` (#25D366) + `📞 Llamar ahora` (borde blanco).

## 11. CONTACTO & FORMULARIO
Sección clara (`--color-fondo`), `id="contacto"`. Header izquierdo ("RESERVA TU CITA" / "Hablemos, sin compromiso"). Grid 2 columnas (gap 60px): izquierda con 4 datos de contacto en formato icono-caja + título + valor (📞 Teléfono, 💬 WhatsApp, 📍 Dirección, 🕐 Horario) + embed de mapa Google Maps con `border-radius: 8px`; derecha con formulario en tarjeta blanca (padding 40px, sombra, borde arena): título "Reservar cita" en Cormorant Garamond, campos Nombre / Teléfono / Servicio (select) / Mensaje (textarea opcional), aviso de privacidad en 12px gris, botón `📅 Quiero reservar mi cita` dorado full-width. El botón abre WhatsApp con los datos del formulario pre-rellenados. Mensaje de éxito verde al enviar.

## 12. FOOTER
`background: #1C1C1E`. Grid 3 columnas (`2fr 1fr 1fr`, gap 48px): columna 1 con logo "Peluquería **Estil**" (Estil en dorado) + descripción + iconos sociales circulares (borde `rgba(255,255,255,0.15)` → hover borde dorado); columna 2 "SERVICIOS" con lista de 6 servicios; columna 3 "CONTACTO" con teléfono, WhatsApp, dirección, horario. Borde inferior `rgba(255,255,255,0.08)`. Footer bottom: copyright izquierda + links legales derecha (Aviso legal · Privacidad · Cookies), todo en `rgba(255,255,255,0.6)`. Punto de estado operativo verde pulsante: `● Sistema activo` a la derecha del copyright.


---

# Requisitos Técnicos

- **Stack:** React 19, Tailwind CSS v3.4.17, GSAP 3 (ScrollTrigger), Lucide React
- **Fuentes:** Google Fonts — `Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400` + `DM+Sans