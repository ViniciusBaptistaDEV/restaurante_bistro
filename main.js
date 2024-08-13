$(document).ready(function(){

    $('#celular').mask('(00) 00000-0000');
    $('#telefone').mask('(00) 0000-0000');

    /* Validação "Entre em contato" - INICIO*/ 
    $('#formulario').validate({
        rules:{
            nome: {
                required: true
            },
            celular: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            nome: {
                required: "Por favor, insira seu nome."
            },
            celular: {
                required: "Por favor, insira seu celular."
            },
            email: {
                required: "Por favor, insira seu email.",
                email: "Por favor, insira um email válido."
            },
            mensagem: {
                required: "Por favor, insira sua mensagem."
            }
        },

        submitHandler: function(form) {

            $('#alertas-mensagens').html('<div class="alert alert-dismissible alert-success show">' +
            'Sua mensagem foi enviada com sucesso, em breve entraremos em contato!' +
            '<button id="botaoalerta" class="btn-close" data-bs-dismiss="alert"></button>' +
            '</div>')
            form.reset();
        }

    })
})