let current_display='';
document.querySelector('#display').value=current_display;
function change_display(x)
{
    current_display+=x;
    document.querySelector('#display').value=current_display;
}
function back()
{
  current_display='';
  document.querySelector('#display').value=current_display;
}

function calculate()
{
  let res=eval(current_display);
  document.querySelector('#display').value=res;
}