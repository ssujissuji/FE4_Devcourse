export default async function page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}

// export default async function CatchAllSegment({
//   params,
// }: {
//   params: Promise<{ slug: string[] }>;
// }) {
//   const { slug } = await params;
//   console.log(slug);
//   return (
//     <>
//       <h1>CatchAllSegment Component - {slug}</h1>
//       {slug.length === 2 && (
//         <h1>
//           feature {slug[0]}, concepts {slug[1]}
//         </h1>
//       )}
//       {slug.length === 1 && <h1>feature</h1>}
//     </>
//   );
// }
