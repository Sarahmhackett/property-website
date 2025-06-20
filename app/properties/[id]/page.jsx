import Link from "next/link";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/app/components/PropertyHeaderImage";
import PropertyDetails from "@/app/components/PropertyDetails";
import PropertyImages from "@/app/components/PropertyImages";
import { FaArrowLeft } from "react-icons/fa";
import { convertToSerializableObject } from "@/utils/convertToObject";
import BookmarkButton from "@/app/components/BookmarkButton";
import ShareButtons from "@/app/components/ShareButton";
import ContactForm from "@/app/components/ContactForm";

const PropertyPage = async ({ params }) => {
  const resolvedParams = await params; // <-- await here

  await connectDB();

  const propertyDoc = await Property.findOne({ _id: resolvedParams.id }).lean();

  const property = convertToSerializableObject(propertyDoc);

  if (!property) {
    return <h1 className="text-center text-2xl font-bold mt-10">Not found</h1>;
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="fas fa-arrow-left mr-2" /> Back to
            Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] w-full gap-6">
            <PropertyDetails property={property} />

            <aside className="space-y-4">
              <BookmarkButton property={property} />
              <ShareButtons property={property} />
              <ContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
