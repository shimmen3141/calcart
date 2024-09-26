import { Modal } from "../index";

const RemoveSymbolsModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen("removeSymbols")}
      onClose={() => onClose("removeSymbols")}
      title="記号消去について"
    >
      <p>
        ・オンにすると、材料名の先頭の記号等を消去したものが買い物リストに出力されます。
        <br />
        <br />
        　(例1)
        <br />
        　〇しょうゆ 20 g　→　しょうゆ 20 g<br />
        　(a)にんじん 2本　→　にんじん 2本
        <br />
        <br />
        ・記号等が連続している場合は全て消去されます。
        <br />
        <br />
        　(例2)
        <br />
        　(a)♧じゃがいも 4個　→　じゃがいも 4個
        <br />
        <br />
        ・行中にある記号等は消去されません。
        <br />
        <br />
        　(例3)
        <br />
        　☆りんご♡ 1個☆　→　りんご♡ 1個☆
        <br />
        <br />
        ※記号は、「漢字・ひらがな・カタカナ・数字・アルファベット以外の文字」、
        または「（ ）に囲まれた部分」としています。
      </p>
    </Modal>
  );
};

export default RemoveSymbolsModal;
