import Footer from "n/components/Footer";
import Header from "n/components/Header";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "n/components/InfoCard";

export default function Search({ searchData }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <>
      <Head>
        <title>Airbnb | Search</title>
      </Head>

      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />
      <main>
        <section className="flex">
          <section className="flex-grow pt-14 pb-10 px-6">
            <p className="m-0">
              300+ Stays - {range} - for {numberOfGuests} guests
            </p>

            <h1 className="m-0 text-2xl mb-6 mt-2">Stays in {location}</h1>

            <div className="hidden md:inline-flex gap-3">
              <p className="p-button">Cancellation Flexibility</p>
              <p className="p-button">Type of Place</p>
              <p className="p-button">Price</p>
              <p className="p-button">Rooms and Beds</p>
              <p className="p-button">More filter</p>
            </div>
          </section>
        </section>

        <section>
          {searchData.map(
            ({ img, location, description, title, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                description={description}
                title={title}
                star={star}
                price={price}
                total={total}
              />
            )
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchData = await res.json();

  return {
    props: { searchData },
  };
}
