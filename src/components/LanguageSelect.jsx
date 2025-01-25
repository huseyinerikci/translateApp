import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice";
import { translateText } from "../redux/actions";
const LanguageSelect = () => {
  const dispatch = useDispatch();
  const { isLoading, languages } = useSelector(
    (store) => store.languageReducer
  );
  const { sourceLang, targetLang, textToTranslate } = useSelector(
    (store) => store.translateReducer
  );
  const formatted = languages.map((i) => ({
    value: i.code,
    label: i.name,
  }));

  return (
    <div className="flex gap-2 text-black">
      <ReactSelect
        value={sourceLang}
        onChange={(selected) => dispatch(setSource(selected))}
        options={formatted.filter((i) => i.value !== targetLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        className="flex-1"
      />
      <button
        onClick={() => dispatch(swap())}
        className="bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white"
      >
        Değiş
      </button>
      <ReactSelect
        value={targetLang}
        onChange={(selected) => {
          dispatch(setTarget(selected));
          if (textToTranslate) {
            dispatch(translateText());
          }
        }}
        options={formatted.filter((i) => i.value !== sourceLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        className="flex-1"
      />
    </div>
  );
};

export default LanguageSelect;
