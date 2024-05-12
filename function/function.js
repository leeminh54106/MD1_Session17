// console.log('hello');

// //
//  const todolist = [
//     'do homework at 8pm',
//     'do exercises everyday',
//     'go to bed early',
//  ];

//  //xay dung chuong trinh ung dung todo list
//  //cho nguoi dung nhap vao 4 chu cai C/R/U/D

//  while(true){
//     let userinput = prompt('please input C/R/U/D to control your todo list');

//  if(userinput === 'C'){
//     //them moi 1 todo vao trong todolist
//     let todo = prompt('please input todo content');
//     todolist.push(todo);
   
//  }else if(userinput === 'R'){
//     //in ra danh sach todo
//     printtodo()

//  }else if(userinput === 'U'){
//      let index = prompt('please input todo index');
//      let content = prompt('please input new todo content');
//      //cap nhap noi dung cua 1 todo
//      todolist[index - 1] = content;
     
//      //in ra danh sach todo.
//      printtodo()
//  }else if(userinput === 'D'){
//     //xoa 1 todo ra khoi todolist
//     //in ra danh sach todo
//     let Input = +prompt('nhap thu can xoa');
//     todolist.splice((todolist[Input]),1);
//     printtodo()
//  }else if(userinput === 'E'){
//     //thoat khoi chuong trinh
//     console.log('thank for using the app');
//     break;
//  }else{
//     //invalid commands
//  }
//  }

//  function printtodo(){
//      //in ra danh sach todo
//     for(let key in todolist){//for in đại diện cho chỉ số của từng phần tử đã duyệt qua
//        console.log(`${+key + 1}. ${todolist[key]}`); // thêm dấu cộng để chuyển thành số
//     }

//  }

//--------------------------------------------------------------------------------------------------
// xay dung 1 chuong trinh 1 ham may tinh cam tay 
// chi thuc hien phap cong 2 so

function calculator(a,b){
    
   return a + b ;
}
let a = calculator(10,20);
console.log(a);

