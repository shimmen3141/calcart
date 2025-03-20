import "./ModalContents.scss";

const RemoveSymbolsModalContent = () => (
  <div className="modal-content">
    <div className="section">
      <div>
        ・オンにすると、材料名の先頭の記号等を消去したものが買い物リストに出力されます。
      </div>
      <div className="border">
        〇しょうゆ 20 g　→　しょうゆ 20 g<br />
        (a)にんじん 2本　→　にんじん 2本
      </div>
      <div>・記号等が連続している場合は全て消去されます。</div>
      <div className="border">
        (a)♧じゃがいも 4個　→　じゃがいも 4個
      </div>
      <div>・行中にある記号等は消去されません。</div>
      <div className="border">
        ☆りんご♡ 1個☆　→　りんご♡ 1個☆
      </div>
      <div>
        ※記号は、「漢字・ひらがな・カタカナ・数字・アルファベット以外の文字」、
        または「（ ）に囲まれた部分」としています。
      </div>
    </div>
  </div>
);

export default RemoveSymbolsModalContent;
