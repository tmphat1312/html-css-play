const $slt = document.querySelector.bind(document);

var alert  = $slt('.key-detector__alert');
var result = $slt('.key-detector__result');
var code   = $slt('.result__code');
var key    = $slt('.result__box .key');
var ctrl   = $slt('.result__box .ctrl');
var alt    = $slt('.result__box .alt');
var shift  = $slt('.result__box .shift');

//? insert text into DOM element
function insertText(element, content) {
  element.innerText = content;
}


//? Press any key to trigger event
document.addEventListener('keydown', event => {
  event.preventDefault();
  
  //? Hide alert box
  alert.classList.add('hidden');
  //? Show key tracker box
  result.classList.remove('hidden');

  console.log(event)
  //? Insert key information 
  insertText(code, event.which);
  insertText(key, event.code);
  insertText(ctrl, event.ctrlKey);
  insertText(alt, event.altKey);
  insertText(shift, event.shiftKey);
});