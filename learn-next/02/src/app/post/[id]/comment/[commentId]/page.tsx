import { notFound } from "next/navigation";

export const metadata = {
  title: "CommentId",
};

export default async function page({
  params,
}: {
  params: Promise<{ commentId: string }>;
}) {
  const random = Math.floor(Math.random() * 2);
  if (random === 1) throw new Error(`random is ${random}`);
  const { commentId } = await params;
  if (Number(commentId) > 10) notFound();
  return (
    <>
      <h1>{commentId}</h1>
    </>
  );
}
