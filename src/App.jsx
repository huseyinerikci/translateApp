import LanguageSelect from "./components/LanguageSelect";
import TextContainer from "./components/TextContainer";
import Button from "./components/Button";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen grid place-items-center text-white">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center">
        <h1 className=" text-4xl text-center fw-semibold mb-7">Translate</h1>
        <LanguageSelect />
        <TextContainer />
        <Button />
      </div>
    </div>
  );
};

export default App;
