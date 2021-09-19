//EJERCICIO 3
$(document).ready(function () {
    $('#eje3').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                message: 'Nombre no valido',
                validators: {
                    notEmpty: {
                        message: ' Se requiere el nombre de usuario'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            apellido: {
                message: 'Apellido no valido',
                validators: {
                    notEmpty: {
                        message: ' El apellido es obligatorio'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            edad: {
                message: 'Edad no valida',
                validators: {
                    notEmpty: {
                        message: ' La edad es obligatoria'
                    }
                }
            },
            direccion: {
                message: 'Dirección invalida',
                validators: {
                    notEmpty: {
                        message: ' Se requiere una dirección'
                    }
                }
            }
        },

    });
});



//EJERCICIO 4
$(document).ready(function () {
    $('#eje4').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                message: 'Nombre no valido',
                validators: {
                    notEmpty: {
                        message: ' Se requiere el nombre de usuario'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            apellido: {
                message: 'Apellido no valido',
                validators: {
                    notEmpty: {
                        message: ' El apellido es obligatorio'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            edad: {
                message: 'Edad no valida',
                validators: {
                    notEmpty: {
                        message: ' La edad es obligatoria'
                    }
                }
            },
            direccion: {
                message: 'Dirección invalida',
                validators: {
                    notEmpty: {
                        message: ' Se requiere una dirección'
                    }
                }
            }
        },

    });
});

//EJERCICIO 5
$(document).ready(function () {
    $('#eje5').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                message: 'Nombre no valido',
                validators: {
                    notEmpty: {
                        message: ' Se requiere el nombre de usuario'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            apellido: {
                message: 'Apellido no valido',
                validators: {
                    notEmpty: {
                        message: ' El apellido es obligatorio'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            edad: {
                message: 'Edad no valida',
                validators: {
                    notEmpty: {
                        message: ' La edad es obligatoria'
                    }
                }
            },
            direccion: {
                message: 'Dirección invalida',
                validators: {
                    notEmpty: {
                        message: ' Se requiere una dirección'
                    }
                }
            },
            estudio: {
                validators: {
                    notEmpty: {
                        message: ' Se requiere seleccionar una opción'
                    }
                }
            },
            sexo: {
                validators: {
                    notEmpty: {
                        message: ' Se requiere seleccionar una opción'
                    }
                }
            }
        },

    });
});

//EJERCICIO 6
$(document).ready(function () {
    $('#eje6').bootstrapValidator({
        message: 'Este valor no es valido',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                message: 'Nombre no valido',
                validators: {
                    notEmpty: {
                        message: ' Se requiere el nombre de usuario'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            apellido: {
                message: 'Apellido no valido',
                validators: {
                    notEmpty: {
                        message: ' El apellido es obligatorio'
                    },
                    regexp: {
                        regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                        message: ' La primer letra en mayuscula. Solo letras.'
                    }
                }
            },
            edad: {
                message: 'Edad no valida',
                validators: {
                    notEmpty: {
                        message: ' La edad es obligatoria'
                    }
                }
            },
            direccion: {
                message: 'Dirección invalida',
                validators: {
                    notEmpty: {
                        message: ' Se requiere una dirección'
                    }
                }
            },
            estudios: {
                validators: {
                    notEmpty: {
                        message: ' Se requiere seleccionar una opción'
                    }
                }
            },
            sexo: {
                validators: {
                    notEmpty: {
                        message: ' Se requiere seleccionar una opción'
                    }
                }
            }
        },

    });
});

//EJERCICIO 3 - TP2
$(document).ready(function () {
    $('#tp2ej3').bootstrapValidator({
        message: 'Este valor no es valido',

        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: ' El nombre de usuario es requerido'
                    },
                    stringLength: {
                        min: 4,
                        message: ' Debe superar los 4 caracteres'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: ' Completar campo <br>'
                    },
                    regexp: {
                        regexp: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
                        message: ' Debe contener letras y números <br>'
                    },
                    stringLength: {
                        min: 8,
                        message: ' Debe tener mínimo 8 caracteres <br>'
                    },
                    different: {
                        field: 'username',
                        message: ' La contraseña no debe ser igual al nombre del usuario'
                    }
                }
            },
        }
    });






    //EJERCICIO 1 - TP3
    $(document).ready(function () {
        $('#tp3eje1').bootstrapValidator({
            message: 'Este valor no es valido',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                archivo: {
                    validators: {
                        notEmpty: {
                            message: ' envie un archivo'
                        },
                        file: {
                            maxSize: 1024*1024*2,
                            extension: 'doc,pdf',
                            type: 'application/pdf,application/msword, ',                            
                            message: 'solo pdf o doc'
                        }
                    }
                }
            },
        });
    });


        //EJERCICIO 2 - TP3
        $(document).ready(function () {
            $('#tp3eje2').bootstrapValidator({
                message: 'Este valor no es valido',
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    archivo: {
                        validators: {
                            notEmpty: {
                                message: ' envie un archivo'
                            },
                            file: {
                                maxSize: 1024*1024*2,
                                extension: 'txt',
                                type: 'txt',                            
                                message: 'solo pdf o doc'
                            }
                        }
                    }
                },
            });
        });


    //EJERCICIO 3 - TP3
    $(document).ready(function () {
        $('#tp3eje3').bootstrapValidator({
            message: 'Este valor no es valido',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                titulo: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere un título'
                        }
                    }
                },
                actores: {
                    validators: {
                        notEmpty: {
                            message: ' Ingresar actores'
                        }
                    }
                },
                director: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere el director'
                        }
                    }
                },
                guion: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere un guión'
                        }
                    }
                },
                produccion: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere el nombre de producción'
                        }
                    }
                },
                year: {
                    validators: {
                        notEmpty: {
                            message: ' Año obligatorio'
                        }
                    }
                },
                nacion: {
                    validators: {
                        notEmpty: {
                            message: ' La nacionalidad es obligatoria'
                        },
                        regexp: {
                            regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                            message: ' La primer letra en mayuscula. Solo letras.'
                        }
                    }
                },
                minutos: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere duración'
                        }
                    }
                },
                edad: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere seleccionar una opción'
                        }
                    }
                },
                sinopsis: {
                    validators: {
                        notEmpty: {
                            message: ' Debe añadir una descripción'
                        }
                    }
                },
                imagen: {
                    validators: {
                        notEmpty: {
                            message: ' Debe añadir una imagen'
                        },
                        filesize: {
                            extension: 'jpg,png',
                            type: 'image/jpg,image/png',
                            minSize: 600 * 600,
                            message: 'la imagen debe tener un minimo de 600 de alto'
                        }



                    }
                },

            },
        });
    });

    //EJERCICIO 3 - TP3
    $(document).ready(function () {
        $('#tp3eje3').bootstrapValidator({
            message: 'Este valor no es valido',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                titulo: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere un título'
                        }
                    }
                },
                actores: {
                    validators: {
                        notEmpty: {
                            message: ' Ingresar actores'
                        }
                    }
                },
                director: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere el director'
                        }
                    }
                },
                guion: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere un guión'
                        }
                    }
                },
                produccion: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere el nombre de producción'
                        }
                    }
                },
                year: {
                    validators: {
                        notEmpty: {
                            message: ' Año obligatorio'
                        }
                    }
                },
                nacion: {
                    validators: {
                        notEmpty: {
                            message: ' La nacionalidad es obligatoria'
                        },
                        regexp: {
                            regexp: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                            message: ' La primer letra en mayuscula. Solo letras.'
                        }
                    }
                },
                minutos: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere duración'
                        }
                    }
                },
                edad: {
                    validators: {
                        notEmpty: {
                            message: ' Se requiere seleccionar una opción'
                        }
                    }
                },
                sinopsis: {
                    validators: {
                        notEmpty: {
                            message: ' Debe añadir una descripción'
                        }
                    }
                },
                imagen: {
                    validators: {
                        notEmpty: {
                            message: ' Debe añadir una imagen'
                        },
                        filesize: {
                            extension: 'jpg,png',
                            type: 'image/jpg,image/png',
                            minSize: 600 * 600,
                            message: 'la imagen debe tener un minimo de 600 de alto'
                        }



                    }
                },

            },
        });
    });
});