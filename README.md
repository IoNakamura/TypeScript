# Proyecto TypeScript 🚀

Este repositorio contiene dos proyectos principales de ejemplos y ejercicios en TypeScript:

- **CursoTypeScript**: Ejercicios desde conceptos básicos (variables, arrays, funciones, clases, interfaces) hasta módulos, generics y fetch.
- **TypeScriptAvanzado**: Ejemplos y patrones más complejos con sobrecargas, parámetros rest, mapeo de tipos, interfaces extendidas, y arquitectura de aplicación.

---

## Requisitos 💻

- **Node.js** y **npm**
- **TypeScript** (verifica con `tsc --version`)
- **ts-node** para ejecutar archivos TypeScript sin transpilar

---

## Instrucciones de Ejecución ⚙️

Para **ejecutar un archivo TypeScript sin transpilar** usa:

```sh
npx ts-node .\<archivo>.ts
```

## Estructura del Proyecto

### CursoTypeScript
- **1_variables_base**: Variables básicas (cadenas, números, booleanos).
- **2_variables_diferentes**: Variables de distinto tipo (any y unknown).
- **3_listas**: Arrays, tuplas y enumeradores.
- **4_interfaces**: Uso y extensión de interfaces.
- **5_metodos**: Funciones, métodos, parámetros opcionales, valores por defecto y sobrecarga.
- **6_clases**: Creación de clases y constructores.
- **7_tipos_clase**: Clases con herencia, modificadores de acceso y tipos.
- **8_genericos**: Funciones y clases genéricas.
- **9_extends**: Restricciones con extends en generics.
- **10_modulos**: Importación y exportación de módulos.
- **17_types**: Uso avanzado de tipos: mapped types, condicionales y template literal types.
- **19_fetch**: Ejemplo de async/await y uso de fetch con un index.html.

### TypeScriptAvanzado
- **src/app/**: Modelos y servicios (usuarios, productos, categorías, órdenes).
- **src/functions/**: Ejemplos de funciones avanzadas (sobrecarga, parámetros por defecto y opcionales, rest).
- **src/interfaces/**: Definiciones y ejemplos de interfaces.
- **src/types/**: Definiciones de tipos personalizados, enums, tuples, never, unknown, etc.
- **src/demo.ts**: Archivo demo para probar funcionalidades.

## Compilación y Ejecución

Para compilar los proyectos, ubícate en la carpeta respectiva y ejecuta:
```sh
tsc -p [tsconfig.json](http://_vscodecontentref_/0)
```

Por ejemplo:

```
npx ts-node [variables.ts](http://_vscodecontentref_/0)
```

Para transpilar un archivo TypeScript a JavaScript usa el compilador:
```
tsc <archivo>.ts
```

Luego podrás ejecutar el archivo generado (usualmente con Node.js):
```
node <archivo>.js
```
