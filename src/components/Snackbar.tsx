import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";

interface Types {
  title: string;
}

export default function Snackbar({ title }: Types) {
  useEffect(() => {
    enqueueSnackbar(title, {
      preventDuplicate: true,
    });
  }, [title]);

  return null;
}
