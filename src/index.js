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
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素を取得
    const addTarget = completeButton.parentNode;

    // テキストのみ取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 生成と同時にイベントリスナーを付与
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 作成した要素に子要素に設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリスト(ulタグ)に追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 追加ボタンのイベントリスナー
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
/**
 * [getElementById]HTMLの対象要素を取得
 * [addEventListener]clickイベントを付与する
 */
