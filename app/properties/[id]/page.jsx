import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/app/components/PropertyHeaderImage";
import PropertyDetails from "@/app/components/PropertyDetails";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }) => {
  const resolvedParams = await params; // <-- await here

  await connectDB();
  const property = await Property.findOne({ _id: resolvedParams.id }).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div classNameName="container m-auto py-6 px-6">
          <Link
            href="/properties"
            classNameName="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft classNameName="fas fa-arrow-left mr-2" /> Back to
            Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
