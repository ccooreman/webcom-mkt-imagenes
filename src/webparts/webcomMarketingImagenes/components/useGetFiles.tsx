import { useState, useEffect } from 'react';
import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/files';
import '@pnp/sp/folders';
import { IFileInfo } from '@pnp/sp/files';

export default function useGetFiles() {
  const [files, setFiles] = useState<IFileInfo[]>();
  const [grupos, setGrupos] = useState<any[]>();
  const [isLoading, setIsloading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      let libId = 'c774736e-bbec-482a-9caf-128a0236738e';
      let libUrl = await sp.web.lists.getById(libId).rootFolder();
      let newFiles = await sp.web
        .getFolderByServerRelativeUrl(libUrl.ServerRelativeUrl)
        .files();
      // console.log({newFiles});
      let newItems = await sp.web.lists
        .getById('c774736e-bbec-482a-9caf-128a0236738e')
        // .items
        .items.select('FileLeafRef', 'Tags')
        .orderBy('FileLeafRef', true)
        .get();
      console.log({ newItems });

      //generacion de categorias
      let allCategories = [];

      newItems.map((i) => {
        let itemExist = allCategories.includes(i?.Tags[0]);
        allCategories.push(i?.Tags[0]);
      });

      console.log(allCategories);

      // setFiles(newFiles);
      setIsloading(false);
    }

    fetchData();
  }, []);

  return {
    files,
    grupos,
    isLoading,
  };
}
