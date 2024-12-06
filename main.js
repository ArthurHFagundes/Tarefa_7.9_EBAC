$('form').on('submit', function(e) {
    e.preventDefault();

    const nomeDaTarefa = $('#nome-tarefa').val();
    const novaTarefa = $('<li></li>');
    $(`
        <div>
            <ul>
                <li>
                    <p class="">${nomeDaTarefa}</p>
                </li>
            </ul>
        </div>
    `).appendTo(novaTarefa);
    $(novaTarefa).appendTo("ul");
    $('#nome-tarefa').val('');

    $('p').click(function(){
        $('p').addClass('tarefa-concluida');
    })

    $('p').dblclick(function(){
        $('p').removeClass('tarefa-concluida');
    })
});