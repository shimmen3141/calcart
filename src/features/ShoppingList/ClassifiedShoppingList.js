const ClassifiedShoppingList = ({ classifiedItemList }) => {
  return (
    <div>
      {/* 野菜リスト */}
      {classifiedItemList.vegetable.length > 0 && (
        <ul className="vegetableList">
          <div className="listTypeTag">野菜</div>
          {classifiedItemList.vegetable.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name}  {item.info}
            </div>
          ))}
        </ul>
      )}

      {/* 肉リスト */}
      {classifiedItemList.meat.length > 0 && (
        <ul className="meatList">
          <div className="listTypeTag">肉</div>
          {classifiedItemList.meat.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name}  {item.info}
            </div>
          ))}
        </ul>
      )}

      {/* その他リスト */}
      {classifiedItemList.others.length > 0 && (
        <ul className="normalList">
          <div className="listTypeTag">その他</div>
          {classifiedItemList.others.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name}  {item.info}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassifiedShoppingList;
