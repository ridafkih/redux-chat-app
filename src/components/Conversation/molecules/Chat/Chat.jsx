import React from "react";
import styles from "./Chat.module.css";

import MessageBunch from "./molecules/MessageBunch/MessageBunch";

function Chat() {
  return (
    <div className={styles.container}>
      <MessageBunch
        messages={"There is only one message in this bunch."}
        outgoing={true}
      ></MessageBunch>
      <MessageBunch
        messages={["There are multiple messages here.", "As you can see!"]}
        outgoing={false}
      ></MessageBunch>
    </div>
  );
}

export default Chat;
