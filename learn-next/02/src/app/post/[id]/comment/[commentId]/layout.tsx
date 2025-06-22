// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ commentId: string }>;
// }) {
//   const { commentId } = params;
//   return {
//     title: `commentId = ${commentId}`,
//   };
// }

export const metatdata = {
  title: "CommentId",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
