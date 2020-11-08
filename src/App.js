import "./App.css";
import { useState } from "react";
import Container from "./components/container";
import Title from "./components/title";
import ListContainer from "./components/listcontainer";
import Form from "./components/form";
import Items from "./components/items";

function App() {
  const [item, setItem] = useState([
    { text: "Buy milk", done: false },
    { text: "Take kids to school", done: false },
    { text: "Go to the post office", done: false },
  ]);

  const [current, setCurrent] = useState([{ text: "" }]);

  function setDone(i) {
    const newItems = item.map((item, idx) => {
      if (idx === i) {
        item.done = true;
      }
      return item;
    });
    setItem(newItems);
  }

  function setUnDone(i) {
    const newItems = item.map((item, idx) => {
      if (idx === i) {
        item.done = false;
      }
      return item;
    });
    setItem(newItems);
  }

  function currentText(e) {
    setCurrent({ ...current, text: e.target.value });
  }

  function submitText(e) {
    e.preventDefault();
    setItem([...item, current]);
    setCurrent({ text: "" });

    e.target.input.value = "";
  }

  function deleteItem(i) {
    console.log(i);
    let aux = [...item];
    setItem([...aux.slice(0, i), ...aux.slice(i + 1, item.length)]);
  }

  return (
    <>
      <Container>
        <Title />
        <ListContainer>
          <Form currentText={currentText} submitText={submitText} />
          <Items
            item={item}
            deleteItem={deleteItem}
            setDone={setDone}
            setUnDone={setUnDone}
          />
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
