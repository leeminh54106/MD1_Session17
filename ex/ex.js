// ex1:Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi "Xin chao".
//  Gọi hàm từ trong phần <body> của trang web.

// function alertMessage(){
//     alert('xin chao')
// }
// alertMessage()

//---------------------------
// ex2:
// function up (a){
//     let b = a + 1;
//     return b ;
// }
// let result = up(4);
// console.log(result);

//----------------------------
// ex3:
// Bài 3: Tạo hàm nhận vào hai tham số.
//  Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.
//   Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

// function namee(a,b) {
//    let au = '';
//     if(a > b){
//     au = alert(`${a} > ${b}`);
//     }
//     if(a <= b){
//         au = `${a + b}`
//     }

//     return au;
// }

// let kq = namee(1,2);
// console.log(kq);

//---------------------------------

// Bài 4:
{/* function addNumbers() {
       firstNum = 4;
       secondNum = 8;
       result = firstNum + secondNum;
       return result;
   }
   result = 0;
   result = addNumbers(); */}
// Thêm từ khóa khai báo cho đầy đủ code
// Thêm console.log để thỏa mãn yêu cầu đề bài

// function addNumbers() {
//    let firstNum = 4;
//    let secondNum = 8;
//    let result = firstNum + secondNum;
//     return result;
// }

// let result = addNumbers();
// console.log(result);

//---------------------------------

// Bài 5: 
// B1: const arr1 = [Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe, Regulus] 
// B2: const arr2 = [Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major, Leo]
// B3: Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. 
//      function (name)
// B4: Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. 
//      for(arr1) -> arr1[i] === name
// B5: Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. 
//     i !== -1 => return arr2[i]
//     i === -1 => log "ko tim thay"


// const arr1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];

// const arr2 = ['UrsaMinor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'UrsaMajor', 'Leo'];

// const nhanVat = prompt('Moi nhap ten nhan vat');


// function namename(nhanVat) {
//     let index = -1;
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] == nhanVat) {
//             index = i;
//             break;
//         }

//     }
//     if (index !== -1) {
//         console.log(arr2[index]);
//     } else {
//         console.log('ko tim thay');
//     }
// }
// namename(nhanVat);

//-----------------------------------------

// const arr1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];

// const arr2 = ['UrsaMinor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'UrsaMajor', 'Leo'];

// let arr3 = prompt('nhap ten trom sao');

// function star(Name) {

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === Name) {
//             console.log(arr2[i]);

//         }
//         // else if (i !== Name) {
//         //     console.log(i);
//         //     break;
//         // }
//         // else {
//         //     console.log('Moi ban nhap lai');
//         // }
//     }
// }
// star(arr3);

//-----------------------------------------

// function frequencyCounter(word) {
// let letters = word.split(''); //chuyển word sang mảng

// let frequency = [h,e,[l,1]]; //mục đích để lưu lại số lần xuất hiện vào trong mảng
//                     //['h-1', 'e-1', 'l-2']

// for(let i in letters){
//     // console.log(letters[i]);
//     let letter = letters[i]; //h


//     let findIndex = frequency.findIndex(function(el) {
//         return el.startsWith(l)
//     });

//     if(findIndex < 0) {
//         frequency.push(`${letter}-1`);
//     }else{
//         let count = frequency[findIndex].split('-')[1];
//         frequency[findIndex] = `${letter}-${+count + 1}`
//     }

// }
// console.log(frequency);
// for (let freq of frequency) {
//     console.log(`ky tu ${freq[0]} xuat hien ${freq[2]} lan`);
// }

// }
// frequencyCounter('hello world')

//--------------------
function chuoi(tumoi){
    let arr = tumoi.split('')
    var arr1 = [];
    for(var i = 0; i < arr.length; i++){
        
    }
}
chuoi('anh la ai lala');