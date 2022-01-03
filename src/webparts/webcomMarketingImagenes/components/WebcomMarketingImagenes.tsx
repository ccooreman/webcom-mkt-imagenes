import * as React from "react";
import useGetFiles from "./useGetFiles";
import { ItemMarketing } from "./ItemMarketing";
import { Stack } from "@fluentui/react";

export interface IMarketingImagenesProps {}

export const MarketingImagenes: React.FunctionComponent<
  IMarketingImagenesProps
> = (props: React.PropsWithChildren<IMarketingImagenesProps>) => {
  const { files, isLoading } = useGetFiles();

  return (
    <>
      Aca
      {isLoading && <div>Cargando...</div>}
	  <Stack horizontal wrap tokens={{childrenGap:10}}>
      	{!isLoading && files.map((i) => <ItemMarketing item={i} />)}
	  </Stack>
    </>
  );
};
