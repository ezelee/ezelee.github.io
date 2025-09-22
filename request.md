# 🗓️ Lógica de fechas de pago de sueldos

La empresa definió una nueva regla para determinar **cuándo se paga el sueldo** cada mes. La lógica se puede resumir en dos casos:

---

## ✅ Caso 1: Adelanto de pago

**Condición:**  
Si el **primer día hábil del mes siguiente** cae en **lunes, fin de semana o feriado**.

**Acción:**  
El sueldo se paga el **último día hábil del mes actual**.

**Ejemplo:**  
- Si el 1° del mes siguiente es **lunes 03/06**, el pago se hace el **viernes 31/05**.

---

## ✅ Caso 2: Pago en fecha

**Condición:**  
Si el **primer día hábil del mes siguiente** cae entre **martes y viernes**, y **no es feriado**.

**Acción:**  
El sueldo se paga ese **mismo día**.

**Ejemplo:**  
- Si el 1° del mes siguiente es **jueves 01/08**, el pago se hace el **jueves 01/08**.

---

## 🧠 Pseudocódigo en JavaScript


function getPayDate(firstBusinessDayNextMonth) {
  if (isWeekendOrHoliday(firstBusinessDayNextMonth) || isMonday(firstBusinessDayNextMonth)) {
    return lastBusinessDayOfCurrentMonth();
  } else {
    return firstBusinessDayNextMonth;
  }
}