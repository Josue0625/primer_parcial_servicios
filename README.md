# Primer Parcial 2023 Arquitectura Orientada a Servicios

## Descripción 

Se realizó el primer parcial de la materia de arquitectura orientada a servicio

## Tabla de contenido

- [Estructura del Proyecto](#Estructura-del-Proyecto)
- [API Endpoints](#API-Endpoints)


## Estructura del Proyecto

```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--img\            # Imagenes públicas
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app
```


## API Endpoints

<code>GET /auth</code> 
- **query:** 
    - **username**:  requerido
    - **password**:  requerido

<code>GET /api/producto</code> 
- Request
    - **query**
        - **page**
        - **limit**
- Response
    - **success:** boolean   
    - **msg :** string
    - **count:** number
    - **page :** number
    - **all :** number
    - **data :** array
 
<code>GET /api/producto/:id</code> 
- Request
    - **params:**
        - **id**:  requerido
- Response
    - **success :** boolean
    - **msg :** string
    - **data :** json
    
<code>POST /api/producto</code>
- Request
    - **body:**
        - **nombre** :  requerido
        - **detalle**
        - **valor** :  requerido
        - **img**
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>PUT /api/producto</code>
- Request
    - **body**
        - **id** :  requerido
        - **nombre**
        - **detalle**
        - **valor**
        - **img**
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>DELETE /api/producto/:id</code> 
- Request
    - **params:**
        - **id** : requerido 
- Response
    - **data :** array
    - **msg :** string 
    - **success :** boolean