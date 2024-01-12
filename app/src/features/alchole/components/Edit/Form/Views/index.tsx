import { Button } from "@mui/material";
import MainForm from "./Main";
import LabelForm from "./Label";
import ReviewForm from "./Review";
import { PropsCommonType } from "./props.d";

type PropsType = PropsCommonType & {
  submit: () => void;
  labelLength: number;
  reviewLength: number;
};

export default function FormView({
  control,
  errors,
  submit,
  labelLength,
  reviewLength,
}: PropsType) {
  return (
    <form onSubmit={submit}>
      <div className="flex flex-col gap-4">
        <MainForm control={control} errors={errors} />
        <LabelForm
          control={control}
          errors={errors}
          labelLength={labelLength}
        />
        <ReviewForm
          control={control}
          errors={errors}
          reviewLength={reviewLength}
        />
      </div>
      <div className="mt-10" />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
