import "./ModalContents.scss";

const RemoveSymbolsModalContent = () => (
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
);

export default RemoveSymbolsModalContent;
