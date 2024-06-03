import MicList from "./MicList";
import Search from "./Search";

function MicPage({ microphones, setSearch }) {
 
  return (
    <div className="mic-container">
      <Search setSearch={setSearch}/>
      <MicList microphones={microphones}/>
    </div>
  );
}

export default MicPage;