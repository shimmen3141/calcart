import TeaspoonGramsTable from "../TeaspoonGramsTable";
import "./ModalContents.scss";

const SpoonToGramModalContent = () => (
  <div className="modal-content">
    <div className="section">
      <div>
        ・オンにすると、材料名をもとに分量の「大さじ・小さじ」表記をグラムに変換します。
      </div>
      <div className="border">
        しょうゆ 大さじ1　→　しょうゆ 18g
        <br />
        サラダ油 小さじ2　→　サラダ油 8g
      </div>
      <divp>・表記揺れにも対応しています。</divp>
      <div className="border">
        ケチャップ 大匙 2　→　ケチャップ 36g
        <br />
        マヨネーズ こさじ３　→　マヨネーズ 12g
        <br />
        中濃ソース お お 匙 2 杯　→　中濃ソース 36g
      </div>
      <divp>
        ・詳しい変換の対応は右の表をご確認ください。
        <br />
        ※表に含まれていない調味料は変換されません。
      </divp>
    </div>
    <div className="section">
      <TeaspoonGramsTable />
    </div>
  </div>
);

export default SpoonToGramModalContent;
