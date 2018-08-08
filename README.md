# API REST

## Introducción a las API RESTful

* _**API**_: _**Interfaz de Programación de Aplicaciones**_.
* _**REST**_: _**Transferencia de Estado Representacional**_.

## Herramientas para consumir un API RESTful

* Formatos de sálida:
  * [_**XML**_](https://www.w3.org/XML/)
  * [_**JSON**_](https://www.json.org/json-es.html)
* Clientes HTTP para consumir:
  * [_**AJAX**_](https://developer.mozilla.org/es/docs/Web/Guide/AJAX)
  * [_**Fetch**_](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
  * [_**jQuery.ajax**_](http://api.jquery.com/category/ajax/)
  * [_**Axios**_](https://github.com/axios/axios)
  * [_**POSTMAN**_](https://www.getpostman.com/)


## Anatomía de una petición

Una petición se compone de cuatro elementos:

1. Punto final o Ruta ( _**endpoint / route**_ )
    * Parámetros de Consulta
1. Método ( _**method**_ )
    * _**GET**_
    * _**POST**_
    * _**PUT**_
    * _**DELETE**_
1. Cabeceras ( _**headers**_ )
    * [_**HTTP headers**_](https://developer.mozilla.org/es/docs/Web/HTTP/Headers)
1. Datos o Cuerpo ( _**data / body**_ )

## Códigos de estado de HTTP

| Código | Significado |
| -- | -- |
| 100+ | Respuestas informativas |
| 200+ | Peticiones correctas |
| 300+ | Redirecciones |
| 400+ | Errores del cliente |
| 500+ | Errores de servidor |

Para más información consulta la [Referencia de estado HTTP de MDN](https://developer.mozilla.org/es/docs/Web/HTTP/Status).
