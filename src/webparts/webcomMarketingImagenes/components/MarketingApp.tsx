import * as React from 'react';
import useGetFiles from './useGetFiles';
import { ItemMarketing } from './ItemMarketing';
import { Depths, Spinner, Stack } from '@fluentui/react';
import { Resultados } from './Resultados';

export interface IMarketingAppProps {}

export const MarketingApp: React.FunctionComponent<IMarketingAppProps> = (
  props: React.PropsWithChildren<IMarketingAppProps>
) => {
  const { files, grupos, isLoading } = useGetFiles();

  return (
    <>
      <Stack style={{ boxShadow: Depths.depth4, padding: 10, minHeight: 300 }}>
        {isLoading && (
          <Spinner
            label='Cargando...'
            ariaLive='assertive'
            labelPosition='right'
          />
        )}
        {/* {!isLoading && files.map((i) => <ItemMarketing item={i} />)} */}

        {!isLoading && <Resultados items={files} />}
      </Stack>
    </>
  );
};
