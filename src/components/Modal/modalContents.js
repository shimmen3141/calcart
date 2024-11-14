import "./modalContents.scss";
import TeaspoonGramsTable from "./TeaspoonGramsTable";

export const modalContents = {
  removeSymbols: {
    title: "記号の消去",
    content: (
      <div className="modal-content">
        <p>
          ・オンにすると、材料名の先頭の記号等を消去したものが買い物リストに出力されます。
        </p>
        <div className="border">
          (例1)
          <br />
          〇しょうゆ 20 g　→　しょうゆ 20 g<br />
          (a)にんじん 2本　→　にんじん 2本
        </div>
        <p>・記号等が連続している場合は全て消去されます。</p>
        <div className="border">
          (例2)
          <br />
          (a)♧じゃがいも 4個　→　じゃがいも 4個
        </div>
        <p>・行中にある記号等は消去されません。</p>
        <div className="border">
          (例3)
          <br />
          ☆りんご♡ 1個☆　→　りんご♡ 1個☆
        </div>
        <p>
          ※記号は、「漢字・ひらがな・カタカナ・数字・アルファベット以外の文字」、
          または「（ ）に囲まれた部分」としています。
        </p>
      </div>
    ),
  },
  spoonToGram: {
    title: "大さじ・小さじ→グラムの変換",
    content: (
      <div className="modal-content">
        <p>
          ・オンにすると、材料名をもとに分量の「大さじ・小さじ」表記をグラムに変換します。
        </p>
        <div className="border">
          (例1)
          <br />
          しょうゆ 大さじ1　→　しょうゆ 18g
          <br />
          サラダ油 小さじ2　→　サラダ油 8g
        </div>
        <p>・表記揺れにも対応しています。</p>
        <div className="border">
          (例2)
          <br />
          ケチャップ 大匙 2　→　ケチャップ 36g
          <br />
          マヨネーズ こさじ３　→　マヨネーズ 12g
          <br />
          中濃ソース お お 匙 2 杯　→　中濃ソース 36g
        </div>
        <p>
          ・詳しい変換の対応は以下の表をご確認ください。
          <br />
          ※表に含まれていない調味料は変換されません。
        </p>
        <TeaspoonGramsTable />
      </div>
    ),
  },
  classifyItems: {
    title: "リストの分割",
    content: (
      <div className="modal-content">
        <p>
          ・オンにすると、材料名ごとに「肉」、「野菜」、「その他」にリストを分割します。
        </p>
      </div>
    ),
  },
  inputFormat: {
    title: "入力形式について",
    content: (
      <div className="modal-content">
        <p>・入力形式が表示されます。</p>
        <p>入力形式は「未入力」、「1行1材料」、「2行1材料」の3種類あります。</p>
        <p>
          入力したつもりの形式と表示される入力形式が異なる場合、入力が不適切な可能性があります。
          入力を確認し、適切な形式に修正してください。
        </p>
      </div>
    ),
  },
  default: {
    title: "エラー",
    content: <p>説明がありません。</p>,
  },
};
