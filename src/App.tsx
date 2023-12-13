import { LaptopOutline } from "../lib/asoka-lib";
import AsokaStartLoading from "./Components/AsokaStartLoading";

function App() {
  return (
    <main>
      <AsokaStartLoading />
      <LaptopOutline className="h-[200px] w-[200px] text-red-700" />
    </main>
  );
}

export default App;
