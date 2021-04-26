const items = document.querySelector('.items');
const item_delete = document.querySelector('.item_delete');
const footer_input = document.querySelector('.footer_input');
const footer_button = document.querySelector('.footer_button');

function popUp() {
  alert("fill up the blank space");
}

function onAdd(){
  const text = footer_input.value;
  if(text == ""){
    console.log('empty');
    popUp();
    return;
  } else {
    //새로운 아이템을 만든다
      const item = createItem(text);
      
      //items 컨테이너 안에 새로 만든 아이템을 추가한다.
      items.appendChild(item);
      
      //새로 추가된 아이템으로 스크롤링
      item.scrollIntoView({behavior: "smooth", block: 'center',inline: "nearest"});
      
      //인풋박스 초기화
      footer_input.value = '';
      footer_input.focus();
  }

}

function createItem(text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item_row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const item_name = document.createElement('span');
  item_name.setAttribute('class', 'item_name');
  item_name.innerText = text; 

  const item_delete = document.createElement('button');
  item_delete.setAttribute('class', 'item_delete');
  item_delete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  item_delete.addEventListener('click', ()=>{
    ul.removeChild(itemRow);
  });

  const item_divider = document.createElement('div');
  item_divider.setAttribute('class', 'item_divider');

  item.appendChild(item_name);
  item.appendChild(item_delete);

  itemRow.appendChild(item);
  itemRow.appendChild(item_divider);

  return itemRow;
}


footer_input.addEventListener('keypress', event => {
  if(event.key == 'Enter') {
    onAdd();
  }
})

footer_button.addEventListener('click', onAdd);