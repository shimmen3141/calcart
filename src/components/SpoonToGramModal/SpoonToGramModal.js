import { Modal } from "../index";
import TeaspoonTable from "./TeaspoonTable";

const SpoonToGramModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen("spoonToGram")}
      onClose={() => onClose("spoonToGram")}
      title="大さじ・小さじ → g の変換について"
    >
      <div>
        ・オンにすると、材料名をもとに分量の「大さじ・小さじ」表記をグラムに変換します。
        <br />
        <br />
        　(例1)
        <br />
        　しょうゆ 大さじ1　→　しょうゆ 18g
        <br />
        　サラダ油 小さじ2　→　サラダ油 8g
        <br />
        <br />
        ・表記揺れにも対応しています。
        <br />
        <br />
        　(例2)
        <br />
        　ケチャップ 大匙 2　→　ケチャップ 36g
        <br />
        　マヨネーズ こさじ３　→　マヨネーズ 12g
        <br />
        　オイスターソース お お 匙 2 杯　→　オイスターソース 36g
        <br />
        <br />
        ・詳しい変換の対応は以下の表をご確認ください。
        <br />
        ※表に含まれていない調味料は変換されません。
        <br />
        <br />
        <TeaspoonTable />
      </div>
    </Modal>
  );
};

export default SpoonToGramModal;
