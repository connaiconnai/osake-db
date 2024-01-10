import { alcholeType } from "@type/alchole";
import { TextField } from "@ui-parts/index";

export default function EditForm({ data }: { data: alcholeType | undefined }) {
  return (
    <>
      <form action="">
        <TextField label="test" size="small" />
      </form>
    </>
  );
}
