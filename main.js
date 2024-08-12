$(document).ready(function(){

    $('#telefone').mask('(00) 000000000');

    /* Validação "Entre em contato" - INICIO*/ 
    $('#formulario').validate({
        rules:{
            nome: {
                required: true
            },
            telefone: {
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
            telefone: {
                required: "Por favor, insira seu telefone."
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