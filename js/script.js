$(document).ready(function(){

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    $("#txtNombre").keyup(function(){
		var nombre = $(this).val();
		var arraynombre = nombre.split(" ");
		
		if(arraynombre.length === 2){
            if(arraynombre[1].length > 0){
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }            
		}else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(nombre === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
	});

    $("#txtPassword").keyup(function(){
		var password = $(this).val();

		if(password.length >= 8){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");         
		}else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(password === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
	});

    $("#txtApellido").keyup(function(){
		var nombre = $(this).val();
		var arraynombre = nombre.split(" ");
		
		if(arraynombre.length === 2){
            if(arraynombre[1].length > 0){
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }            
		}else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(nombre === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
	});

    $("#txtCorreo").keyup(function(){
        var correo = $("#txtCorreo").val();

        if(correo.indexOf("@") > -1 && correo.indexOf(".com") > -1){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(correo === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }

    });

    $("#txtTelefono").keyup(function(){
        var telefono = $("#txtTelefono").val();

        if(telefono.length > 14){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
        }

        if(telefono === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }
    });

    $("#txtComentario").keyup(function(){
        var comentario = $("#txtComentario").val();

        if(comentario.length >= 30){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $("#textComentario").fadeOut();
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            $("#textComentario").fadeIn();
            $("#txtCaracteres").text(30-(comentario.length));
        }

        if(comentario === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }

    });

    

    $('#txtEdad').on('input', function () { 
        this.value = this.value.replace(/[^0-9]/g,'');
    });

    $("#txtEdad").keyup(function(){
        var edad = $(this).val();

        if(edad > 0 && edad < 120){
            $(this).removeClass("is-invalid");
            $(this).addClass("is-valid");
            $("#textComentario").fadeOut();
        }else{
            $(this).removeClass("is-valid");
            $(this).addClass("is-invalid");
            $("#textComentario").fadeIn();
            $("#txtCaracteres").text(30-(comentario.length));
        }

        if(comentario === ""){
            $(this).removeClass("is-valid");
            $(this).removeClass("is-invalid");
        }

    });

    $("#txtTelefono").mask("(000) 0000-0000", {placeholder: "(000) 0000-0000"});

    $("#btnAlert").on("click", function(){
        if(validarCajasVacias() > 0){
            Swal.fire(
                'Ha habido un error en los datos!',
                'Favor corregir los campos marcados',
                'error'
              )
        }else{
            Swal.fire(
                'Gracias por escribirnos',
                'Ten en cuenta que nuestro equipo va a revisar tus comentarios para detectar alguna anomalía',
                'success'
              )
            removeError();
            limpiar();
        }
    })
        


    function removeError(){
        $("#txtNombre").removeClass("is-invalid");
        $("#txtApellido").removeClass("is-invalid");
        $("#txtCorreo").removeClass("is-invalid");
        $("#txtPassword").removeClass("is-invalid");
        $("#txtDepartamento").removeClass("is-invalid");
        $("#Checkbox1").removeClass("is-invalid");
        $("#Checkbox2").removeClass("is-invalid");
        $("#Checkbox3").removeClass("is-invalid");
        $("#Checkbox4").removeClass("is-invalid");
        $("#txtMasculino").removeClass("is-invalid");
        $("#txtFemenino").removeClass("is-invalid");
        $("#txtEdad").removeClass("is-invalid");
        $("#txtTelefono").removeClass("is-invalid");
        $("#txtComentario").removeClass("is-invalid");
    
        $("#txtNombre").removeClass("is-valid");
        $("#txtApellido").removeClass("is-valid");
        $("#txtCorreo").removeClass("is-valid");
        $("#txtPassword").removeClass("is-valid");
        $("#txtDepartamento").removeClass("is-valid");
        $("#Checkbox1").removeClass("is-valid");
        $("#Checkbox2").removeClass("is-valid");
        $("#Checkbox3").removeClass("is-valid");
        $("#Checkbox4").removeClass("is-valid");
        $("#txtMasculino").removeClass("is-valid");
        $("#txtFemenino").removeClass("is-valid");
        $("#txtEdad").removeClass("is-valid");
        $("#txtTelefono").removeClass("is-valid");
        $("#txtComentario").removeClass("is-valid");
    }

    function limpiar(){
        $("#txtNombre").val("");
        $("#txtCorreo").val("");
        $("#txtTelefono").val("");
        $("#txtComentario").val("");
        $("#txtApellido").val("");
        $("#txtPassword").val("");
        $("#txtEdad").val("");
        $("#txtDepartamento option[value=C]").prop("selected", true);
        $('#Checkbox1').prop('checked', false);
        $('#Checkbox2').prop('checked', false);
        $('#Checkbox3').prop('checked', false);
        $('#Checkbox4').prop('checked', false);

        $('#txtMasculino').prop('checked', false);
        $('#txtFemenino').prop('checked', false);
    }

    function validarCajasVacias(){
        var cont = 0;
        var nombre = $("#txtNombre");
        var apellido = $("#txtApellido");
        var correo = $("#txtCorreo");
        var telefono = $("#txtTelefono");
        var comentario = $("#txtComentario");
        var password = $("#txtPassword");
        var edad = $("#txtEdad");
        var genero = "";
        var masculino = $("#txtMasculino");
        var femenino = $("#txtFemenino");
        var deporte = $("#Checkbox1");
        var leer = $("#Checkbox2");
        var videojuegos = $("#Checkbox3");
        var estudiar = $("#Checkbox4");

        var depto = $("#txtDepartamento").find(":selected").val();
        if(depto === "-- Seleccione uno"){
            $("#txtDepartamento").addClass("is-invalid");
        }

        if(masculino.prop("checked")){
            genero = "Masculino";
        }
        if(femenino.prop("checked")){
            genero = "Femenino";            
        }
    
        if(nombre.val() === ""){
            nombre.addClass("is-invalid");
            cont++;
        }
    
        if(correo.val() === ""){
            correo.addClass("is-invalid");
            cont++;
        }
    
        if(telefono.val() === ""){
            telefono.addClass("is-invalid");
            cont++;
        }
    
        if(comentario.val() === ""){
            comentario.addClass("is-invalid");
            cont++;
        }
        if(apellido.val() === ""){
            apellido.addClass("is-invalid");
        }
        if(password.val() === ""){
            password.addClass("is-invalid");
        }
        if(edad.val() === ""){
            edad.addClass("is-invalid");
        }

        if(genero !== "Masculino" && genero !== "Femenino"){
            masculino.addClass("is-invalid");
            femenino.addClass("is-invalid");
            cont++;
            console.log("sdA");
        }

        if(!deporte.prop("checked") && !leer.prop("checked") && !videojuegos.prop("checked") && !estudiar.prop("checked")){
            deporte.addClass("is-invalid");
            leer.addClass("is-invalid");
            videojuegos.addClass("is-invalid");
            estudiar.addClass("is-invalid");
            cont++;
        }
        
    
        return cont;
    
    }

    $("#btnCancelar").on("click",function(){
        limpiar();
        removeError();
        Swal.fire(
            'Ingreso de datos cancelados',
            'Se han limpiado los datos',
            'success'
          );
    });
    

});