const PropertyPage = async ({ params }) => {
  const resolvedParams = await params;
  return <div>Property Page!!! {resolvedParams.id}</div>;
};

export default PropertyPage;
