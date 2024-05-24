import React from "react";
import NewMicForm from "./NewMicForm";
import MicList from "./MicList";
import Search from "./Search";

function MicPage() {
  return (
    <main>
      <NewMicForm />
      <Search />
      <MicList />
    </main>
  );
}

export default MicPage;