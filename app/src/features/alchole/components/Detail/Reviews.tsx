import { Typography } from "@mui/material";
import { ReviewType } from "@type/alchole";
import { getRandomKey } from "@util/variable";

export default function Reviews({ reviews }: { reviews: ReviewType[] }) {
  return (
    <>
      <div className="text-xl">レビュー</div>
      <div className="mt-8" data-testid="alchole-review-test">
        {reviews.map((review) => (
          <div key={getRandomKey()}>
            <div className="mb-2">投稿者：{review.author}</div>
            <Typography color="text.secondary">{review.content}</Typography>
          </div>
        ))}
      </div>
    </>
  );
}
