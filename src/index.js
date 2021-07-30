import "./styles.css";

const onClickAdd = () => {
  //　テキストBOXの値を取得
  const inputText = document.getElementById("add-text").value;
  // 入力値が取得できたので、入力欄を空に初期化
  document.getElementById("add-text").value = "";

  /**
   * DOMを作成[createElement]HTMLタグを生成
   */
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText; // liタグに取得した入力値をセット

  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 生成と同時にイベントリスナーを付与
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 生成と同時にイベントリスナーを付与
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // 作成した要素に子要素に設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリスト(ulタグ)に追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 追加ボタンのイベントリスナー
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
/**
 * [getElementById]HTMLの対象要素を取得
 * [addEventListener]clickイベントを付与する
 */
