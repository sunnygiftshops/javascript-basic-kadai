//画面から取得したHTML要素が定数に代入されている
//ボタンをクリックした際に正しく文字変更がされている

// btnというidを持つHTML要素を取得し、定数に代入する
const btn =document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
    console.log('ボタンをクリックしました');
    text.textContent = 'ボタンをクリックしました';
});