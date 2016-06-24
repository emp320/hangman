/* eslint-disable */
$(document).ready(init);

function init() {
  $('#btnStartGame').click(newgame);
  }

  function newgame(){
    const name = $('#txtName').val();

    $.ajax({
      url: '/games',
      method: 'post',
      dataType: 'json',
      data: { name },
      success: function(rsp){
      console.log(rsp);
      }
    });
}
