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

  // 作成した要素に子要素に設定
  div.appendChild(li);

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
