// btnというidを持つHTML要素を取得し、定数に代入する
const btn =document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() => {
    console.log('ボタンをクリックしました');

    // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
    // textというidを持つHTML要素を取得し、定数に代入する
    const text = document.getElementById('text');
    // テキストへ文字を出力する
    text.textContent = 'ボタンをクリックしました';
    // コンソールへの出力と、遅延時間2秒の設定
    console.log('非同期処理');
  }, 2000);
});