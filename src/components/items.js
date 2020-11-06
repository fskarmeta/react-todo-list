const Items = ({ item, deleteItem }) => {
  return (
    <div className="add-items-container">
      {item.map((element, index) => (
        <div className="item" key={index}>
          <spam className="item-text">{element.text}</spam>
          <i className="fas fa-trash" onClick={() => deleteItem(index)}></i>
        </div>
      ))}
    </div>
  );
};

export default Items;
