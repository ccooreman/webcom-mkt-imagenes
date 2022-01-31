import { useState, useEffect } from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";


export default function useGetFiles() {
  const [files, setFiles] = useState<any[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
        setIsloading(true);
        const allItems: any[] = await sp.web.lists.getById("1dc93d9d-93b0-4cf5-b37d-f27a9804131d").items.select('FileRef, FileLeafRef').getAll();
        console.log({ allItems });
        setFiles(allItems);
        setIsloading(false);
    }

    fetchData();
  }, []);

  return {
    files, isLoading
  };
}