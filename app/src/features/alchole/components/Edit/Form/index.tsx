import { useForm } from "react-hook-form";
import { AlcholeType } from "@type/alchole";
import { onSubmit, getDefaultValues } from "../../../helper/form";
import Form from "./Views";

export default function EditForm({ data }: { data?: AlcholeType }) {
  const defaultValues = getDefaultValues(data);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({ defaultValues });

  const overwriteOnSubmit = (d: any) => {
    const values = {
      alchole_uid: data?.alchole_uid,
      ...d,
    };
    onSubmit(values);
  };

  return (
    <>
      <Form
        control={control}
        errors={errors}
        submit={handleSubmit(overwriteOnSubmit)}
        labelLength={data?.labels ? data?.labels.length : 0}
        reviewLength={data?.reviews ? data?.reviews.length : 0}
      />
    </>
  );
}
