# Examen Final 2023 Arquitectura Orientada a Servicios

## Descripción 

Se realizó el examen final de la materia de arquitectura orientada a servicios

## Nota

Para correr el back, se debe instalar los cors, con el comando <code>npm install cors</code> 

## Tabla de contenido
- [Back](#BackEnd)
- [Estructura del Back](#Estructura-del-Back)
- [API Endpoints](#API-Endpoints)
- [FrontEnd](#FrontEnd)
- [Estructura del Front](#Estructura-del-Front)
- [Información general del parcial](#información-general-del-parcial)

## BackEnd

## Estructura del Back

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

## FrontEnd

## Estructura del Front


```
src\
 |--app\             # logica de la aplicación
    |--guards\       # guardianes de rutas de la aplicación
    |--home\         # se guardó el formulario y la pagina de auth
        |--components\
            |--form\
        |--pages\
            |--auth\
    |--interceptor\  # manipular solicitudes y respuestas HTTP
    |--product\      # front donde está el diseño del crud para el producto
        |--components\
            |--add-product\
            |--get-all-products\
            |--modal-delete\
            |--modal-update\
            |--modal\
        |--pages\
            |--product\
    |--public\       # partes de la aplicación que se van a usar en cualquier lugar de la aplicación
 |--assets\          # Imagenes del proyecto 

```

## Información general del parcial

El front se encuentra de forma local. En cuanto al back end, se consideró la carga de la base de datos. La base de datos se incorporó en Azure y se gestionó mediante la conexión a DBeaver. Además, el api está trabajando de manera local.