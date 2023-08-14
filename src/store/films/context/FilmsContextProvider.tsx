import { PropsWithChildren, useMemo, useState } from "react";
import { Film, FilmsContextStructure } from "../../../types";
import FilmsContext from "./FilmsContext";

const FilmsContextProvider = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [films] = useState<Film[]>([]);

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      films: films,
    }),
    [films],
  );
  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
