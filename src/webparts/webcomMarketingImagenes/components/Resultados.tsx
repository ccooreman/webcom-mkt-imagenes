import { IFileInfo } from '@pnp/sp/files';
import * as React from 'react';


export interface IResultadosProps {
  items: IFileInfo[];
}

export const Resultados: React.FunctionComponent<IResultadosProps> = (
  props: React.PropsWithChildren<IResultadosProps>
) => {
  return <></>;
};
