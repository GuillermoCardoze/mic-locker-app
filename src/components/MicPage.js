import MicList from "./MicList";
import Search from "./Search";

function MicPage({ microphones, setSearch, handleRemoveMic }) {
 
  return (
    <div className="mic-container">
      <Search setSearch={setSearch}/>
      <MicList microphones={microphones} handleRemoveMic={handleRemoveMic}/>
    </div>
  );
}

export default MicPage;