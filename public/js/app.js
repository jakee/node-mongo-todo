$(function() {
  $('button.create').on('click', function(event) {
    event.preventDefault();
    var $form = $('form.create-todo');
    var title = $form.find('.title').val();
    var task = $form.find('.task').val();
    var todo = {
      title: title,
      task: task
    };
    if (title && task) {
      $.ajax('/todos', {
        method: 'POST',
        data: JSON.stringify(todo),
        contentType: 'application/json',
        dataType: 'json'
      });
    }
  });
});