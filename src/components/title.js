const Title = ({ clearAll }) => {
  return (
    <div className="title-container">
      <spam className="title-text">Todo List</spam>
      <i
        class="fas fa-recycle delete"
        title="Delete all tasks"
        onClick={clearAll}
      ></i>
    </div>
  );
};

export default Title;
