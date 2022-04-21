import styles from "./CardForm.module.scss";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";

const CardForm = ({ columnId, props }) => {
  const [title, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title }, columnId);
    setValue("");
  };

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
      <TextInput
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setValue(e.target.value)
        }
      />
      <Button>Add Title</Button>
    </form>
  );
};

export default CardForm;
