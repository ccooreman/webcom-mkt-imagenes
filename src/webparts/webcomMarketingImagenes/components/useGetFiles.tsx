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
        const allItems: any[] = await sp.web.lists.getById("f8217056-d14c-47b1-8cd8-e9ec03e1c215").items.select('FileRef, FileLeafRef').getAll();
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