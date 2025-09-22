# 🗓️ Cuando Cobro - Calculadora de Fechas de Pago

Sistema para calcular las fechas de pago de sueldos basado en las reglas de negocio establecidas por la empresa.

## 📋 Descripción

La empresa definió una nueva regla para determinar **cuándo se paga el sueldo** cada mes, basada en dos casos principales:

### ✅ Caso 1: Adelanto de pago
**Condición:** Si el primer día hábil del mes siguiente cae en lunes, fin de semana o feriado.
**Acción:** El sueldo se paga el último día hábil del mes actual.

### ✅ Caso 2: Pago en fecha
**Condición:** Si el primer día hábil del mes siguiente cae entre martes y viernes, y no es feriado.
**Acción:** El sueldo se paga ese mismo día.

## 🚀 Características

- 📊 **Cálculo automático** de fechas de pago para cualquier año
- 🎯 **Lógica de negocio precisa** con manejo de feriados argentinos
- 🌐 **Interfaz web** con Bootstrap 5.3.3
- ⚡ **JavaScript puro** - sin dependencias adicionales
- 📱 **Diseño responsive** para dispositivos móviles

## 📁 Estructura del Proyecto

```
cuando-cobro/
├── index.html          # Página web principal
├── payroll-dates.js    # Lógica de cálculo (Node.js)
├── test.js            # Tests automatizados
├── request.md         # Especificaciones originales
└── README.md          # Este archivo
```

## 🛠️ Uso

### Página Web
Abrir `index.html` en cualquier navegador para ver las fechas de pago de 2025.

### Línea de Comandos
```bash
# Ejecutar tests
node test.js

# Calcular fecha específica
node -e "const p = require('./payroll-dates.js'); console.log('Mayo 2025:', p.getPayDateFormatted(2025, 4));"
```

### Como Módulo
```javascript
const payrollDates = require('./payroll-dates.js');

// Obtener fecha de pago para marzo 2025
const payDate = payrollDates.getPayDateFormatted(2025, 2);
console.log(payDate); // 2025/04/01
```

## 🧪 Testing

El proyecto incluye tests automatizados que verifican:
- ✅ Cálculos correctos para 2024 y 2025
- ✅ Manejo de feriados argentinos
- ✅ Lógica de días hábiles
- ✅ Casos especiales (lunes, fines de semana)

```bash
node test.js
```

## 📚 API

### Funciones Principales

#### `getPayDateFormatted(year, month)`
Retorna la fecha de pago formateada como string.
- **year**: Año (ej: 2025)
- **month**: Mes (0-11, donde 0=Enero)
- **Retorna**: String en formato "YYYY/MM/DD"

#### `getPayDate(year, month)`
Retorna un objeto Date con la fecha de pago.

### Funciones Auxiliares

- `isWeekend(date)` - Verifica si es fin de semana
- `isMonday(date)` - Verifica si es lunes
- `isHoliday(date)` - Verifica si es feriado argentino
- `getFirstBusinessDayOfMonth(year, month)` - Primer día hábil del mes
- `getLastBusinessDayOfMonth(year, month)` - Último día hábil del mes

## 🇦🇷 Feriados Incluidos

El sistema incluye los feriados nacionales argentinos:
- Año Nuevo, Día de la Memoria, Malvinas, Día del Trabajador
- Revolución de Mayo, Güemes, Día de la Bandera, Independencia
- San Martín, Día de la Raza, Soberanía Nacional, Inmaculada Concepción
- Nochebuena, Navidad, Fin de Año

## 🔧 Requisitos

- **Node.js** (para ejecutar scripts de consola)
- **Navegador web** moderno (para la interfaz web)

## 📝 Licencia

Este proyecto es de uso interno para Netrix/ProSIS.
