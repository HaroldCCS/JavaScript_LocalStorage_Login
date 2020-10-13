Análisis
Realizar un software que maneje el ingreso al sistema con un login, de no haberse registrado, pasar a un formulario de registro y luego ingresar sesión, esto mediante localstorage en JavaScript. Al ingresar desplegar un combo Box con unos hobbies previamente registrados, a media que se seleccionan los hobbies irlos mostrando en la misma página, estos se deben guardar en el localstorage.
1.	Diseñar las 3 interfaces.
1.1.	Interfaz 1: Login
1.2.	Interfaz 1: Registro
1.3.	Interfaz 1: Inicio (Selector de Hobbies)
2.	Realizar código en JavaScript que contenga:
2.1.	Al ingresar usuario y contraseña en la interfaz de “Registro” y oprimir el botón de “Registrarme”:
2.1.1.	El sistema valida que el usuario y contraseña no sean valores nulos. De ser nulos, el sisma mostrara en la interfaz un mensaje alertando que “no se han encontrado valores para validar”.
2.1.2.	El sistema valida que el usuario no sea existente. De existir, el sistema retornara un mensaje “El usuario ya existe”.
2.1.3.	El sistema registra el usuario y su contraseña si las anteriores condiciones se cumplen.
2.2.	 Al ingresar usuario y contraseña en la interfaz de “Login” y oprimir el botón de “Entrar”:
2.2.1.	El sistema valida que el usuario y contraseña no sean valores nulos. De ser nulos, el sisma mostrara en la interfaz un mensaje alertando que “no se han encontrado valores para validar”.
2.2.2.	El sistema valida que el usuario y contraseña se correspondan y/o sean existentes en el localstorage. De no ser así, retornara un mensaje mencionando “El usuario o contraseña son incorrectos”
2.2.3.	El sistema ingresa sesión redirigiéndolo a la interfaz “Inicio”, si se cumplen las anteriores condiciones
2.3.	Al ingresar a la interfaz “Inicio” el sistema deberá:
2.3.1.	El sistema valida que haya un usuario registrado con una sesión abierta en el localstorage. de no ser así, el sistema lo redirigirá a la interfaz “Login”. 
2.3.2.	 El sistema traerá SI EXISTEN los hobbies del localstorage si fueron previamente registrados y los imprimirá en la pantalla
2.3.3.	El sistema deberá permitir realizar registros de nuevos hobbies seleccionándolos y se mostraran instantáneamente en la pantalla
